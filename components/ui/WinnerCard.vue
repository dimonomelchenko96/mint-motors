<template lang="pug">
.winner-card
    include ../../assets/svg/car-card/cup.svg

</template>

<script>
export default {
	name: 'WinnerCard',
};
</script>

<style lang="scss" scoped>
.winner-card {
	width: 100%;
	height: 100%;
	// background: #2c2b2f;
	border-radius: d(6);
	display: flex;
	justify-content: center;
	align-items: center;

	svg {
		width: d(65);
		height: d(73);
	}
}
</style>
