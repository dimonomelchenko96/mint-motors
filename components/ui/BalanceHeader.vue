<template lang="pug">
.balance
    IconToken.balance__icon
    p {{balanceWiev}} mtr
</template>

<script>
import IconToken from '~/components/ui/IconToken';

export default {
	name: 'BalanceHeader',

	components: {
		IconToken,
	},

	props: ['balance'],

	data() {
		return {
			balanceWiev: null,
		};
	},

	mounted() {
		this.balanceWiev = this.balance.toFixed(2);
	},
};
</script>

<style lang="scss" scoped>
.balance {
	display: flex;
	align-items: center;

	&__icon {
		width: d(28);
		height: d(28);
		margin-right: d(8);
	}

	p {
		font-family: 'Zen Dots';
		font-style: normal;
		font-weight: 400;
		font-size: d(12);
		color: #fff;
		text-transform: uppercase;
	}
}
</style>
