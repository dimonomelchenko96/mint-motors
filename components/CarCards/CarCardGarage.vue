<template lang="pug">
.car-card-garage
	CarCard(
		:status="status"
		:button="status === 'broken' ? buttonBroken : buttonRace"
		:header="status === 'crashed' && isCrashed || status === 'broken' && isBroken || status === 'passive-broken' && isBroken"
	)
</template>

<script>
import CarCard from '~/components/carCards/CarCard';

export default {
	props: ['status'],

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

<style lang="scss" scoped>
.car-card-garage {
	width: 100%;
}
</style>
