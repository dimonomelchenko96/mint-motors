<template lang="pug">
.car-card
	.car-card__block
		.car-card__header(
			v-if="header"
		)
			.car-card__icon(
				v-html="require(`../../assets/svg/car-card/${header.icon}.svg?raw`)"
			)

			.car-card__text {{ header.text }}

	.car-card__img
		img(
			:src="require('../../assets/img/car-card/car_card.png')"
		)
	MainButton(
		:buttonText="button.buttonText"
		:theme="button.buttonTheme"
	)

</template>

<script>
import MainButton from '~/components/button/MainButton';

export default {
	props: ['header'],

	data() {
		return {
			button: {
				buttonText: 'Buy NFT',
				buttonTheme: 'blue',
			},
		};
	},

	methods: {},

	components: {
		MainButton,
	},
};
</script>

<style lang="scss" scoped>
.car-card {
	background-color: rgba(255, 255, 255, 0.12);
	padding: d(10);

	border-radius: d(10);

	&__header {
		margin-bottom: d(10);
		padding: 0 d(10);

		display: flex;
		justify-content: space-between;
	}

	&__icon {
		width: d(18);
		height: d(18);

		::v-deep {
			svg {
				height: 100%;
				width: 100%;
			}
		}
	}

	&__text {
		font-family: 'Zen Dots';
		font-weight: 400;
		font-size: d(12);
		line-height: d(18);

		color: $white;
	}

	&__img {
		margin-bottom: d(10);

		img {
			width: 100%;
			height: 100%;
		}
	}
}
</style>
