<template lang="pug">
nuxt-link.card-home(
	:to="'/' + link"
)
	.card-home__block(
		:class="'card-home__block_background-' + param.background"
	)

		.card-home__icon
			img(
				v-if="icon"
				:src="require(`../assets/svg/home/${icon}.svg`)"
			)
		.card-home__info
			h2.card-home__title(
				:class="['card-home__title_color-' + param.textColor, param.textTransfer && 'card-home__title_text-transfer']"
			) {{ name }}

			.card-home__number(
				v-if="numderOfCars"
			) {{ numderOfCars }}

			.card-home__arrow(
				v-if="arrow"
			)
				img(
					:src="require(`../assets/svg/home/${arrow}.svg`)"
				)
		.card-home__img(
			:class="'card-home__img_position-' + param.imgPosition"
		)
				img(
					:src="require(`../assets/img/home/${image}.png`)"
				)
</template>

<script>
export default {
	props: [
		'id',
		'name',
		'numderOfCars',
		'icon',
		'image',
		'arrow',
		'param',
		'link',
	],

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

	border-radius: d(6);

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
