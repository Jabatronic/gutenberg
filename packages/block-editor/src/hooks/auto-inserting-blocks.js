/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { addFilter } from '@wordpress/hooks';
import { Fragment } from '@wordpress/element';
import { PanelBody, ToggleControl } from '@wordpress/components';
import { createHigherOrderComponent } from '@wordpress/compose';
import { createBlock, store as blocksStore } from '@wordpress/blocks';
import { useDispatch, useSelect } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { InspectorControls } from '../components';
import { store as blockEditorStore } from '../store';

function AutoInsertingBlocksControl( props ) {
	const autoInsertedBlocksForCurrentBlock = useSelect(
		( select ) => {
			const { getBlockTypes } = select( blocksStore );
			return getBlockTypes()?.filter(
				( block ) =>
					block.autoInsert &&
					Object.keys( block.autoInsert ).includes( props.blockName )
			);
		},
		[ props.blockName ]
	);

	const {
		autoInsertedBlockClientIds,
		blockIndex,
		rootClientId,
		innerBlocksLength,
	} = useSelect(
		( select ) => {
			const { getBlock, getBlockIndex, getBlockRootClientId } =
				select( blockEditorStore );
			const _rootClientId = getBlockRootClientId( props.clientId );

			const _autoInsertedBlockClientIds =
				autoInsertedBlocksForCurrentBlock.reduce( ( acc, block ) => {
					const relativePosition =
						block?.autoInsert?.[ props.blockName ];
					let autoInsertedBlock;
					if ( [ 'before', 'after' ].includes( relativePosition ) ) {
						const siblings = getBlock( _rootClientId )?.innerBlocks;

						// Any of the current block's siblings (with the right block type) qualifies
						// as an auto-inserted block (inserted `before` or `after` the current one),
						// as the block might've been auto-inserted and then moved around a bit by the user.
						autoInsertedBlock = siblings.find(
							( { name } ) => name === block.name
						);
					} else if (
						[ 'first_child', 'last_child' ].includes(
							relativePosition
						)
					) {
						const { innerBlocks } = getBlock( props.clientId );

						// Any of the current block's child blocks (with the right block type) qualifies
						// as an auto-inserted first or last child block, as the block might've been
						// auto-inserted and then moved around a bit by the user.
						autoInsertedBlock = innerBlocks.find(
							( { name } ) => name === block.name
						);
					}

					if ( autoInsertedBlock ) {
						acc[ block.name ] = autoInsertedBlock.clientId;
					}

					// TOOD: If no auto-inserted block was found in any of its designated locations,
					// we want to check if it's present elsewhere in the block tree.
					// If it is, we'd consider it manually inserted and would want to remove the
					// corresponding toggle from the block inspector panel.

					return acc;
				}, {} );

			return {
				blockIndex: getBlockIndex( props.clientId ),
				innerBlocksLength: getBlock( props.clientId )?.innerBlocks
					?.length,
				rootClientId: _rootClientId,
				autoInsertedBlockClientIds: _autoInsertedBlockClientIds,
			};
		},
		[ autoInsertedBlocksForCurrentBlock, props.blockName, props.clientId ]
	);

	const { insertBlock, removeBlock } = useDispatch( blockEditorStore );

	if ( ! autoInsertedBlocksForCurrentBlock.length ) {
		return null;
	}

	// Group by block namespace (i.e. prefix before the slash).
	const groupedAutoInsertedBlocks = autoInsertedBlocksForCurrentBlock.reduce(
		( groups, block ) => {
			const [ prefix ] = block.name.split( '/' );
			if ( ! groups[ prefix ] ) {
				groups[ prefix ] = [];
			}
			groups[ prefix ].push( block );
			return groups;
		},
		{}
	);

	const insertBlockIntoDesignatedLocation = ( block, relativePosition ) => {
		if ( [ 'before', 'after' ].includes( relativePosition ) ) {
			insertBlock(
				block,
				relativePosition === 'after' ? blockIndex + 1 : blockIndex,
				rootClientId, // Insert as a child of the current block's parent
				false
			);
		} else if (
			[ 'first_child', 'last_child' ].includes( relativePosition )
		) {
			insertBlock(
				block,
				// TODO: It'd be great if insertBlock() would accept negative indices for insertion.
				relativePosition === 'first_child' ? 0 : innerBlocksLength,
				props.clientId, // Insert as a child of the current block.
				false
			);
		}
	};

	return (
		<InspectorControls>
			<PanelBody title={ __( 'Plugins' ) } initialOpen={ true }>
				{ Object.keys( groupedAutoInsertedBlocks ).map( ( vendor ) => {
					return (
						<Fragment key={ vendor }>
							<h3>{ vendor }</h3>
							{ groupedAutoInsertedBlocks[ vendor ].map(
								( block ) => {
									// TODO: Display block icon.
									// <BlockIcon icon={ block.icon } />

									const checked = Object.keys(
										autoInsertedBlockClientIds
									).includes( block.name );

									return (
										<ToggleControl
											checked={ checked }
											key={ block.title }
											label={ block.title }
											onChange={ () => {
												if ( ! checked ) {
													// Create and insert block.
													const relativePosition =
														block.autoInsert[
															props.blockName
														];
													insertBlockIntoDesignatedLocation(
														createBlock(
															block.name
														),
														relativePosition
													);
													return;
												}

												// Remove block.
												const clientId =
													autoInsertedBlockClientIds[
														block.name
													];
												removeBlock( clientId, false );
											} }
										/>
									);
								}
							) }
						</Fragment>
					);
				} ) }
			</PanelBody>
		</InspectorControls>
	);
}

export const withAutoInsertingBlocks = createHigherOrderComponent(
	( BlockEdit ) => {
		return ( props ) => {
			const blockEdit = <BlockEdit key="edit" { ...props } />;
			return (
				<>
					{ blockEdit }
					<AutoInsertingBlocksControl
						blockName={ props.name }
						clientId={ props.clientId }
					/>
				</>
			);
		};
	},
	'withAutoInsertingBlocks'
);

if ( window?.__experimentalAutoInsertingBlocks ) {
	addFilter(
		'editor.BlockEdit',
		'core/auto-inserting-blocks/with-inspector-control',
		withAutoInsertingBlocks
	);
}
