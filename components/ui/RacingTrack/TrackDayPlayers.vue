<template lang="pug">
.track-players(
	:class="[currentPlayers === allPlayers && 'track-players_green']"
)
	.track-players__icon.track-players__human(
		v-if="currentPlayers !== allPlayers"
	)
		include ../../../assets/svg/racing/human.svg
	.track-players__icon.track-players__check(
		v-else
	)
		include ../../../assets/svg/racing/check.svg
	span {{currentPlayers}}
	span /
	span.track-players__all-players {{allPlayers}}
	span {{ $route.fullPath === '/racing' && 'players' || currentPlayers === allPlayers ? 'players' : 'await players'}}
</template>

<script>
export default {
	name: 'TrackDayPlayers',

	props: ['allPlayers', 'currentPlayers', 'titlePlayers'],
};
</script>

<style lang="scss" scoped>
.track-players {
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: d(6) d(12);
	background: #000;
	border-radius: d(20);
	font-family: 'Zen Dots';
	font-style: normal;
	font-weight: 400;
	font-size: d(12);
	color: #ffffff;

	&_green {
		background: #6dfcc8;
		color: #000;
	}
	&__icon {
		display: flex;
		align-items: center;
	}

	&__human {
		svg {
			width: d(14);
			height: d(13);
			margin-right: d(13);
		}
	}

	&__check {
		svg {
			width: d(16);
			height: d(12);
			margin-right: d(4);

			path {
				fill: #000;
			}
		}
	}

	&__all-players {
		margin-right: d(5);
	}
}
</style>
