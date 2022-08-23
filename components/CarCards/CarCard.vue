<template lang="pug">
.car-card(
	:class="!active && 'car-card_not-active'"
)
	.car-card__block(
		:class="[!active && 'car-card__block_not-active', (broken && !active) && 'car-card__block_broken']"
	)
		.car-card__header
			.car-card__icon(
				v-if="header"
				v-html="require(`~/assets/svg/car-card/${header.icon}.svg?raw`)"
			)

			.car-card__text(
				:class="!header && 'car-card__text_hidden'"
			) {{ header ? header.text : 'None' }}

	.car-card__img(
		:class="broken && 'car-card__img_broken'"
	)
		img(
			:src="require(`~/assets/img/car-card/${empty ? 'empty_card' : 'car_card'}.png`)"
		)
	MainButton(
		v-if="active"
		:buttonIcon="button.buttonIcon"
		:buttonText="button.buttonText"
		:theme="button.buttonTheme"
	)

</template>

<script>
import MainButton from '~/components/button/MainButton';

export default {
	props: ['header', 'active', 'button', 'empty', 'broken'],

	data() {
		return {};
	},

	methods: {},

	components: {
		MainButton,
	},
};
</script>

<style lang="scss" scoped>
.car-card {
	background-color: #363431;
	padding: d(10);

	border-radius: d(10);

	&_not-active {
		background-color: transparent;
		& .car-card__img {
			position: relative;
			&::after {
				content: '';
				position: absolute;
				width: 100%;
				height: 100%;
				background: rgba(0, 0, 0, 0.7);
				left: 0;
				top: 0;
				transition: opacity 0.6s;
				border-radius: d(6);
			}
		}
	}

	&__block {
		&_not-active {
			opacity: 0;
		}

		&_broken {
			opacity: 0.4;
		}
	}

	&__header {
		margin-bottom: d(10);
		padding: 0 d(10);

		display: flex;
		justify-content: space-around;
	}

	&__icon {
		width: d(18);
		height: d(18);
		display: flex;

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

		&_hidden {
			opacity: 0;
		}
	}

	&__img {
		margin-bottom: d(10);

		&_broken {
			filter: grayscale(1);

			&::after {
				content: '';
				position: absolute;
				width: 100%;
				height: 100%;
				background: rgba(0, 0, 0, 0.7);
				left: 0;
				top: 0;
				transition: opacity 0.6s;
				border-radius: d(6);
			}
		}



		img {
			width: 100%;
			height: 100%;
		}
	}
}
</style>
