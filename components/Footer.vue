<template lang="pug">
footer.footer
	nuxt-link(
		to="/"
	)
		Logo.footer__logo
	TokenUser.footer__token(
		:token="'assadsad1234567asdasd89'"
	)
</template>

<script>
import Logo from '~/components/ui/Logo.vue';
import TokenUser from '~/components/ui/TokenUser.vue';

export default {
	name: 'Footer',

	components: {
		Logo,
		TokenUser,
	},
};
</script>

<style lang="scss" scoped>
.footer {
	&__logo {
		position: absolute;
		bottom: d(50);
		left: d(38);
		z-index: 100;
	}

	&__token {
		position: absolute;
		bottom: d(50);
		right: d(38);
		z-index: 100;
	}
}
</style>
