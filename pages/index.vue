<template lang="pug">
.home
	.home__container
		CardHome.home__link(
			v-for="card in cards"
			:key="card.id"
			:class="'home__link_position-' + card.param.blockPosition"
			
			:name="card.name"
			:numderOfCars="card.numderOfCars"
			:icon="card.icon"
			:image="card.image"
			:arrow="card.arrow"
			:param="card.param"
			:link="card.link"
		)
</template>

<script>
import CardHome from '~/components/CardHome';

export default {
	name: 'IndexPage',
	data() {
		return {
			cards: [
				{
					id: 1,
					link: 'garage',
					name: 'Garage',
					numderOfCars: '04',
					icon: 'garage_icon',
					image: 'avto_big',
					param: {
						background: 'black',
						textColor: 'yellow',
						imgPosition: 'center',
						blockPosition: 'first',
					},
				},
				{
					id: 2,
					link: 'market',
					name: 'NFT Market',
					icon: 'market_icon',
					image: 'avto_right',
					param: {
						background: 'yellow',
						textColor: 'gray',
						imgPosition: 'right-bottom',
						blockPosition: 'second',
						textTransfer: true,
					},
				},
				{
					id: 3,
					link: 'finance',
					name: 'Finance',
					icon: 'finance_icon',
					image: 'finance',
					param: {
						background: 'turquoise',
						textColor: 'black',
						imgPosition: 'center',
						blockPosition: 'third',
					},
				},
				{
					id: 4,
					link: 'racing',
					name: 'Start Race',
					image: 'race',
					arrow: 'arrow_right',
					param: {
						background: 'white',
						textColor: 'black',
						imgPosition: 'center',
						blockPosition: 'fourth',
					},
				},
			],
		};
	},
	components: {
		CardHome,
	},
};
</script>

<style lang="scss" scoped>
.home {
	display: flex;
	height: 100vh;

	&__container {
		margin: auto;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: repeat(2, 1fr);

		grid-template-areas:
			'first first second third'
			'first first second fourth';

		gap: d(20);

		height: d(457);
		width: d(1200);
	}

	&__link {
		display: inline-block;
		&_position {
			&-first {
				grid-area: first;
			}

			&-second {
				grid-area: second;
			}

			&-third {
				grid-area: third;
			}

			&-fourth {
				grid-area: fourth;
			}
		}
	}
}
</style>
