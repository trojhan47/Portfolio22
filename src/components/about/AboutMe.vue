<script>
export default {
	setup() {
		return {
			bios: [
				{
					id: 1,
					bio:
						'I am a results driven and motivated software developer/ IT administrator, Solution focused, with strong knowledge and understanding of system administrations, Data Structures, Algorithm, networking, hardware and software skills, including installation, configuration, maintenance, management, troubleshooting, and support service with good experience in improving software performance, updating existing software and developing new software functionalities.',
				},
				{
					id: 2,
					bio:
						'  I am resourceful and hardworking with determination and willingness to adapt to new situations. Easily identify and resolve technical issues. Proven ability to identify deficiencies and potential opportunities, and develop innovative solutions for increasing reliability and improving productivity. Strong interpersonal skills built through ' + 
						'effective communication and presentation capabilities. ' +
						' I am skillful in : '
						
				},
				{
					id: 3,
					bio:
						'Html & CSS '
						
				},
				{
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
						
				},
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
