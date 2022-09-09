<template lang="pug">
.track-price(
	:class="status"
)
	span.track-price__text(
			:class="[$route.fullPath === '/racing' && 'track-price__text_opacity', isPaid && 'track-price__text_green', status && 'track-price__text_' + `${status}`]"
		) Participation price
	.track-price__reward(
		:class="status && 'track-price__reward_' + `${status}`"
	)
		IconToken.track-price__reward_icon
		span.track-price__text.track-price__text_reward {{priceView}} mrt
		.track-price__paid(
			v-if="[isPaid || status === 'track-end']"
			:class="status && 'track-price__paid_' + `${status}`"
		)
			include ../../../assets/svg/racing/check.svg
			span Paid
</template>

<script>
import IconToken from '~/components/ui/IconToken';
import { mapState } from 'vuex';

export default {
	name: 'TrackDayPrice',
	components: {
		IconToken,
	},
	props: ['price', 'status'],

	computed: {
		...mapState({
			isPaid: state => state.racing.isPaid,
		}),
	},

	data() {
		return {
			priceView: '',
		};
	},

	methods: {
		transformReward(number) {
			this.priceView = new Intl.NumberFormat('ru-RU').format(number);
		},
	},

	mounted() {
		this.transformReward(this.price);
	},
};
</script>

<style lang="scss" scoped>
.track-price {
	padding: d(8) d(30);
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #1a1a1a;

	&__text {
		font-family: 'Zen Dots';
		font-style: normal;
		font-weight: 400;
		font-size: d(12);
		color: #fff;

		&_track-end {
			color: $black;
		}

		&_opacity {
			color: rgba(255, 255, 255, 0.3);
		}

		&_reward {
			text-transform: uppercase;
		}

		&_green {
			color: #6dfcc8;
		}
	}

	&__reward {
		display: flex;
		align-items: center;

		&_icon {
			width: d(18);
			height: d(18);
			margin-right: d(18);
		}

		&_track-end {
			span {
				color: $black;
			}
		}
	}
	&__paid {
		color: #6dfcc8;
		font-family: 'Zen Dots';
		font-style: normal;
		font-weight: 400;
		font-size: d(12);
		display: flex;
		align-items: center;
		letter-spacing: 0.1em;

		svg {
			width: d(16);
			height: d(12);
			margin-left: d(20);
			margin-right: d(12);

			path {
				fill: #6dfcc8;
			}
		}

		&_track-end {
			svg {
				path {
					fill: $black;
				}
			}
		}
	}
}

.track-end {
	filter: grayscale(1);
	background: #a1a9ad;
}
</style>
