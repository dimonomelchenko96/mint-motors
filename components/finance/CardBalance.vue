<template lang="pug">
CardFinance.card-balance(
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
			name: 'Balance',
			sum: '344.00',
			main: {
				name: 'MTR',
				background: 'black',
				icon: 'red-logo',
				amount: '98 989.65',
				button: {
					name: 'harvest',
					background: 'pink',
				},
			},
		};
	},
	methods: {},

	components: {
		CardFinance,
	},
};
</script>

<style lang="scss" scoped></style>
