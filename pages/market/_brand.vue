<template lang="pug">
.market
	.market__car-characteristics
		CarCharacteristicsBlock(
            :data="data"
		)

</template>

<script>
import CarCharacteristicsBlock from '~/components/CarCharacteristicsBlock';

export default {
	name: 'Market-brand',
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
	mounted() {
		this.model = this.$route.params.brand;
	},
	components: {
		CarCharacteristicsBlock,
	},
};
</script>

<style lang="scss" scoped>
.market {
	height: 100vh;
	position: relative;
	&__car-characteristics {
		position: absolute;
		top: d(78);
		left: d(38);
	}
}
</style>
