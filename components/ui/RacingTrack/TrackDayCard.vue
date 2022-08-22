<template lang="pug">
.track-day-card
	//- TrackDayBackgroundImage.track-day-card__img
	TrackDayPlayers.track-day-card__players(
        :allPlayers="allPlayers"
        :currentPlayers="currentPlayers"
        :titlePlayers="titlePlayers"
    )
	TrackDayTitle(
        :title="title"
    )
	TrackDayButton
	TrackDay1stReward
</template>

<script>
import TrackDayBackgroundImage from '~/components/ui/RacingTrack/TrackDayBackgroundImage.vue';
import TrackDayTitle from '~/components/ui/RacingTrack/TrackDayTitle.vue';
import TrackDayPlayers from '~/components/ui/RacingTrack/TrackDayPlayers.vue';
import TrackDayButton from '~/components/ui/RacingTrack/TrackDayButton.vue';
import TrackDay1stReward from '~/components/ui/RacingTrack/TrackDay1stReward.vue';

export default {
	name: 'TrackDayCard',
	components: {
		TrackDayTitle,
		TrackDayPlayers,
		TrackDayBackgroundImage,
		TrackDayButton,
		TrackDay1stReward,
	},

	data() {
		return {
			// TrackDayPlayers
			allPlayers: 4,
			currentPlayers: 0,
			titlePlayers: 'players',
			// TrackDayTitle
			title: 'track day',
		};
	},
};
</script>

<style lang="scss" scoped>
.track-day-card {
	position: relative;

	&__players {
		width: d(150);
	}
}
</style>
