<template lang="pug">
.card-pool
	CardFinance(
		:name="name"
		:sum="sum"
		:main="main"
	)
</template>

<script>
import CardFinance from './CardFinance';

export default {
	data() {
		return {
			name: 'Staking Pool',
			sum: '234%',
			main: {
				name: 'MTR Earned',
				background: 'pink',
				icon: 'black',
				amount: '33.34',
				button: {
					name: 'GET MTR',
					background: 'white',
				}
			}
		};
	},
	methods: {},

	components: {
		CardFinance,
	},
};
</script>

<style lang="scss" scoped></style>
