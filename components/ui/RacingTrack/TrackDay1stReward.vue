<template lang="pug">
.track-1st-reward(
	:class="status"
)
	span.track-1st-reward__text.span.track-1st-reward__text_opacity 1-st Reward
	IconToken.track-1st-reward__icon
	span.track-1st-reward__text.track-1st-reward__text_reward {{rewardView}} mrt
</template>

<script>
import IconToken from '~/components/ui/IconToken';

export default {
	name: 'TrackDay1stReward',

	props: ['reward', 'status'],

	components: {
		IconToken,
	},

	data() {
		return {
			rewardView: '',
		};
	},

	methods: {
		transformReward(number) {
			this.rewardView = new Intl.NumberFormat('ru-RU').format(number);
		},
	},

	mounted() {
		this.transformReward(this.reward);
	},
};
</script>

<style lang="scss" scoped>
.track-1st-reward {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 d(16);

	background: #f47168;
	border-radius: 18px;

	&__icon {
		width: d(18);
		height: d(18);
		margin-right: d(8);
	}

	&__text {
		font-family: 'Zen Dots';
		font-style: normal;
		font-weight: 400;
		font-size: d(12);
		color: #fff;
		letter-spacing: 0.01em;
		line-height: d(42);

		&_opacity {
			color: rgba(255, 255, 255, 0.5);
			margin-right: d(18);
		}

		&_reward {
			text-transform: uppercase;
		}
	}
}

.track-end {
	background: #a1a9ad;
	filter: grayscale(1);
}

.winner {
	background: #a1a9ad;
	filter: grayscale(1);
}
</style>
