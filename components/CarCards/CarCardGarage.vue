<template lang="pug">
.car-card-garage
	CarCard(
		:active="active"
		:button="broken ? buttonBroken : buttonRace"
		:empty="empty"
		:header="crashed && isCrashed || broken && isBroken"
		:broken="broken"
	)
</template>

<script>
import CarCard from '~/components/carCards/CarCard';

export default {
	props: ['active', 'empty', 'crashed', 'broken'],

	data() {
		return {
			// active: true,

			isCrashed: {
				text: 'Car crashed',
				icon: 'crashed',
			},

			isBroken: {
				text: 'Car broken',
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

			buttonBroken: {
				buttonText: 'Utilize',
				buttonTheme: 'black',
				buttonIcon: 'broken',
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
