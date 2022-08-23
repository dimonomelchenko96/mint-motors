<template lang="pug">
.track-day-card
	TrackDayBackgroundImage
	.container
		.container__players
			TrackDayPlayers.track-day-card__players(
				:allPlayers="allPlayers"
				:currentPlayers="currentPlayers"
				:titlePlayers="titlePlayers"
			)
			TrackDayTitle.track-day-card__title(
				:title="title"
			)
			TrackDayButton(
				:trackId="trackId"
			)
		.container__reward
			TrackDay1stReward.track-day-card__reward(
				:reward="reward"
			)
			TrackDay2ndReward(
				:reward="reward2nd"
			)
	TrackDayPrice.track-day-card__price(
		:price="price"
	)
</template>

<script>
import TrackDayBackgroundImage from '~/components/ui/RacingTrack/TrackDayBackgroundImage.vue';
import TrackDayTitle from '~/components/ui/RacingTrack/TrackDayTitle.vue';
import TrackDayPlayers from '~/components/ui/RacingTrack/TrackDayPlayers.vue';
import TrackDayButton from '~/components/ui/RacingTrack/TrackDayButton.vue';
import TrackDay1stReward from '~/components/ui/RacingTrack/TrackDay1stReward.vue';
import TrackDay2ndReward from '~/components/ui/RacingTrack/TrackDay2ndReward.vue';
import TrackDayPrice from '~/components/ui/RacingTrack/TrackDayPrice.vue';

export default {
	name: 'TrackDayCard',

	components: {
		TrackDayTitle,
		TrackDayPlayers,
		TrackDayBackgroundImage,
		TrackDayButton,
		TrackDay1stReward,
		TrackDay2ndReward,
		TrackDayPrice,
	},

	props: [
		'allPlayers',
		'currentPlayers',
		'titlePlayers',
		'title',
		'reward',
		'reward2nd',
		'price',
		'trackId',
	],
};
</script>

<style lang="scss" scoped>
.track-day-card {
	position: relative;
	border-radius: d(14);
	display: flex;
	flex-direction: column;
	justify-content: flex-end;

	.container {
		display: flex;
		padding: d(24);
		z-index: 10;

		&__players {
			width: 50%;
		}

		&__reward {
			width: 50%;
			display: flex;
			flex-direction: column;
			justify-content: flex-end;
		}
	}

	&__players {
		width: d(150);
		margin-bottom: d(32);
	}

	&__title {
		margin-bottom: d(23);
	}

	&__price {
		border-bottom-right-radius: d(12);
		border-bottom-left-radius: d(12);
		z-index: 10;
	}

	&__reward {
		margin-bottom: d(15);
	}
}
</style>
