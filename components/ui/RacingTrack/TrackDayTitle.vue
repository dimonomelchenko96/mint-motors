<template lang="pug">
h3.track-title {{titleView}}
</template>

<script>
export default {
	name: 'TrackDayTitle',

	props: ['title'],

	data() {
		return {
			titleView: '',
		};
	},

	methods: {
		firstLaterToUpperCase(str) {
			if (!str) return str;

			return str[0].toUpperCase() + str.slice(1);
		},
	},

	mounted() {
		this.titleView = this.firstLaterToUpperCase(this.title);
	},
};
</script>

<style lang="scss" scoped>
.track-title {
	width: d(300);
	font-family: 'Zen Dots';
	font-style: normal;
	font-weight: 400;
	font-size: d(52);
	line-height: d(48);
	color: #ffffff;
}
</style>
