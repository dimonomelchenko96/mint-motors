<template lang="pug">
.racing
	TrackDayCard.racing__card(
		v-for="track in tracks"
		:key= "track.trackId"
		:trackId = "track.trackId"
		:allPlayers = "track.allPlayers"
		:currentPlayers = "track.currentPlayers"
		:titlePlayers = "track.titlePlayers"	
		:title = "track.title"
		:reward = "track.reward"
		:reward2nd = "track.reward2nd"
		:price = "track.price"
	)
</template>

<script>
import TrackDayCard from '~/components/ui/RacingTrack/TrackDayCard.vue';

export default {
	name: 'Racing',

	data() {
		return {
			tracks: [
				{
					trackId: 45645645465,
					// TrackDayPlayers
					allPlayers: 4,
					currentPlayers: 0,
					titlePlayers: 'players',
					// TrackDayTitle
					title: 'track day',

					// TrackDay1stReward
					reward: 6000,
					// TrackDay2ndReward
					reward2nd: 'none',
					// TrackDayPrice
					price: 4000,
				},
				{
					trackId: 9878978978,
					// TrackDayPlayers
					allPlayers: 4,
					currentPlayers: 0,
					titlePlayers: 'players',
					// TrackDayTitle
					title: 'track day',

					// TrackDay1stReward
					reward: 6000,
					// TrackDay2ndReward
					reward2nd: 'none',
					// TrackDayPrice
					price: 4000,
				},
			],
		};
	},

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
	gap: d(20);

	&__card {
		width: d(612);
		height: d(414);
	}
}
</style>
