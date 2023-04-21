// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: 'Ani wellington',
		category: 'Website',
		img: require('@/assets/images/ani.png'),
		link:'https://aniwellington.com'

	},
	
	{
		id: 2,
		title: 'Aqa Properties',
		category: 'Website',
		img: require('@/assets/images/aqa.png'),
		link:'https://aqaproperties.ae/'
	},
	{
		id: 3,
		title: 'Vicion',
		category: 'Website',
		img: require('@/assets/images/vicion.png'),
		link:'https://vicionconsulting.com/'
	},
	{
		id: 10,
		title: 'goButter',
		category: 'Web Application',
		img: require('@/assets/images/goButter.png'),
		link:'https://gobutter.xyz/'
	},
	{
		id: 7,
		title: 'Daristele',
		category: 'Website',
		img: require('@/assets/images/daristele.png'),
		link:'https://daristele.com/'
	},
	{
		id: 9,
		title: 'Centrum Finance',
		category: 'Website',
		img: require('@/assets/images/centrum.png'),
		link:'https://centrumfinanceltd.com/'
	},
	{
		id: 5,
		title: 'Msl Global',
		category: 'Website',
		img: require('@/assets/images/msl.png'),
		link:'https://mslglobal.org/'
	},
	
	{
		id: 4,
		title: 'Yztot',
		category: 'Web Application',
		img: require('@/assets/images/yzt.png'),
		link:'https://yztot.com'
	},
	

	{
		id: 8,
		title: 'AutoLight control',
		category: 'Embedded system',
		img: require('@/assets/images/Arduino.png'),
		link:'/assets/images/Arduino.png'
	},
	
];

export default projects;
