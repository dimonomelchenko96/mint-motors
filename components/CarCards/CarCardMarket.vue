<template lang="pug">
.car-card-market
    CarCard(
        :header="header"
    )
</template>

<script>
import CarCard from '~/components/CarCards/CarCard';

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
	width: 100%;
}
</style>
