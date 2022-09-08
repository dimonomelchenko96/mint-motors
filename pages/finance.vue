<template lang="pug">
.finance
	.finance__block
		.finance__img
			img(
				src='~/assets/img/finance/schedule.png'
		)

		.finance__info
			.currency.finance__currency
				.currency__img
					include ../assets/svg/finance/mtr-logo.svg

				.currency__currency
					.finance__text.finance__text_name MTR
					.finance__text Mint Motors Token

			.finance__price
				.finance__text.finance__text_price Price

				.finance__text.finance__text_turquoise {{ '$ '+ amount}}

				.finance__text.finance__text_change {{ change }}
		

	.finance__cards
		CardBalance.finance__card

		CardPool.finance__card
</template>

<script>
import CardBalance from '~/components/finance/CardBalance';
import CardPool from '~/components/finance/CardPool';

export default {
	name: 'Finance',

	components: {
		CardBalance,
		CardPool,
	},

	data() {
		return {
			amount: 34.55,
			change: '+3% (3.55$)',
		};
	},
};
</script>

<style lang="scss" scoped>
.finance {
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	&__block {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: flex-end;
		margin-bottom: d(70);
		height: 25vh;
	}

	&__info {
		position: absolute;
		width: d(796);

		display: flex;
		justify-content: space-between;
	}

	&__img {
		height: 100%;

		img {
			width: 100vw;
			height: 100%;
		}
	}

	&__cards {
		display: flex;
		width: d(796);
	}

	&__card {
		width: 50%;

		&:first-child {
			margin-right: d(32);
		}
	}

	&__text {
		font-family: 'Zen Dots';
		font-size: d(12);
		line-height: d(42);
		font-weight: 400;
		letter-spacing: 0.1em;
		color: $white;
		opacity: 0.5;

		&_name {
			font-size: d(42);
			line-height: d(50);
			opacity: 1;
		}

		&_price {
			opacity: 1;
			line-height: d(20);
		}

		&_turquoise {
			color: $turquoise;
			font-size: d(24);
			line-height: d(29);
			opacity: 1;
		}

		&_change {
			color: $turquoise;
			font-size: d(12);
			line-height: d(20);
		}
	}

	&__price {
		align-self: flex-end;
	}
}

.currency {
	display: flex;

	&__img {
		width: d(46);
		height: d(46);

		border-radius: 50%;
		background-color: $pink;

		display: flex;

		margin-right: d(25);

		::v-deep {
			svg {
				margin: auto;
				width: d(30);
				height: d(20);
			}
		}
	}
}
</style>
