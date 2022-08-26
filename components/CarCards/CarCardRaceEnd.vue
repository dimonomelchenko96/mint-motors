<template lang="pug">
CarCard.car-card-race-end(
	:header="status === 'win' && winner || status === 'lost' && loser || status === 'passive-lost' && loser"
	:status="status"
)
</template>

<script>
import CarCard from '~/components/carCards/CarCard';

export default {
	props: ['status'],

	data() {
		return {
			winner: {
				icon: 'player',
				text: 'WIN! Player 3',
			},

			loser: {
				icon: 'player',
				text: 'Lost! Player 2',
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
.car-card-race-end {
	display: flex;
	width: 100%;
	height: 100%;
}
</style>
