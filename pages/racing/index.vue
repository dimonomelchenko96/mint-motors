<template lang="pug">
.racing
	TrackDayCard.racing__card
</template>

<script>
import TrackDayCard from '~/components/ui/RacingTrack/TrackDayCard.vue';

export default {
	name: 'Racing',

	components: {
		TrackDayCard,
	},
};
</script>

<style lang="scss" scoped>
.racing {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;

	&__card {
		width: d(612);
		height: d(414);
	}
}
</style>
