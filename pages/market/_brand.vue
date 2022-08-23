<template lang="pug">
.market
	img.market__img(
		src="~/assets/img/car-market/car.png"
	)
	.market__car-characteristics
		CarCharacteristicsBlock(
            :data="data"
		)

	.market__carousel
		Carousel
	
</template>

<script>
import CarCharacteristicsBlock from '~/components/CarCharacteristicsBlock';
import Carousel from '~/components/carousels/Carousel';

export default {
	name: 'Market-brand',

	mounted() {
		this.model = this.$route.params.brand;
	},

	components: {
		CarCharacteristicsBlock,
		Carousel,
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

	&__carousel {
		position: absolute;
		bottom: d(40);
		width: 100%;
	}

	&__img {
		max-width: d(1440);
		width: 100%;
	}
}
</style>
