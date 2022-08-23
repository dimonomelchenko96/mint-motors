<template lang="pug">
.track-price
    span.track-price__text(
		:class="[$route.fullPath === '/racing' && 'track-price__text_opacity' ]"
	) Participation price
    .track-price__reward
        IconToken.track-price__reward_icon
        span.track-price__text.track-price__text_reward {{priceView}} mrt
</template>

<script>
import IconToken from '~/components/ui/IconToken';

export default {
	name: 'TrackDayPrice',
	components: {
		IconToken,
	},
	props: ['price'],

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
	padding: d(8) d(40);
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

		&_opacity {
			color: rgba(255, 255, 255, 0.3);
		}

		&_reward {
			text-transform: uppercase;
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
	}
}
</style>
