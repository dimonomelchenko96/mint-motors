<template lang="pug">
.icon-token
    include ../../assets/svg/layout/vector.svg
</template>

<script>
export default {
	name: 'IconToken',
};
</script>

<style lang="scss" scoped>
.icon-token {
	background-color: #e05d54;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;

	svg {
		width: 64%;
		height: 32%;
	}
}
</style>
