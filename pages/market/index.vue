<template lang="pug">
.market-brands
	.market-brands__container
		h1.market-brands__title Brands
		.market-brands__wrapper
			MarketBrandCard(
				v-for="(item, i) in data"
				:key='i'
				:brand="item.brand"
				:amount="item.amount"
				:start="item.start"
			)
</template>

<script>
import MarketBrandCard from '~/components/MarketBrandCard';
export default {
    name: 'Market',
    data() {
        return {
            data: [
                {
                    brand: 'Audi',
                    amount: 3,
                    start: '',
                },
                {
                    brand: 'Acura',
                    amount: 2,
                    start: '',
                },
                {
                    brand: 'Bentley',
                    amount: 3,
                    start: '',
                },
                {
                    brand: 'Bmw',
                    amount: 3,
                    start: '',
                },
                {
                    brand: 'Fiat',
                    amount: 3,
                    start: 'Start on 01 Sep',
                },
                {
                    brand: 'Koenigsegg',
                    amount: 3,
                    start: 'Start on 01 Sep',
                },
                {
                    brand: 'Mercedes-Benz',
                    amount: 3,
                    start: 'Start on 01 Sep',
                },
                {
                    brand: 'Porsche',
                    amount: 13,
                    start: 'Start on 01 Sep',
                },
            ],
        };
    },
    components: {
        MarketBrandCard,
    },
    computed: {},
};
</script>

<style lang="scss" scoped>
.market-brands {
    height: calc(var(--vh) * 100);
    background: #2c2b2f;
    overflow-y: hidden;
    &__container {
        max-width: d(728);
        margin: 0 auto;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    &__title {
        font-family: 'Zen Dots';
        font-style: normal;
        font-weight: 400;
        font-size: d(32);
        line-height: d(38);
        letter-spacing: 0.01em;
        color: #ffffff;
    }
    &__wrapper {
        margin-top: d(55);
        display: grid;
        grid-gap: d(24);
        grid-template-columns: repeat(4, 1fr);
    }
}
</style>
