<template lang="pug">
.track-1st-reward
    IconToken.track-1st-reward_icon
</template>

<script>
import IconToken from '~/components/ui/IconToken';

export default {
	name: 'TrackDay1stReward',
	components: {
		IconToken,
	},

	data() {
		return {};
	},
};
</script>

<style lang="scss" scoped>
.track-1st-reward {
	display: flex;
	justify-content: space-between;
	justify-content: space-between;
	align-items: center;
	padding: d(8) d(16);

	background: #f47168;
	border-radius: 18px;

	&_icon {
		width: d(18);
		height: d(18);
	}
}
</style>
