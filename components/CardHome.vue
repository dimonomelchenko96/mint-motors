<template lang="pug">
.card-home(
	:class="changeBackground()"
)
	.card-home__icon(
		v-if="icon"
	)
		img(
			:src="require(`../assets/svg/home/${icon}.svg`)"
		)

	.card-home__img
		img(
			:src="require(`../assets/img/home/${image}.png`)"
		)

	.card-home__block
		h2.card-home__title {{ name }}

		.card-home__number(
			v-if="numderOfCars !== null"
		) {{ numderOfCars }}

		.card-home__icon(
			v-if="arrow"
		)
			img(
				:src="require(`../assets/svg/home/${arrow}.svg`)"
			)
</template>

<script>
export default {
	props:[
		"id",
		"name",
		"numderOfCars",
		"icon",
		"image",
		"arrow"
	],

	name: 'CardHome',

	data() {
		return {
			id: this.id,
			background: '',
			colorTitle: '',
		};
	},

	methods: {
		changeBackground() {
			if (this.id === 1) {
				return 'card-home_black';
			}

			if (this.id === 2) {
				return 'card-home_yellow';
			}

			if (this.id === 3) {
				return 'card-home_green';
			}

			if (this.id === 4) {
				return 'card-home_white';
			}
		}
	},
};
</script>

<style lang="scss" scoped>
.card-home {
	&_black {
		background-color: #151515;
	}

	&_yellow {
		background-color: #FCED6D;
	}

	&_green {
		border-color: #6DFCC9;
	}

	&_white {
		background-color: #FFFFFF;
	}

	background-color: #4f4f4f;
	&__icon {
		width: d(28);
		height: d(28);

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
		color: #000;

		&_yellow {
			color: #FCED6D;
		}

		&_gray {
			color: #293041;
		}
	}

	&__number {

	}
}
</style>
