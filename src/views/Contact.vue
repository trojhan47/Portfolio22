<script>
import feather from 'feather-icons';
import ContactForm from '@/components/contact/ContactForm.vue';
import ContactDetails from '@/components/contact/ContactDetails.vue';
// import Email from '@/components/contact/Email.vue';

export default {
	components: {
		ContactForm,
		ContactDetails,
		// Email.vue,
	},
	data: () => {
		return {
			contacts: [
				{
					id: 1,
					name: 'Lugbe, Abuja',
					icon: 'map-pin',
				},
				{
					id: 2,
					name: 'atiladeoyetunji@gmail.com',
					icon: 'mail',
				},
				{
					id: 3,
					name: '+234 8168004875',
					icon: 'phone',
				},
			],
		};
	},
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
	methods: {},
};
</script>

<template>
	<div
		class="container mx-auto flex flex-col-reverse md:flex-row py-5 md:py-10 md:mt-10"
	>
		<!-- Contact form -->
		<ContactForm />

		<!-- Contact details -->
		<ContactDetails :contacts="contacts" />

		
	</div>

	<!-- <Email /> -->
</template>
