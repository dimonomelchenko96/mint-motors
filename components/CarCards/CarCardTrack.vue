<template lang="pug">
CarCard.car-card-track(
	:header="status === 'track-empty' && awaitPlayer || status === 'track-connect' && awaitPlayer || status === 'player' && player ||status === 'my-car' && myCar"
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

			player: {
				icon: 'player',
				text: 'Player 1',
			},

			myCar: {
				icon: 'player',
				text: 'My car',
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
	height: 100%;
}
</style>
