<template lang="pug">
.track-players
	include ../../../assets/svg/racing/human.svg
	span {{currentPlayers}}
	span /
	span.track-players__all-players {{allPlayers}}
	span {{titlePlayers}}
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

	svg {
		width: d(11);
		height: d(12);
		margin-right: d(13);
	}

	&__all-players {
		margin-right: d(5);
	}
}
</style>
