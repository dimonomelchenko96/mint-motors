<template lang="pug">
.home
	nuxt-link.home__link(
		v-for="card in cards"
		:key="card.id"
		:to="'/'"
	)
		CardHome(
			:id="card.id"
			:name="card.name"
			:numderOfCars="card.numderOfCars ? card.numderOfCars : null"
			:icon="card.icon ? card.icon : null"
			:img1="card.img"
			:arrow="card.arrow ? card.arrow : null"
		)
</template>

<script>
import CardHome from '../components/CardHome';

export default {
    name: 'IndexPage',
    data() {
        return {
            cards: [
                {
                    id: 1,
                    name: 'Garage',
                    numderOfCars: '04',
                    icon: 'garage_icon',
                    img: 'avto_big.png',
                },
                {
                    id: 2,
                    name: 'NFT Market',
                    icon: 'market_icon',
                    img: 'avto_right.png',
                },
                {
                    id: 3,
                    name: 'Finance',
                    icon: 'finance_icon',
                    img: 'finance.png',
                },
                {
                    id: 4,
                    name: 'Start Race',
                    img: 'avto_big.png',
                    arrow: 'arrow_right.svg',
                },
            ],
        };
    },

    components: {
        CardHome,
    },
};
</script>

<style lang="scss" scoped></style>
