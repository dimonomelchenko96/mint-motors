<template lang="pug">
CarCard.car-card-slider(
	:status="status"
	:button="status === 'active' ? buttonMarket : status === 'broken' ? buttonBroken : buttonRace"
	:header="status === 'active' && market || status === 'passive-market' && market || status === 'crashed' && isCrashed || status === 'broken' && isBroken || status === 'passive-broken' && isBroken"
)
</template>

<script>
import CarCard from '~/components/carCards/CarCard';

export default {
	props: ['status'],

	data() {
		return {
			market: {
				icon: 'buy',
				text: '20 000 MTR',
			},

			isCrashed: {
				text: 'Car crashed',
				icon: 'crashed',
			},

			isBroken: {
				text: 'Car broken',
				icon: 'broken',
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
			},

			buttonMarket: {
				buttonText: 'Buy NFT',
				buttonTheme: 'blue',
			},
		};
	},
	methods: {},

	components: {
		CarCard,
	},
};
</script>

<style lang="scss" scoped>
.car-card-slider {
	width: 100%;
}
</style>
