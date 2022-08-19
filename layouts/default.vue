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
    name: 'Layout',
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

    &__header {
        position: absolute;
        top: d(10);
        left: d(38);
        width: calc(100% - d(76));
    }
}
</style>
