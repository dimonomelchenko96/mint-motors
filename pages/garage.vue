<template lang="pug">
.garage
	p Garage
	.garage__card
		CarCardMarket(
			:active="true"
		)
		CarCardMarket(
			:active="false"
		)

</template>

<script>
import CarCardMarket from '~/components/carCards/CarCardMarket';

export default {
	name: 'Garage',

	components: {
		CarCardMarket
	},

	data() {
	}
};
</script>

<style lang="scss" scoped>
.garage {
	p {
		text-align: center;
		padding: 200px;
		font-size: 70px;
		color: #fff;
	}

	&__card {
		display: flex;
		position: absolute;
		top: 50%;
		left: 50%;
	}

}
</style>
