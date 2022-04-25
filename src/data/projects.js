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
		title: 'Nel',
		category: 'Web Application',
		img: require('@/assets/images/mobile-project-2.jpg'),
		link:'http://Nel2.herokuapp.com'
	},
	{
		id: 3,
		title: 'SlcExperience',
		category: 'Web Application',
		img: require('@/assets/images/slc.png'),
		link:'https://slcexperience.herokuapp.com/'
	},
	{
		id: 4,
		title: 'Yztot',
		category: 'Web Application',
		img: require('@/assets/images/yzt.png'),
		link:'https://yztot.com'
	},
	{
		
		id: 5,
		title: 'i2talk chat app',
		category: 'Web Application',
		img: require('@/assets/images/i2talk.png'),
		link:'https://maverickdigital.netlify.app/'
	},
	
	{
		id: 6,
		title: 'AutoLight control',
		category: 'Embedded system',
		img: require('@/assets/images/Arduino.png'),
		link:'/assets/images/Arduino.png'
	},
	
];

export default projects;
