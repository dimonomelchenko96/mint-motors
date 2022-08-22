<template lang="pug">
.car-card-market
    CarCard(
        :header="header"
        :button="button"
    )
</template>

<script>
import CarCard from './CarCard';

export default {
	data() {
		return {
			header: {
				icon: 'buy',
				text: '20 000 MTR',
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
	display: flex;
}
</style>
