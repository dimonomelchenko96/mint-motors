<template lang="pug">
.market
	.market__car-characteristics
		CarCharacteristicsBlock(
            :data="data"
		)
	.market__car-card
		CarCardMarket
</template>

<script>
import CarCharacteristicsBlock from '~/components/CarCharacteristicsBlock';
import CarCardMarket from '../../components/CarCards/CarCardMarket';

export default {
    name: 'Market-brand',

    mounted() {
        this.model = this.$route.params.brand;
    },

    components: {
        CarCharacteristicsBlock,
		CarCardMarket,
    },

	data() {
		return {
			model: '',
			data: {
				startProd: 1973,
				endProd: 2002,
				brand: 'BMW',
				state: 'new',
				params: [
					{
						characteristic: 'Power',
						value: '320 hp',
						percent: '-10%',
					},
					{
						characteristic: 'Max speed:',
						value: '210 km/h',
						percent: '-20%',
					},
					{
						characteristic: 'Up to 100km/h:',
						value: '6.2 sec',
						percent: '-10%',
					},
				],
			},
		};
	},
};
</script>

<style lang="scss" scoped>
.market {
	height: 100vh;
	position: relative;

    &__car-card {
        position: absolute;
        top: 50%;
        left: 50%;
    }

	&__car-characteristics {
		position: absolute;
		top: d(78);
		left: d(38);
	}
}
</style>
