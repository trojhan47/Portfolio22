<script>
export default {
	setup() {
		return {
			bios: [
				{
					id: 1,
					bio:
						'I am a highly motivated and results-driven Tech savvy with a strong technical background.I thrive in dynamic environments and excel both as a Backend Engineer, Frontend support and in ICT roles due to my strong technical background. My expertise spans web development, IT Support, Backend Development, testing, and documentation of APIs and web applications. I am proficient in JavaScript, NodeJS, ExpressJS, Typescript, Laravel, MongoDB, and other relevant technologies. With a solid understanding of data structures and algorithms, I am adept at optimizing software performance and crafting scalable and maintainable solutions. I am well-versed in Object-Oriented Programming (OOP) and possess exceptional organizational, communication, and analytical skills. Moreover, I am comfortable working with Agile Methodologies, ensuring efficient project execution.',
				},
				{
					id: 2,
					bio:
						'  I am resourceful and hardworking with determination and willingness to adapt to new situations. Easily identify and resolve technical issues. Proven ability to identify deficiencies and potential opportunities, and develop innovative solutions for increasing reliability and improving productivity. Strong interpersonal skills built through ' + 
						'effective communication and presentation capabilities. ' +
						' My skills include: '
						
				},
				{
					id: 3,
					bio:
						`Programming Languages: JavaScript, PHP, Node.js, TypeScript 
							Web Frameworks: Express.js, WordPress, Laravel
							Databases: MongoDB, MySQL
							Cloud Services: Amazon EC2, Amazon S3, Redis
							Version Control: Git, GitHUb, GitHub Actions(CI/CD)
							`
						
				},
				/* {
					id: 4,
					bio:
						'Materialize'
						
				},
				{
					id: 5,
					bio:
						'Javascript'
						
				},
				{
					id: 6,
					bio:
						'NodeJs'
						
				},
				{
					id: 7,
					bio:
						'ExpressJs'
						
				},
				{
					id: 8,
					bio:
						'Wordpress'
						
				},
				{
					id: 9,
					bio:
						'MongoDB'
						
				},
				{
					id: 10,
					bio:
						'Server Configuration'
						
				}, */
			],
		};
	},
};
</script>

<template>
	<div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
		<!-- About profile image -->
		<div class="w-full sm:w-1/4 mb-7 sm:mb-0">
			<img
				src="@/assets/images/profile/profile.jpeg"
				class="rounded-xl  w-96"
				alt="Oyetunji Atilade"
			/>
		</div>

		<!-- About details -->
		<div class="w-full sm:w-3/4 text-left">
			<p
				v-for="bio in bios"
				:key="bio.id"
				class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
			>
				{{ bio.bio }}
			</p>
		</div>
	</div>
</template>
