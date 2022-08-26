<template lang="pug">
.garage
	img.garage__img(
		src="~/assets/img/car-market/car.png"
	)
	.garage__car-characteristics
		CarCharacteristicsBlock(
            :data="data[activeCard]"
		)
	Carousel(:data="data" @setActiveCard='setActiveCard').garage__carousel


</template>

<script>
import CarCardGarage from '~/components/carCards/CarCardGarage';
import CarCardMarket from '~/components/carCards/CarCardMarket';
import CarCardTrack from '~/components/carCards/CarCardTrack';
import CarCardRaceEnd from '~/components/carCards/CarCardRaceEnd';
import CarCharacteristicsBlock from '~/components/CarCharacteristicsBlock';
import Carousel from '~/components/carousels/GarageCarousel';

export default {
	name: 'Garage',

	components: {
		CarCardGarage,
		CarCharacteristicsBlock,
		CarCardMarket,
		CarCardTrack,
		CarCardRaceEnd,
		Carousel,
	},

	mounted() {
		this.model = this.$route.params.brand;
	},

	methods: {
		setActiveCard(value) {
			this.activeCard = value;
		},
	},

	data() {
		return {
			activeCard: 0,
			data: [
				{
					startProd: 1973,
					endProd: 2002,
					brand: 'BMW',

					status: 'crashed',
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
				{
					startProd: 1973,
					endProd: 2002,
					brand: 'BMW',

					status: 'normal',
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
				{
					startProd: 1973,
					endProd: 2002,
					brand: 'BMW',

					status: 'broken',
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
				{
					startProd: 1973,
					endProd: 2002,
					brand: 'BMW',

					status: 'broken',
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
				{
					startProd: 1973,
					endProd: 2002,
					brand: 'BMW',

					status: 'crashed',
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
				{
					startProd: 1973,
					endProd: 2002,
					brand: 'BMW',

					status: 'broken',
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
				{
					startProd: 1973,
					endProd: 2002,
					brand: 'BMW',

					status: 'normal',
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
			],
		};
	},
};
</script>

<style lang="scss" scoped>
.garage {
	height: 100vh;
	position: relative;

	&__carousel {
		position: absolute;
		bottom: d(40);
		width: 100%;
	}

	&__card {
		display: flex;
		flex-wrap: wrap;
		position: absolute;
		top: 20%;

		&_1 {
			width: d(200);
		}
	}

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

	&__img {
		max-width: d(1440);
		width: 100%;
	}
}
</style>
