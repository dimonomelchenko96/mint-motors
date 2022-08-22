<template lang="pug">
.logo
	include ../../assets/svg/layout/logo.svg
</template>

<script>
export default {
	name: 'Logo',
};
</script>

<style lang="scss" scoped>
.logo {
	svg {
		width: d(96);
		height: d(32);
	}
}
</style>
