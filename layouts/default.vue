<template lang="pug">
.layout
	.content
		Header.content__header
		Footer.content__footer
		Nuxt
</template>

<script>
import Header from '~/components/Header';
import Footer from '~/components/Footer';

export default {
    components: {
        Header,
        Footer,
    },
};
</script>

<style lang="scss" scoped>
.layout {
    overflow: hidden;
    background-color: #222125;
}

.content {
    max-width: $max-width;

    position: relative;
    width: 100vw;
    height: 100vh;
    padding: d(10) d(38) d(50);
    &__header {
        position: absolute;
        top: 0;
        width: calc(100% - d(76));
    }
}
</style>
