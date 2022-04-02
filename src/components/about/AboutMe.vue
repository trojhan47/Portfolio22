<script>
export default {
	setup() {
		return {
			bios: [
				{
					id: 1,
					bio:
						'I am a motivated Software Developer with a background in creating and implementing Software solutions to enhance Business productivity. I am seeking to use my proven skills in Data Structures, Effective communication and Project Management to meet business needs and provide quality services.',
				},
				{
					id: 2,
					bio:
						'I am a graduate of Petroleum Engineering 👨🏽‍🎓  university of Lagos, I am an alumni Fellow at TIIDELab, a software development initiative in Abuja as a Junior Front-end Developer ☺, and a current fellow of ALX cohort 5. ',
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
				src="@/assets/images/profile.jpeg"
				class="rounded-xl w-96"
				alt=""
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
