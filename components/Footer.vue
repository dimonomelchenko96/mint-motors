<template lang="pug">
div
	.logo
		include ../assets/svg/layout/logo.svg
	.token
		p {{token}} mtr
		img(
			src="../assets/img/layout/tokenImage.png"
			alt="token"
		)
</template>

<script>
export default {
    name: 'Footer',
    data() {
        return {
            token: 'asdasd234asdas323d',
        };
    },
};
</script>

<style lang="scss" scoped>
.logo {
    width: d(96);
    height: d(32);
    position: absolute;
    bottom: d(50);
    left: d(38);
}
.token {
    position: absolute;
    bottom: d(50);
    right: d(38);
    display: flex;
    align-items: center;

    p {
        margin-right: d(16);
        font-family: 'Zen Dots';
        font-style: normal;
        font-weight: 400;
        font-size: d(14);
        color: #ffffff;
    }
    img {
        width: d(32);
        height: d(32);
    }
}
</style>
