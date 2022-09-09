<template lang="pug">
.car-card(
	:class="`${status}`"
)
	.car-card__block(
		:class="`${status}__` + 'block'"
	)
		.car-card__header(
			:class="`${status}__` + 'header'"
		)
			.car-card__icon(
				:class="`${status}__` + 'icon'"
				v-if="header"
				v-html="require(`~/assets/svg/car-card/${header.icon}.svg?raw`)"
			)

			.car-card__text(
				:class="`${status}__` + 'text'"
			) {{ header ? header.text : 'None' }}

	.car-card__img(
		:class="`${status}__` + 'img'"
	)
		img(
			:src="require('~/assets/img/car-card/car_card.png')"
		)

		EmptyCard(
			:class="`${status}__` + 'component'"
			v-if="status === 'empty' || status === 'track-empty' || status === 'track-connect'"
		)

	WinnerCard(
		:class="`${status}__` + 'component'"
		v-if="status === 'win'"
	)

	MainButton(
		v-if="button"
		:class="`${status}__` + 'button'"
		:buttonIcon="button.buttonIcon"
		:buttonText="button.buttonText"
		:theme="button.buttonTheme"
	)
</template>

<script>
import MainButton from '~/components/button/MainButton';
import EmptyCard from '~/components/ui/EmptyCard';
import WinnerCard from '~/components/ui/WinnerCard';

export default {
	props: ['header', 'button', 'status'],

	data() {
		return {};
	},

	methods: {},

	components: {
		MainButton,
		EmptyCard,
		WinnerCard,
	},
};
</script>

<style lang="scss" scoped>
.car-card {
	background-color: #363431;
	padding: d(10);
	width: d(184);
	border-radius: d(10);

	&__header {
		margin-bottom: d(10);
		padding: 0 d(10);

		display: flex;
		justify-content: center;
	}

	&__icon {
		width: d(18);
		height: d(18);
		display: flex;

		margin-right: d(10);

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
		position: relative;

		img {
			width: 100%;
			height: 100%;
		}
	}
}

.passive {
	background-color: transparent;
	& .car-card__img {
		position: relative;

		&::after {
			content: '';
			position: absolute;
			width: 100%;
			height: 98%;
			background: rgba(0, 0, 0, 0.7);
			left: 0;
			top: 0;
			transition: opacity 0.6s;
			border-radius: d(5);
		}
	}

	&__block {
		opacity: 0;
	}

	&__button {
		display: none;
	}
}

.passive-market {
	background-color: transparent;
	& .car-card__img {
		position: relative;

		&::after {
			content: '';
			position: absolute;
			width: 100%;
			height: 98%;
			background: rgba(0, 0, 0, 0.7);
			left: 0;
			top: 0;
			transition: opacity 0.6s;
			border-radius: d(5);
		}
	}

	&__block {
		opacity: 0.7;
	}

	&__button {
		display: none;
	}
}

.normal {
	&__block {
		opacity: 0;
	}
}

.broken {
	&__img {
		position: relative;
		filter: grayscale(1);

		&::after {
			content: '';
			position: absolute;
			width: 100%;
			height: 98%;
			background: rgba(0, 0, 0, 0.7);
			left: 0;
			top: 0;
			transition: opacity 0.6s;
			border-radius: d(5);
		}
	}
}

.passive-broken {
	background-color: transparent;

	&__block {
		opacity: 0.4;
	}

	&__img {
		position: relative;
		filter: grayscale(1);

		&::after {
			content: '';
			position: absolute;
			width: 100%;
			height: 98%;
			background: rgba(0, 0, 0, 0.7);
			left: 0;
			top: 0;
			transition: opacity 0.6s;
			border-radius: d(5);
		}
	}

	&__button {
		display: none;
	}
}

.empty {
	background-color: transparent;

	&__block {
		opacity: 0;
	}

	&__img {
		width: d(164);
		height: d(164);
		img {
			opacity: 0;
		}
	}

	&__component {
		height: 100%;
		width: 100%;

		position: absolute;
		top: 0;
	}

	&__button {
		display: none;
	}
}

.track-empty {
	background-color: transparent;

	&__header {
		justify-content: start;
	}

	&__img {
		margin-bottom: 0;

		img {
			opacity: 0;
		}
	}

	&__component {
		// height: 100%;
		width: 100%;

		position: absolute;
		top: 0;
	}
}

.track-connect {
	background-color: transparent;

	&__header {
		justify-content: start;
	}

	&__icon {
		::v-deep {
			svg {
				path {
					fill: $pink;
				}
			}
		}
	}

	&__img {
		margin-bottom: 0;

		img {
			opacity: 0;
		}
	}

	&__component {
		// height: 100%;
		width: 100%;

		position: absolute;
		top: 0;
	}
}

.player {
	&__header {
		justify-content: start;
	}

	&__icon {
		::v-deep {
			svg {
				path {
					fill: $turquoise;
				}
			}
		}
	}

	&__img {
		display: flex;
		margin-bottom: 0;

		img {
			height: 100%;
			width: 100%;
		}
	}
}

.my-car {
	&__header {
		justify-content: start;
	}

	&__icon {
		::v-deep {
			svg {
				path {
					fill: $turquoise;
				}
			}
		}
	}

	&__img {
		display: flex;
		margin-bottom: 0;

		img {
			height: 100%;
			width: 100%;
		}
	}

	&__text {
		color: $turquoise;
	}
}

.lost {
	background-color: $pink;
	&__header {
		justify-content: start;
	}

	&__icon {
		::v-deep {
			svg {
				path {
					fill: #000;
				}
			}
		}
	}

	&__img {
		margin-bottom: 0;
	}
}
.passive-lost {
	background-color: $pink;
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
		border-radius: d(5);
	}

	&__header {
		justify-content: start;
	}

	&__icon {
		::v-deep {
			svg {
				path {
					fill: #000;
				}
			}
		}
	}

	&__img {
		display: flex;
		margin-bottom: 0;

		img {
			height: 100%;
			width: 100%;
		}
	}
}

.win {
	background-color: #003dff;
	position: relative;

	&__header {
		justify-content: start;
	}

	&__icon {
		::v-deep {
			svg {
				path {
					fill: $turquoise;
				}
			}
		}
	}

	&__img {
		position: relative;
		margin-bottom: 0;

		&::after {
			content: '';
			position: absolute;
			width: 100%;
			height: 100%;
			background: rgba(0, 61, 255, 0.6);
			left: 0;
			top: 0;
			transition: opacity 0.6s;
			border-radius: d(5);
		}
	}

	&__component {
		height: 100%;
		width: 100%;

		position: absolute;
		top: d(10);
		left: 0;
	}
}
</style>
