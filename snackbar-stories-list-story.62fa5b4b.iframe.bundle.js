"use strict";(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[8628],{"./packages/a11y/build-module/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>speak});var build_module=__webpack_require__("./packages/i18n/build-module/index.js");function addContainer(ariaLive="polite"){const container=document.createElement("div");container.id=`a11y-speak-${ariaLive}`,container.className="a11y-speak-region",container.setAttribute("style","position: absolute;margin: -1px;padding: 0;height: 1px;width: 1px;overflow: hidden;clip: rect(1px, 1px, 1px, 1px);-webkit-clip-path: inset(50%);clip-path: inset(50%);border: 0;word-wrap: normal !important;"),container.setAttribute("aria-live",ariaLive),container.setAttribute("aria-relevant","additions text"),container.setAttribute("aria-atomic","true");const{body}=document;return body&&body.appendChild(container),container}let previousMessage="";function speak(message,ariaLive){!function clear(){const regions=document.getElementsByClassName("a11y-speak-region"),introText=document.getElementById("a11y-speak-intro-text");for(let i=0;i<regions.length;i++)regions[i].textContent="";introText&&introText.setAttribute("hidden","hidden")}(),message=function filterMessage(message){return message=message.replace(/<[^<>]+>/g," "),previousMessage===message&&(message+=" "),previousMessage=message,message}(message);const introText=document.getElementById("a11y-speak-intro-text"),containerAssertive=document.getElementById("a11y-speak-assertive"),containerPolite=document.getElementById("a11y-speak-polite");containerAssertive&&"assertive"===ariaLive?containerAssertive.textContent=message:containerPolite&&(containerPolite.textContent=message),introText&&introText.removeAttribute("hidden")}!function domReady(callback){"undefined"!=typeof document&&("complete"!==document.readyState&&"interactive"!==document.readyState?document.addEventListener("DOMContentLoaded",callback):callback())}((function setup(){const introText=document.getElementById("a11y-speak-intro-text"),containerAssertive=document.getElementById("a11y-speak-assertive"),containerPolite=document.getElementById("a11y-speak-polite");null===introText&&function addIntroText(){const introText=document.createElement("p");introText.id="a11y-speak-intro-text",introText.className="a11y-speak-intro-text",introText.textContent=(0,build_module.__)("Notifications"),introText.setAttribute("style","position: absolute;margin: -1px;padding: 0;height: 1px;width: 1px;overflow: hidden;clip: rect(1px, 1px, 1px, 1px);-webkit-clip-path: inset(50%);clip-path: inset(50%);border: 0;word-wrap: normal !important;"),introText.setAttribute("hidden","hidden");const{body}=document;return body&&body.appendChild(introText),introText}(),null===containerAssertive&&addContainer("assertive"),null===containerPolite&&addContainer("polite")}))},"./packages/components/src/snackbar/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),_wordpress_a11y__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/a11y/build-module/index.js"),_wordpress_element__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/element/build-module/serialize.js"),_wordpress_element__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/index.js"),_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/i18n/build-module/index.js"),_wordpress_warning__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/warning/build-module/index.js"),_button__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./packages/components/src/button/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function UnforwardedSnackbar({className,children,spokenMessage=children,politeness="polite",actions=[],onRemove,icon=null,explicitDismiss=!1,onDismiss,listRef},ref){function dismissMe(event){event&&event.preventDefault&&event.preventDefault(),listRef?.current?.focus(),onDismiss?.(),onRemove?.()}!function useSpokenMessage(message,politeness){const spokenMessage="string"==typeof message?message:(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.ZP)(message);(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useEffect)((()=>{spokenMessage&&(0,_wordpress_a11y__WEBPACK_IMPORTED_MODULE_1__.D)(spokenMessage,politeness)}),[spokenMessage,politeness])}(spokenMessage,politeness),(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useEffect)((()=>{const timeoutHandle=setTimeout((()=>{explicitDismiss||(onDismiss?.(),onRemove?.())}),1e4);return()=>clearTimeout(timeoutHandle)}),[onDismiss,onRemove,explicitDismiss]);const classes=classnames__WEBPACK_IMPORTED_MODULE_0___default()(className,"components-snackbar",{"components-snackbar-explicit-dismiss":!!explicitDismiss});actions&&actions.length>1&&("undefined"!=typeof SCRIPT_DEBUG&&!0===SCRIPT_DEBUG&&(0,_wordpress_warning__WEBPACK_IMPORTED_MODULE_6__.Z)("Snackbar can only have 1 action, use Notice if your message require many messages"),actions=[actions[0]]);const snackbarContentClassnames=classnames__WEBPACK_IMPORTED_MODULE_0___default()("components-snackbar__content",{"components-snackbar__content-with-icon":!!icon});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{ref,className:classes,onClick:explicitDismiss?void 0:dismissMe,tabIndex:0,role:explicitDismiss?"":"button",onKeyPress:explicitDismiss?void 0:dismissMe,"aria-label":explicitDismiss?"":(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Dismiss this notice"),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:snackbarContentClassnames,children:[icon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"components-snackbar__icon",children:icon}),children,actions.map((({label,onClick,url},index)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_button__WEBPACK_IMPORTED_MODULE_7__.ZP,{href:url,variant:"tertiary",onClick:event=>function onActionClick(event,onClick){event.stopPropagation(),onRemove?.(),onClick&&onClick(event)}(event,onClick),className:"components-snackbar__action",children:label},index))),explicitDismiss&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{role:"button","aria-label":"Dismiss this notice",tabIndex:0,className:"components-snackbar__dismiss-button",onClick:dismissMe,onKeyPress:dismissMe,children:"✕"})]})})}UnforwardedSnackbar.displayName="UnforwardedSnackbar";const Snackbar=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.forwardRef)(UnforwardedSnackbar),__WEBPACK_DEFAULT_EXPORT__=Snackbar;try{Snackbar.displayName="Snackbar",Snackbar.__docgenInfo={description:"A Snackbar displays a succinct message that is cleared out after a small delay.\n\nIt can also offer the user options, like viewing a published post.\nBut these options should also be available elsewhere in the UI.\n\n```jsx\nconst MySnackbarNotice = () => (\n  <Snackbar>Post published successfully.</Snackbar>\n);\n```",displayName:"Snackbar",props:{className:{defaultValue:null,description:"A CSS `class` to give to the wrapper element.",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The displayed message of a notice. Also used as the spoken message for\nassistive technology, unless `spokenMessage` is provided as an alternative message.",name:"children",required:!0,type:{name:"ReactNode"}},spokenMessage:{defaultValue:{value:"`children`"},description:"Used to provide a custom spoken message in place of the `children` default.",name:"spokenMessage",required:!1,type:{name:"ReactNode"}},status:{defaultValue:{value:"'info'"},description:"Determines the color of the notice: `warning` (yellow),\n`success` (green), `error` (red), or `'info'`.\nBy default `'info'` will be blue, but if there is a parent Theme component\nwith an accent color prop, the notice will take on that color instead.",name:"status",required:!1,type:{name:"enum",value:[{value:'"warning"'},{value:'"success"'},{value:'"error"'},{value:'"info"'}]}},onRemove:{defaultValue:{value:"noop"},description:"Function called when dismissing the notice",name:"onRemove",required:!1,type:{name:"() => void"}},politeness:{defaultValue:{value:"'assertive' for 'error' status, 'polite' for all other statuses"},description:"A politeness level for the notice's spoken message. Should be provided as\none of the valid options for an `aria-live` attribute value.\n\nA value of `'assertive'` is to be used for important, and usually\ntime-sensitive, information. It will interrupt anything else the screen\nreader is announcing in that moment.\nA value of `'polite'` is to be used for advisory information. It should\nnot interrupt what the screen reader is announcing in that moment\n(the \"speech queue\") or interrupt the current task.\n\nNote that this value should be considered a suggestion; assistive\ntechnologies may override it based on internal heuristics.\n@see https://www.w3.org/TR/wai-aria-1.1/#aria-live",name:"politeness",required:!1,type:{name:"enum",value:[{value:'"assertive"'},{value:'"polite"'}]}},isDismissible:{defaultValue:{value:"true"},description:"Whether the notice should be dismissible or not",name:"isDismissible",required:!1,type:{name:"boolean"}},onDismiss:{defaultValue:{value:"noop"},description:"A deprecated alternative to `onRemove`. This prop is kept for\ncompatibilty reasons but should be avoided.",name:"onDismiss",required:!1,type:{name:"() => void"}},actions:{defaultValue:{value:"[]"},description:"An array of action objects. Each member object should contain:\n\n- `label`: `string` containing the text of the button/link\n- `url`: `string` OR `onClick`: `( event: SyntheticEvent ) => void` to specify\n   what the action does.\n- `className`: `string` (optional) to add custom classes to the button styles.\n- `noDefaultClasses`: `boolean` (optional) A value of `true` will remove all\n   default styling.\n- `variant`: `'primary' | 'secondary' | 'link'` (optional) You can denote a\n   primary button action for a notice by passing a value of `primary`.\n\nThe default appearance of an action button is inferred based on whether\n`url` or `onClick` are provided, rendering the button as a link if\nappropriate. If both props are provided, `url` takes precedence, and the\naction button will render as an anchor tag.",name:"actions",required:!1,type:{name:"NoticeAction[]"}},__unstableHTML:{defaultValue:null,description:"Determines whether or not the message should be parsed as custom HTML\ninstead of a string.",name:"__unstableHTML",required:!1,type:{name:"boolean"}},icon:{defaultValue:{value:"null"},description:"The icon to render in the snackbar.",name:"icon",required:!1,type:{name:"ReactNode"}},explicitDismiss:{defaultValue:{value:"false"},description:"Whether to require user action to dismiss the snackbar.\nBy default, this is dismissed on a timeout, without user interaction.",name:"explicitDismiss",required:!1,type:{name:"boolean"}},listRef:{defaultValue:null,description:"A ref to the list that contains the snackbar.",name:"listRef",required:!1,type:{name:"MutableRefObject<HTMLDivElement>"}},as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:"enum",value:[{value:'"symbol"'},{value:'"object"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"article"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"big"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"button"'},{value:'"canvas"'},{value:'"caption"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"dialog"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"figure"'},{value:'"footer"'},{value:'"form"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"img"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"keygen"'},{value:'"label"'},{value:'"legend"'},{value:'"li"'},{value:'"link"'},{value:'"main"'},{value:'"map"'},{value:'"mark"'},{value:'"menu"'},{value:'"menuitem"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noindex"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"option"'},{value:'"output"'},{value:'"p"'},{value:'"param"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"slot"'},{value:'"script"'},{value:'"section"'},{value:'"select"'},{value:'"small"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"style"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"table"'},{value:'"template"'},{value:'"tbody"'},{value:'"td"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"time"'},{value:'"title"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'},{value:'"webview"'},{value:'"svg"'},{value:'"animate"'},{value:'"animateMotion"'},{value:'"animateTransform"'},{value:'"circle"'},{value:'"clipPath"'},{value:'"defs"'},{value:'"desc"'},{value:'"ellipse"'},{value:'"feBlend"'},{value:'"feColorMatrix"'},{value:'"feComponentTransfer"'},{value:'"feComposite"'},{value:'"feConvolveMatrix"'},{value:'"feDiffuseLighting"'},{value:'"feDisplacementMap"'},{value:'"feDistantLight"'},{value:'"feDropShadow"'},{value:'"feFlood"'},{value:'"feFuncA"'},{value:'"feFuncB"'},{value:'"feFuncG"'},{value:'"feFuncR"'},{value:'"feGaussianBlur"'},{value:'"feImage"'},{value:'"feMerge"'},{value:'"feMergeNode"'},{value:'"feMorphology"'},{value:'"feOffset"'},{value:'"fePointLight"'},{value:'"feSpecularLighting"'},{value:'"feSpotLight"'},{value:'"feTile"'},{value:'"feTurbulence"'},{value:'"filter"'},{value:'"foreignObject"'},{value:'"g"'},{value:'"image"'},{value:'"line"'},{value:'"linearGradient"'},{value:'"marker"'},{value:'"mask"'},{value:'"metadata"'},{value:'"mpath"'},{value:'"path"'},{value:'"pattern"'},{value:'"polygon"'},{value:'"polyline"'},{value:'"radialGradient"'},{value:'"rect"'},{value:'"stop"'},{value:'"switch"'},{value:'"text"'},{value:'"textPath"'},{value:'"tspan"'},{value:'"use"'},{value:'"view"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/snackbar/index.tsx#Snackbar"]={docgenInfo:Snackbar.__docgenInfo,name:"Snackbar",path:"packages/components/src/snackbar/index.tsx#Snackbar"})}catch(__react_docgen_typescript_loader_error){}try{snackbar.displayName="snackbar",snackbar.__docgenInfo={description:"A Snackbar displays a succinct message that is cleared out after a small delay.\n\nIt can also offer the user options, like viewing a published post.\nBut these options should also be available elsewhere in the UI.\n\n```jsx\nconst MySnackbarNotice = () => (\n  <Snackbar>Post published successfully.</Snackbar>\n);\n```",displayName:"snackbar",props:{className:{defaultValue:null,description:"A CSS `class` to give to the wrapper element.",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The displayed message of a notice. Also used as the spoken message for\nassistive technology, unless `spokenMessage` is provided as an alternative message.",name:"children",required:!0,type:{name:"ReactNode"}},spokenMessage:{defaultValue:{value:"`children`"},description:"Used to provide a custom spoken message in place of the `children` default.",name:"spokenMessage",required:!1,type:{name:"ReactNode"}},status:{defaultValue:{value:"'info'"},description:"Determines the color of the notice: `warning` (yellow),\n`success` (green), `error` (red), or `'info'`.\nBy default `'info'` will be blue, but if there is a parent Theme component\nwith an accent color prop, the notice will take on that color instead.",name:"status",required:!1,type:{name:"enum",value:[{value:'"warning"'},{value:'"success"'},{value:'"error"'},{value:'"info"'}]}},onRemove:{defaultValue:{value:"noop"},description:"Function called when dismissing the notice",name:"onRemove",required:!1,type:{name:"() => void"}},politeness:{defaultValue:{value:"'assertive' for 'error' status, 'polite' for all other statuses"},description:"A politeness level for the notice's spoken message. Should be provided as\none of the valid options for an `aria-live` attribute value.\n\nA value of `'assertive'` is to be used for important, and usually\ntime-sensitive, information. It will interrupt anything else the screen\nreader is announcing in that moment.\nA value of `'polite'` is to be used for advisory information. It should\nnot interrupt what the screen reader is announcing in that moment\n(the \"speech queue\") or interrupt the current task.\n\nNote that this value should be considered a suggestion; assistive\ntechnologies may override it based on internal heuristics.\n@see https://www.w3.org/TR/wai-aria-1.1/#aria-live",name:"politeness",required:!1,type:{name:"enum",value:[{value:'"assertive"'},{value:'"polite"'}]}},isDismissible:{defaultValue:{value:"true"},description:"Whether the notice should be dismissible or not",name:"isDismissible",required:!1,type:{name:"boolean"}},onDismiss:{defaultValue:{value:"noop"},description:"A deprecated alternative to `onRemove`. This prop is kept for\ncompatibilty reasons but should be avoided.",name:"onDismiss",required:!1,type:{name:"() => void"}},actions:{defaultValue:{value:"[]"},description:"An array of action objects. Each member object should contain:\n\n- `label`: `string` containing the text of the button/link\n- `url`: `string` OR `onClick`: `( event: SyntheticEvent ) => void` to specify\n   what the action does.\n- `className`: `string` (optional) to add custom classes to the button styles.\n- `noDefaultClasses`: `boolean` (optional) A value of `true` will remove all\n   default styling.\n- `variant`: `'primary' | 'secondary' | 'link'` (optional) You can denote a\n   primary button action for a notice by passing a value of `primary`.\n\nThe default appearance of an action button is inferred based on whether\n`url` or `onClick` are provided, rendering the button as a link if\nappropriate. If both props are provided, `url` takes precedence, and the\naction button will render as an anchor tag.",name:"actions",required:!1,type:{name:"NoticeAction[]"}},__unstableHTML:{defaultValue:null,description:"Determines whether or not the message should be parsed as custom HTML\ninstead of a string.",name:"__unstableHTML",required:!1,type:{name:"boolean"}},icon:{defaultValue:{value:"null"},description:"The icon to render in the snackbar.",name:"icon",required:!1,type:{name:"ReactNode"}},explicitDismiss:{defaultValue:{value:"false"},description:"Whether to require user action to dismiss the snackbar.\nBy default, this is dismissed on a timeout, without user interaction.",name:"explicitDismiss",required:!1,type:{name:"boolean"}},listRef:{defaultValue:null,description:"A ref to the list that contains the snackbar.",name:"listRef",required:!1,type:{name:"MutableRefObject<HTMLDivElement>"}},as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:"enum",value:[{value:'"symbol"'},{value:'"object"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"article"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"big"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"button"'},{value:'"canvas"'},{value:'"caption"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"dialog"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"figure"'},{value:'"footer"'},{value:'"form"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"img"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"keygen"'},{value:'"label"'},{value:'"legend"'},{value:'"li"'},{value:'"link"'},{value:'"main"'},{value:'"map"'},{value:'"mark"'},{value:'"menu"'},{value:'"menuitem"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noindex"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"option"'},{value:'"output"'},{value:'"p"'},{value:'"param"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"slot"'},{value:'"script"'},{value:'"section"'},{value:'"select"'},{value:'"small"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"style"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"table"'},{value:'"template"'},{value:'"tbody"'},{value:'"td"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"time"'},{value:'"title"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'},{value:'"webview"'},{value:'"svg"'},{value:'"animate"'},{value:'"animateMotion"'},{value:'"animateTransform"'},{value:'"circle"'},{value:'"clipPath"'},{value:'"defs"'},{value:'"desc"'},{value:'"ellipse"'},{value:'"feBlend"'},{value:'"feColorMatrix"'},{value:'"feComponentTransfer"'},{value:'"feComposite"'},{value:'"feConvolveMatrix"'},{value:'"feDiffuseLighting"'},{value:'"feDisplacementMap"'},{value:'"feDistantLight"'},{value:'"feDropShadow"'},{value:'"feFlood"'},{value:'"feFuncA"'},{value:'"feFuncB"'},{value:'"feFuncG"'},{value:'"feFuncR"'},{value:'"feGaussianBlur"'},{value:'"feImage"'},{value:'"feMerge"'},{value:'"feMergeNode"'},{value:'"feMorphology"'},{value:'"feOffset"'},{value:'"fePointLight"'},{value:'"feSpecularLighting"'},{value:'"feSpotLight"'},{value:'"feTile"'},{value:'"feTurbulence"'},{value:'"filter"'},{value:'"foreignObject"'},{value:'"g"'},{value:'"image"'},{value:'"line"'},{value:'"linearGradient"'},{value:'"marker"'},{value:'"mask"'},{value:'"metadata"'},{value:'"mpath"'},{value:'"path"'},{value:'"pattern"'},{value:'"polygon"'},{value:'"polyline"'},{value:'"radialGradient"'},{value:'"rect"'},{value:'"stop"'},{value:'"switch"'},{value:'"text"'},{value:'"textPath"'},{value:'"tspan"'},{value:'"use"'},{value:'"view"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/snackbar/index.tsx#snackbar"]={docgenInfo:snackbar.__docgenInfo,name:"snackbar",path:"packages/components/src/snackbar/index.tsx#snackbar"})}catch(__react_docgen_typescript_loader_error){}},"./packages/compose/build-module/hooks/use-reduced-motion/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _use_media_query__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/compose/build-module/hooks/use-media-query/index.js");const __WEBPACK_DEFAULT_EXPORT__=()=>(0,_use_media_query__WEBPACK_IMPORTED_MODULE_0__.Z)("(prefers-reduced-motion: reduce)")},"./packages/components/src/snackbar/stories/list.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>list_story});var react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),use_reduced_motion=__webpack_require__("./packages/compose/build-module/hooks/use-reduced-motion/index.js"),snackbar=__webpack_require__("./packages/components/src/snackbar/index.tsx"),AnimatePresence=__webpack_require__("./packages/components/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs"),motion=__webpack_require__("./packages/components/node_modules/framer-motion/dist/es/render/dom/motion.mjs"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const SNACKBAR_VARIANTS={init:{height:0,opacity:0},open:{height:"auto",opacity:1,transition:{height:{type:"tween",duration:.3,ease:[0,0,.2,1]},opacity:{type:"tween",duration:.25,delay:.05,ease:[0,0,.2,1]}}},exit:{opacity:0,transition:{type:"tween",duration:.1,ease:[0,0,.2,1]}}};function SnackbarList({notices,className,children,onRemove}){const listRef=(0,react.useRef)(null),isReducedMotion=(0,use_reduced_motion.Z)();className=classnames_default()("components-snackbar-list",className);const removeNotice=notice=>()=>onRemove?.(notice.id);return(0,jsx_runtime.jsxs)("div",{className,tabIndex:-1,ref:listRef,children:[children,(0,jsx_runtime.jsx)(AnimatePresence.M,{children:notices.map((notice=>{const{content,...restNotice}=notice;return(0,jsx_runtime.jsx)(motion.E.div,{layout:!isReducedMotion,initial:"init",animate:"open",exit:"exit",variants:isReducedMotion?void 0:SNACKBAR_VARIANTS,children:(0,jsx_runtime.jsx)("div",{className:"components-snackbar-list__notice-container",children:(0,jsx_runtime.jsx)(snackbar.Z,{...restNotice,onRemove:removeNotice(notice),listRef,children:notice.content})})},notice.id)}))})]})}SnackbarList.displayName="SnackbarList";const list=SnackbarList;try{SnackbarList.displayName="SnackbarList",SnackbarList.__docgenInfo={description:"Renders a list of notices.\n\n```jsx\nconst MySnackbarListNotice = () => (\n  <SnackbarList\n    notices={ notices }\n    onRemove={ removeNotice }\n  />\n);\n```",displayName:"SnackbarList",props:{notices:{defaultValue:null,description:"",name:"notices",required:!0,type:{name:'(Omit<SnackbarProps, "children"> & { id: string; content: string; })[]'}},onRemove:{defaultValue:null,description:"",name:"onRemove",required:!0,type:{name:"(id: string) => void"}},as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:"enum",value:[{value:'"symbol"'},{value:'"object"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"article"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"big"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"button"'},{value:'"canvas"'},{value:'"caption"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"dialog"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"figure"'},{value:'"footer"'},{value:'"form"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"img"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"keygen"'},{value:'"label"'},{value:'"legend"'},{value:'"li"'},{value:'"link"'},{value:'"main"'},{value:'"map"'},{value:'"mark"'},{value:'"menu"'},{value:'"menuitem"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noindex"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"option"'},{value:'"output"'},{value:'"p"'},{value:'"param"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"slot"'},{value:'"script"'},{value:'"section"'},{value:'"select"'},{value:'"small"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"style"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"table"'},{value:'"template"'},{value:'"tbody"'},{value:'"td"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"time"'},{value:'"title"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'},{value:'"webview"'},{value:'"svg"'},{value:'"animate"'},{value:'"animateMotion"'},{value:'"animateTransform"'},{value:'"circle"'},{value:'"clipPath"'},{value:'"defs"'},{value:'"desc"'},{value:'"ellipse"'},{value:'"feBlend"'},{value:'"feColorMatrix"'},{value:'"feComponentTransfer"'},{value:'"feComposite"'},{value:'"feConvolveMatrix"'},{value:'"feDiffuseLighting"'},{value:'"feDisplacementMap"'},{value:'"feDistantLight"'},{value:'"feDropShadow"'},{value:'"feFlood"'},{value:'"feFuncA"'},{value:'"feFuncB"'},{value:'"feFuncG"'},{value:'"feFuncR"'},{value:'"feGaussianBlur"'},{value:'"feImage"'},{value:'"feMerge"'},{value:'"feMergeNode"'},{value:'"feMorphology"'},{value:'"feOffset"'},{value:'"fePointLight"'},{value:'"feSpecularLighting"'},{value:'"feSpotLight"'},{value:'"feTile"'},{value:'"feTurbulence"'},{value:'"filter"'},{value:'"foreignObject"'},{value:'"g"'},{value:'"image"'},{value:'"line"'},{value:'"linearGradient"'},{value:'"marker"'},{value:'"mask"'},{value:'"metadata"'},{value:'"mpath"'},{value:'"path"'},{value:'"pattern"'},{value:'"polygon"'},{value:'"polyline"'},{value:'"radialGradient"'},{value:'"rect"'},{value:'"stop"'},{value:'"switch"'},{value:'"text"'},{value:'"textPath"'},{value:'"tspan"'},{value:'"use"'},{value:'"view"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/snackbar/list.tsx#SnackbarList"]={docgenInfo:SnackbarList.__docgenInfo,name:"SnackbarList",path:"packages/components/src/snackbar/list.tsx#SnackbarList"})}catch(__react_docgen_typescript_loader_error){}const list_story={title:"Components/SnackbarList",component:list,argTypes:{as:{control:{type:null}},onRemove:{action:"onRemove",control:{type:null}}},parameters:{sourceLink:"packages/components/src/snackbar",controls:{expanded:!0},docs:{canvas:{sourceState:"shown"}}}},Default=({children,notices:noticesProp,...props})=>{const[notices,setNotices]=(0,react.useState)(noticesProp);return(0,jsx_runtime.jsx)(list,{...props,notices,onRemove:id=>{const matchIndex=notices.findIndex((n=>n.id===id));matchIndex>-1&&setNotices([...notices.slice(0,matchIndex),...notices.slice(matchIndex+1)])},children})};Default.displayName="Default",Default.args={children:"Use SnackbarList to communicate multiple low priority, non-interruptive messages to the user.",notices:[{id:"SAVE_POST_NOTICE_ID_1",spokenMessage:"Post published.",actions:[{label:"View Post",url:"https://example.com/?p=522"}],content:"Post published.",isDismissible:!0,explicitDismiss:!1},{id:"SAVE_POST_NOTICE_ID_2",spokenMessage:"Post updated",actions:[{label:"View Post",url:"https://example.com/?p=522"}],content:"Post updated.",isDismissible:!0,explicitDismiss:!1},{id:"global1",spokenMessage:"All content copied.",actions:[],content:"All content copied.",isDismissible:!0,explicitDismiss:!1}]},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"({\n  children,\n  notices: noticesProp,\n  ...props\n}) => {\n  const [notices, setNotices] = useState(noticesProp);\n  const onRemove = (id: string) => {\n    const matchIndex = notices.findIndex(n => n.id === id);\n    if (matchIndex > -1) {\n      setNotices([...notices.slice(0, matchIndex), ...notices.slice(matchIndex + 1)]);\n    }\n  };\n  return <SnackbarList {...props} notices={notices} onRemove={onRemove}>\n            {children}\n        </SnackbarList>;\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]}}]);