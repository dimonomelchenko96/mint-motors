<template lang="pug">
.car-card-garage
	CarCard(
		:active="active"
		:button="buttonRace"
		:empty="empty"
	)
</template>

<script>
import CarCard from '~/components/carCards/CarCard';

export default {
	props: ['active', 'empty'],

	data() {
		return {
			// active: true,

			crashed: {
				name: 'Car crashed',
				icon: 'crashed',
			},

			broken: {
				name: 'Car broken',
				icon: 'broken'
			},

			buttonRace: {
				buttonText: 'Start Race',
				buttonTheme: 'white',
				buttonIcon: 'race',
			},

			// buttonCrashed: {
			// 	buttonText: 'Start Race',
			// 	buttonTheme: 'white',
			// 	buttonIcon: 'race',
			// },

			buttonCrashed: {
				buttonText: 'Utilize',
				buttonTheme: 'black',
				buttonIcon: 'crashed',
			}
		};
	},
	methods: {},

	components: {
		CarCard
	},
};
</script>

<style lang="scss" scoped></style>
