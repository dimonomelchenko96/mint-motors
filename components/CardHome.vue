<template lang="pug">
.card-home
	.card-home__icon(
		v-if="icon"
	)
		img(
			:src="require(`../assets/svg/home/${icon}.svg`)"
		)
		span {{ img1 }}

	//- .card-home__img
	//- 	img(
	//- 		:src="'../../assets/svg/garage_icon.svg'"
	//- 	)

	.card-home__block
		h2.card-home__title {{ name }}

		.card-home__number(
			v-if="numderOfCars !== null"
		) {{ numderOfCars }}

		//- .card-home__icon(
		//- 	v-if="arrow"
		//- )
			//- include ../../assets/svg/garage_icon.svg
</template>

<script>
export default {
	props:[
		"id",
		"name",
		"numderOfCars",
		"icon",
		"img1",
		"arrow"
	],

	name: 'CardHome',

	data() {
		return {
		};
	},
	methods: {

	},
};
</script>

<style lang="scss" scoped>
.card-home {
	background-color: #4f4f4f;
	&__icon {
		width: 40px;
		height: 40px;

		img {
			width: 100%;
			height: 100%;
		}
	}

	&__img {

	}

	&__block {

	}

	&__title {

	}

	&__number {

	}
}
</style>
