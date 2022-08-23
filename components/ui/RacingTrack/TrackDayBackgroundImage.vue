<template lang="pug">
.track-background
    img(
        :src="img2"
    )
</template>

<script>
import img1 from '~/assets/img/racing/Frame 66.png';
import img2 from '~/assets/img/racing/Frame 74.png';
export default {
	name: 'TrackDayBackgroundImage',

	data() {
		return {
			img1,
			img2,
		};
	},
};
</script>

<style lang="scss" scoped>
.track-background {
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	border-radius: d(14);
	z-index: -1;

	img {
		width: 100%;
		height: 100%;
		border-radius: d(14);
	}
}
</style>
