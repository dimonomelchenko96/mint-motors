<template lang="pug">
CarCard.car-card-market(
	:header="header"
	:status="status"
	:button="button"
)
</template>

<script>
import CarCard from '~/components/carCards/CarCard';

export default {
	props: ['status'],

	data() {
		return {
			header: {
				icon: 'buy',
				text: '20 000 MTR',
			},
			button: {
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
.car-card-market {
	width: 100%;
}
</style>
