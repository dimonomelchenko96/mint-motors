<template lang="pug">
.empty-card
    include ../../assets/svg/layout/vector.svg

</template>

<script>
export default {
	name: 'EmptyCard',
};
</script>

<style lang="scss" scoped>
.empty-card {
	width: d(164);
	height: d(164);
	background: #2c2b2f;
	border-radius: d(6);
	display: flex;
	justify-content: center;
	align-items: center;

	svg {
		width: d(67);
		height: d(32);
	}
}
</style>
