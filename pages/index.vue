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
			:image="card.image"
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
					image: 'avto_big'

				},
				{
					id: 2,
					name: 'NFT Market',
					icon: 'market_icon',
					image: 'avto_right'
				},
				{
					id: 3,
					name: 'Finance',
					icon: 'finance_icon',
					image: 'finance'
				},
				{
					id: 4,
					name: 'Start Race',
					image: 'race',
					arrow: 'arrow_right'
				},
			]
		}
	},

	components: {
		CardHome,
	}

}
</script>

<style lang="scss" scoped>
// .div {
// 	display: flex;
// 	height: 100vh;
// 	jc
// }
.home {
	display: flex;
	margin: 0 auto;
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	height: d(616);
}
</style>
