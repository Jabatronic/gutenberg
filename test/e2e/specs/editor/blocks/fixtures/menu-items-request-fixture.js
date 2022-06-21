module.exports = [
	{
		title: 'Home',
		url: 'http://localhost:8889/',
		menu_order: 1,
	},
	{
		title: 'About',
		type: 'post_type',
		object: 'page',
		menu_order: 2,
	},
	{
		title: 'Our team',
		type: 'post_type',
		object: 'page',
		menu_order: 3,
		parent: 1,
	},
	{
		title: 'Shop',
		type: 'post_type',
		object: 'page',
		menu_order: 4,
	},
	{
		title: 'Winter apparel',
		type: 'post_type',
		object: 'page',
		menu_order: 5,
		parent: 3,
	},
	{
		title: 'Chunky socks',
		type: 'post_type',
		object: 'page',
		menu_order: 6,
		parent: 4,
	},
	{
		title: 'Hideous hats',
		type: 'post_type',
		object: 'page',
		menu_order: 7,
		parent: 4,
	},
	{
		title: 'Glorious gloves',
		type: 'post_type',
		object: 'page',
		menu_order: 8,
		parent: 4,
	},
	{
		title: 'Jazzy Jumpers',
		type: 'post_type',
		object: 'page',
		menu_order: 9,
		parent: 4,
	},
	{
		title: 'Shipping',
		type: 'post_type',
		object: 'page',
		menu_order: 10,
	},
	{
		title: 'Contact Us',
		type: 'post_type',
		object: 'page',
		menu_order: 11,
	},
	{
		title: 'WordPress.org',
		url: 'https://wordpress.org',
		menu_order: 12,
	},
	{
		title: 'Google',
		url: 'https://google.com',
		menu_order: 13,
		parent: 11,
	},
];
