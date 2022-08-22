<template lang="pug">
footer.footer
	.logo.footer__logo
		include ../assets/svg/layout/logo.svg
	.token.footer__token
		p {{token}}
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
.footer {
    &__logo {
        position: absolute;
        bottom: d(50);
        left: d(38);
    }

    &__token {
        position: absolute;
        bottom: d(50);
        right: d(38);
    }
}

.logo {
    width: d(96);
    height: d(32);
}
.token {
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
