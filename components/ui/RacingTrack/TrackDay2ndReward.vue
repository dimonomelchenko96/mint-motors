<template lang="pug">
.track-2nd-reward
	.track-2nd-reward__container
		span 2-nd Reward
		span {{reward}}
	.track-2nd-reward__container
		span 2-nd Reward
		span {{reward}}
</template>

<script>
export default {
	name: 'TrackDay2ndReward',

	props: ['reward'],
};
</script>

<style lang="scss" scoped>
.track-2nd-reward {
	background: rgba(0, 0, 0, 0.1);
	backdrop-filter: blur(10px);
	border-radius: 18px;
	// width: d(283);

	&__container {
		display: flex;
		justify-content: space-between;
		padding: d(6) d(16);

		font-family: 'Zen Dots';
		font-style: normal;
		font-weight: 400;
		font-size: d(12);
		color: #ffffff;
		letter-spacing: 0.01em;
		line-height: d(20);
	}
}
</style>
