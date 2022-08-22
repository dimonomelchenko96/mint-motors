<template lang="pug">
.card-balance 
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
				}
			}
        }
    },
    methods: {

    },

    components: {
        CardFinance,
    }
}
</script>

<style lang="scss" scoped>
.card-balance {
	// height: 300px;
	// width: 300px;
	// display: flex;
}
</style>
