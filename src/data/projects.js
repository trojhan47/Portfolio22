// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: 'Maverick Digital Store',
		category: 'Web Application',
		img: require('@/assets/images/web-project-2.jpg'),
		link:'https://maverickdigital.netlify.app/'
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
		title: 'Autonics',
		category: 'Web Application',
		img: require('@/assets/images/ui-project-1.jpg'),
		link:''
	},
	
];

export default projects;
