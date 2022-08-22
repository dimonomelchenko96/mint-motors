<template lang="pug">
.finance
	CardBalance
	CardPool
</template>

<script>
import CardBalance from '~/components/finance/CardBalance';
import CardPool from '~/components/finance/CardPool';

export default {
	name: 'Finance',

	components: {
		CardBalance,
		CardPool,
	},
};
</script>

<style lang="scss" scoped>
.finance {
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	// p {
	//     text-align: center;
	//     padding: 200px;
	//     font-size: 70px;
	//     color: #fff;
	// }
}
</style>
