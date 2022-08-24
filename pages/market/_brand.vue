<template lang="pug">
.market
	img.market__img(
		src="~/assets/img/car-market/car.png"
	)
	.market__car-characteristics
		CarCharacteristicsBlock(
            :data="data"
		)

	.market__button
		Button(
			buttonIcon="testdrive"
			buttonText="Test Drive"
			theme="gray"
		)

	Carousel.market__carousel
	
</template>

<script>
import CarCharacteristicsBlock from '~/components/CarCharacteristicsBlock';
import Carousel from '~/components/carousels/Carousel';
import Button from '~/components/button/MainButton';

export default {
	name: 'Market-brand',

	mounted() {
		this.model = this.$route.params.brand;
	},

	components: {
		CarCharacteristicsBlock,
		Carousel,
		Button,
	},

	methods: {
		log(e) {
			console.log(e.target);
		},
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

	&__button {
		position: absolute;
		bottom: d(300);
		left: d(38);
		width: d(162);
		z-index: 10;
	}

	&__img {
		max-width: d(1440);
		width: 100%;
	}
}
</style>
