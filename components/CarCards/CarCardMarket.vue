<template lang="pug">
.car-card-market
	CarCard(
		:header="header"
		:active="active"
		:button="button"
	)
</template>

<script>
import CarCard from '~/components/carCards/CarCard';

export default {
	props: ['active'],

	data() {
		return {
			header: {
				icon: 'buy',
				text: '20 000 MTR',
			},
			active: this.active,
			button: {
				buttonText: 'Buy NFT',
				buttonTheme: 'blue',
			}
		};
	},
	methods: {},

	components: {
		CarCard,
	},
};
</script>

<style lang="scss" scoped>
.car-card-market {
	display: flex;
	width: 100%;
}
</style>
