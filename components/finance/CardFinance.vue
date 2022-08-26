<template lang="pug">
.card-finance
	.header-block.card-finance__header
		.header-block__title(
			v-if="name === 'Balance'"
		)
			.header-block__icon
				img(
					src="~/assets/svg/finance/fox.svg"
				)

			.header-block__name {{ name }}

		.header-block__title.header-block__title_pool(
			v-if="name === 'Staking Pool'"
		)
			.header-block__icons
				.header-block__icon
					include ../../assets/svg/finance/busd_icon.svg

				.header-block__icon.header-block__icon_pool
					include ../../assets/svg/finance/mtr-logo.svg

			.header-block__name {{ name }}

		.header-block__amount(
			v-if="name === 'Balance'"
		)
			.header-block__name.header-block__name_pink $

			.header-block__name {{ sum }}

		.header-block__amount.header-block__amount_pool(
			v-if="name === 'Staking Pool'"
		)
			.header-block__name.header-block__name_pool Apr

			.header-block__name.header-block__name_turquoise {{ sum }}

	.main-block.card-finance__main(
		:class="'main-block_' + main.background"
	)
		.main-block__title(
			:class="name === 'Staking Pool' && 'main-block__title_pool'"
		)
			.main-block__icon(
				:class="'main-block__icon_' + main.icon"
			)
				include ../../assets/svg/finance/mtr-logo.svg

			.main-block__name(
				:class="'main-block__name_' + main.icon"
			) {{ main.name}}

		.main-block__sum {{ main.amount }}

		MainButton(
			:buttonText="main.button.name"
			:theme="main.button.background"
		)

	.more.card-finance__more
		.more__text More

		.more__icon
			include ../../assets/svg/finance/arrow_down.svg

</template>

<script>
import MainButton from '~/components/button/MainButton';

export default {
	props: ['name', 'sum', 'main'],
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
.card-finance {
	padding: d(18);
	width: 100%;
	background-color: #201f23;

	border-radius: d(10);

	&__header {
		margin-bottom: d(24);
	}

	&__main {
		margin-bottom: d(8);
	}

	&__more {
		display: flex;
		justify-content: center;
		align-items: center;
	}
}

.header-block {
	display: flex;
	justify-content: space-between;
	align-items: flex-end;

	&__title {
		display: grid;
		gap: d(8);

		&_pool {
			display: flex;
			flex-direction: column-reverse;
		}
	}

	&__icons {
		display: flex;
		align-items: center;
	}

	&__icon {
		height: d(34);
		width: d(34);
		display: flex;

		img {
			height: 100%;
			width: 100%;
		}

		::v-deep {
			svg {
				margin: auto;
				height: 100%;
				width: 100%;
			}
		}

		&_pool {
			background-color: $pink;
			border-radius: 50%;
			transform: translateX(d(-10));

			::v-deep {
				svg {
					margin: auto;
					height: d(12);
					width: d(23);
				}
			}
		}
	}

	&__name {
		font-family: 'Zen Dots';
		font-weight: 400;
		font-size: d(12);
		line-height: d(12);
		letter-spacing: 0.1em;

		color: $white;
		opacity: 0.5;

		&_pink {
			width: 1.5ch;
			color: $pink;
		}

		&_pool {
			opacity: 1;
			text-transform: uppercase;
			line-height: d(20);
		}

		&_turquoise {
			font-size: d(24);
			line-height: d(24);
			color: $turquoise;
			opacity: 1;
		}
	}

	&__amount {
		display: flex;

		&_pool {
			flex-direction: column;
		}
	}
}

.main-block {
	border-radius: d(8);
	padding: d(12);

	&_black {
		background-color: #19191f;
	}

	&_pink {
		background-color: $pink;
	}

	&__title {
		display: flex;
		margin-bottom: d(12);

		&_pool {
			justify-content: center;
		}
	}

	&__icon {
		width: d(16);
		height: d(16);
		background-color: $pink;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;

		margin-right: d(12);

		::v-deep {
			svg {
				height: d(5);
				width: d(11);
			}
		}

		&_black {
			background-color: #1d232a;

			::v-deep {
				svg {
					path {
						fill: $pink;
					}
				}
			}
		}
	}

	&__name {
		font-family: 'Zen Dots';
		font-weight: 400;
		font-size: d(12);
		line-height: d(18);

		color: $pink;

		&_black {
			color: #1d232a;
		}
	}

	&__sum {
		font-family: 'Zen Dots';
		font-weight: 400;
		font-size: d(35);
		line-height: d(42);
		text-align: center;
		color: $white;

		margin-bottom: d(8);
	}
}

.more {
	&__text {
		font-family: 'Zen Dots';
		font-weight: 400;
		font-size: d(12);
		line-height: d(42);
		letter-spacing: 0.1em;

		color: $white;

		margin-right: d(10);
	}

	&__icon {
		width: d(14);
		height: d(7);
		display: flex;

		::v-deep {
			svg {
				margin: auto;
				height: 100%;
				width: 100%;
			}
		}
	}
}
</style>
