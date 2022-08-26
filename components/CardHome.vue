<template lang="pug">
nuxt-link.card-home(
	:to="'/' + card.link"
	:class="'card-home_background-' + card.param.background"
)
	.card-home__block(
		:class="'card-home__block_background-' + card.param.background"
	)

		.card-home__icon
			img(
				v-if="card.icon"
				:src="require(`~/assets/svg/home/${card.icon}.svg`)"
				:alt="card.icon"
			)
		.card-home__info
			h2.card-home__title(
				:class="['card-home__title_color-' + card.param.textColor, card.param.textTransfer && 'card-home__title_text-transfer']"
			) {{ card.name }}

			.card-home__number(
				v-if="card.numderOfCars"
			) {{ card.numderOfCars > 9 ? card.numderOfCars : '0' + card.numderOfCars }}

			.card-home__arrow(
				v-if="card.arrow"
			)
				img(
					:src="require(`~/assets/svg/home/${card.arrow}.svg`)"
					:alt="card.arrow"
				)
		.card-home__img(
			:class="['card-home__img_position-' + card.param.imgPosition, card.name === 'Finance' && 'card-home__img_finance']"
		)
				img(
					:src="require(`~/assets/img/home/${card.image}.png`)"
					:alt="card.image"
				)
</template>

<script>
export default {
	props: ['card'],

	name: 'CardHome',

	data() {
		return {};
	},
	methods: {},
};
</script>

<style lang="scss" scoped>
.card-home {
	height: 100%;
	position: relative;

	&__icon {
		width: d(38);
		height: d(38);

		padding: d(10) 0 0 d(10);

		img {
			width: 100%;
			height: 100%;
		}
	}

	&__img {
		position: absolute;
		top: 0;
		height: 100%;
		width: 100%;

		&_position {
			&-center {
				display: flex;
				justify-content: center;
				align-items: center;
			}

			&-right-bottom {
				display: flex;
				justify-content: flex-end;
				align-items: flex-end;
			}
		}

		&_finance {
			width: 96px;
			height: 96px;
			background-color: #fff;
			border-radius: 50%;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			background-color: #5AD0A6;
		}
	}

	&__arrow {
		width: 9;
		height: 18;

		display: flex;
		align-items: center;

		img {
			width: 100%;
			height: 100%;
		}
	}

	&__block {
		height: 100%;
		width: 100%;
		border-radius: d(6);

		display: flex;
		flex-direction: column;
		justify-content: space-between;

		&_background {
			&-black {
				background-color: $black;
			}

			&-yellow {
				background-color: $yellow;
			}

			&-turquoise {
				background-color: $turquoise;
			}

			&-white {
				background-color: $white;
			}
		}
	}

	&__info {
		display: flex;
		justify-content: space-between;
		align-items: center;

		padding: 0 d(14) d(16) d(24);
	}

	&__title {
		font-family: 'Zen Dots';
		font-size: d(19);
		line-height: d(28);
		font-weight: 400;

		&_color {
			&-yellow {
				color: $yellow;
			}

			&-gray {
				color: $gray;
			}

			&-black {
				color: $black;
			}
		}

		&_text-transfer {
			width: d(100);
		}
	}

	&__number {
		font-family: 'Zen Dots';
		font-size: d(14);
		line-height: d(28);
		font-weight: 400;
		color: $black;
		text-align: center;

		background-color: $yellow;
		border-radius: d(15);
		width: d(59);
	}
}
</style>
