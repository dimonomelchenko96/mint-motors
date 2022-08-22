<template lang="pug">
.track-button
    p Start race
    .track-button__arrow

</template>

<script>
export default {
	name: 'TrackDayButton',
};
</script>

<style lang="scss" scoped>
.track-button {
	background-color: #fced6d;
	border-radius: d(56);
	font-family: 'Zen Dots';
	font-style: normal;
	font-weight: 400;
	font-size: d(14);
	line-height: d(42);
	color: #000000;
	display: flex;
	align-items: center;
	justify-content: center;
	width: d(162);
	cursor: pointer;

	p {
		margin-right: d(15);
	}

	&__arrow {
		width: d(10);
		height: d(10);

		border-right: d(3) solid #000;
		border-top: d(3) solid #000;
		transform: rotate(45deg);
	}
}
</style>
