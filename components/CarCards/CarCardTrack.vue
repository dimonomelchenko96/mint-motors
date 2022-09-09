<template lang="pug">
CarCard.car-card-track(
	:header="status === 'track-empty' && awaitPlayer || status === 'track-connect' && awaitPlayer || status === 'player' && player || status === 'my-car' && myCar || status === 'passive-lost' && lost || status === 'lost' && youLost || status === 'win' && win"
	:status="status"
)
</template>

<script>
import CarCard from '~/components/carCards/CarCard';

export default {
	props: ['status'],

	data() {
		return {
			awaitPlayer: {
				icon: 'player',
				text: 'Await player',
			},

			lost: {
				icon: 'player',
				text: 'Lost! Player 1',
			},

			myCar: {
				icon: 'player',
				text: 'My car',
			},

			win: {
				icon: 'player',
				text: 'WIN! Player 3',
			},

			youWin: {
				icon: 'player',
				text: 'You WIN!',
			},

			youLost: {
				icon: 'player',
				text: 'You lost',
			},
		};
	},
	methods: {},

	components: {
		CarCard,
	},
};
</script>

<style lang="scss" scoped>
.car-card-track {
	display: flex;
	flex-direction: column;
	width: 100%;
}
</style>
