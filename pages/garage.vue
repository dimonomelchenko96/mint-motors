<template lang="pug">
.garage
	img.garage__img(
		src="~/assets/img/car-market/car.png"
	)
	.garage__car-characteristics
		CarCharacteristicsBlock(
            :data="data"
		)
	.garage__card
		CarCardGarage(
			:active="true"
		)
		CarCardGarage(
			:active="false"
		)

		CarCardGarage(
			:active="false"
			:empty="true"
		)

		CarCardGarage(
			:active="true"
			:crashed="true"
		)

		CarCardGarage(
			:active="true"
			:broken="true"
		)

		CarCardGarage(
			:active="false"
			:broken="true"
		)
</template>

<script>
import CarCardGarage from '~/components/carCards/CarCardGarage';
import CarCharacteristicsBlock from '~/components/CarCharacteristicsBlock';

export default {
	name: 'Garage',

	components: {
		CarCardGarage,
		CarCharacteristicsBlock,
	},

	mounted() {
		this.model = this.$route.params.brand;
	},

	data() {
		return {
			model: '',
			data: {
				startProd: 1973,
				endProd: 2002,
				brand: 'BMW',
				state: 'crashed',
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
.garage {
	height: 100vh;
	position: relative;

	&__card {
		display: flex;
		position: absolute;
		top: 50%;
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
