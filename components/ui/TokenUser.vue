<template lang="pug">
.token
    p {{tokenWiev}}
    img(
		:src="tokenImage"
		alt="token"
	)
</template>

<script>
import tokenImage from '~/assets/img/layout/tokenImage.png';

export default {
	name: 'TokenUser',

	props: ['token'],

	data() {
		return {
			tokenWiev: '',
			tokenImage,
		};
	},
	methods: {
		cutToken(str) {
			const firstFourLetter = str.substring(0, 4);
			const lengthToken = this.token.length;
			const lastFourLetter = str.substring(lengthToken - 4, lengthToken);

			this.tokenWiev = firstFourLetter + '...' + lastFourLetter;
		},
	},

	mounted() {
		this.cutToken(this.token);
	},
};
</script>

<style lang="scss" scoped>
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
