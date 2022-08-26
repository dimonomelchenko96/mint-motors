<template lang="pug">
CardFinance.card-pool(
	:name="name"
	:sum="sum"
	:main="main"
)
</template>

<script>
import CardFinance from '~/components/finance/CardFinance';

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
