<template lang="pug">
.track
	.track-day
		TrackDayBackgroundImage.track-day__images
		.container
			.container__players
				TrackDayPlayers.track-day__players(
					:allPlayers="allPlayers"
					:currentPlayers="currentPlayers"
					:status="status"
				)
				TrackDayTitle.track-day__title(
					:title="title"
				)
			.container__reward
				TrackDay1stReward.track-day__reward(
					:reward="reward"
					:status="status"
				)
				TrackDay2ndReward(
					:reward="reward2nd"
				)
		
		TrackDayPrice.track-day__price(
			v-if="status !== 'winner'"
			:price="price"
			:status="status"
		)
		.track-day__price.track-day__price_win(
			v-else
		)
			.win-amount
				.win-amount__icon
					include ../../../assets/svg/car-card/cup.svg
				TrackDay1stReward.win-amount__sum(
					:reward="reward"
				)
			
			.track-day__button Claim reward

	.track__players
		CarCardTrack.track__players__card(
			:status="'passive-lost'"
		)

		CarCardTrack.track__players__card(
			:status="'passive-lost'"
		)

		CarCardTrack.track__players__card(
			:status="'win'"
		)
		CarCardTrack.track__players__card(
			:status="'passive-lost'"
		)
		//- .track__players__card
		//- 	.card-await
		//- 		include ../../assets/svg/racing/human.svg
		//- 		span Await player
		//- 	EmptyCard
		//- .track__players__card
		//- 	.card-await
		//- 		include ../../assets/svg/racing/human.svg
		//- 		span Await player
		//- 	EmptyCard
		//- .track__players__card
		//- 	.card-await
		//- 		include ../../assets/svg/racing/human.svg
		//- 		span Await player
		//- 	EmptyCard
		//- .track__players__card
		//- 	.card-await
		//- 		include ../../assets/svg/racing/human.svg
		//- 		span Await player
		//- 	EmptyCard
	MainButton.track__button(
		:buttonText="'start new race'"
		:buttonIcon="'race'"
		@click.native="$store.commit('racing/isPaidToggle')"
	)
</template>

<script>
import TrackDayCard from '~/components/ui/RacingTrack/TrackDayCard';
import TrackDayBackgroundImage from '~/components/ui/RacingTrack/TrackDayBackgroundImage.vue';
import TrackDayTitle from '~/components/ui/RacingTrack/TrackDayTitle.vue';
import TrackDayPlayers from '~/components/ui/RacingTrack/TrackDayPlayers.vue';
import TrackDay1stReward from '~/components/ui/RacingTrack/TrackDay1stReward.vue';
import TrackDay2ndReward from '~/components/ui/RacingTrack/TrackDay2ndReward.vue';
import TrackDayPrice from '~/components/ui/RacingTrack/TrackDayPrice.vue';
import EmptyCard from '~/components/ui/EmptyCard.vue';
import MainButton from '~/components/button/MainButton.vue';
import CarCardTrack from '~/components/carCards/CarCardTrack.vue';

export default {
	name: 'Racing-track',

	data() {
		return {
			status: 'winner',
			trackId: '',
			// TrackDayPlayers
			allPlayers: 4,
			currentPlayers: 4,
			// TrackDayTitle
			title: 'track day',
			// TrackDay1stReward
			reward: 6000,
			// TrackDay2ndReward
			reward2nd: 'none',
			// TrackDayPrice
			price: 4000,
		};
	},

	mounted() {
		this.trackId = this.$route.params.track;
	},
	components: {
		TrackDayCard,
		TrackDayTitle,
		TrackDayPlayers,
		TrackDayBackgroundImage,
		TrackDay1stReward,
		TrackDay2ndReward,
		TrackDayPrice,
		EmptyCard,
		MainButton,
		CarCardTrack,
	},
};
</script>

<style lang="scss" scoped>
.track {
	&-day {
		position: relative;
		height: 45vh;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;

		.container {
			display: flex;
			justify-content: space-between;
			margin: 0 auto;

			z-index: 10;
			width: 60%;

			&__players {
				width: 33%;
			}

			&__reward {
				width: 33%;
				display: flex;
				flex-direction: column;
				justify-content: flex-start;
			}
		}

		&__images {
			z-index: 1;

			::v-deep {
				img {
					border-radius: 0;
				}
			}
		}

		&__players {
			width: fit-content;
			margin-bottom: d(32);
			line-height: d(24);
		}

		&__title {
			margin-bottom: d(34);
		}

		&__price {
			width: 60%;
			margin: 0 auto d(12);

			border-radius: d(12);
			z-index: 10;

			&_win {
				display: flex;
				justify-content: space-between;
				align-items: center;
			}
		}

		&__reward {
			margin-bottom: d(21);
		}

		&__button {
			font-family: 'Zen Dots';
			font-style: normal;
			font-weight: 400;
			font-size: d(12);
			letter-spacing: 0.01em;
			color: #fff;

			padding: 0 d(25);
			background-color: #2657f2;
			height: 100%;
			border-radius: d(17);

			display: flex;
			align-items: center;
		}
	}
	&__players {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: d(44);
		height: 42vh;
		width: 60%;
		margin: 0 auto;

		&__card {
			font-family: 'Zen Dots';
			font-style: normal;
			font-weight: 400;
			font-size: d(12);
			line-height: d(42);
			letter-spacing: 0.01em;
			color: #fff;

			svg {
				margin-left: d(5);
				margin-right: d(13);
				path {
					fill: #616161;
				}
			}
		}
	}
	&__button {
		width: d(272);
		justify-content: space-between;
		padding-left: d(16);
		padding-right: d(62);
		margin: 0 auto;
		cursor: pointer;
		position: absolute;
		bottom: d(49);
		left: 50%;
		transform: translate(-50%, -50%);
	}
}

.win-amount {
	display: flex;
	padding: d(7) d(16);
	height: d(35);
	width: fit-content;
	background-color: $black;

	border-radius: d(17);

	&__icon {
		height: 100%;

		svg {
			height: 100%;
			width: 100%;
		}
	}

	&__sum {
		background: none;

		::v-deep {
			span {
				line-height: d(12) !important;
			}

			.track-1st-reward__text_opacity {
				opacity: 1;
				color: #fced6d;
			}
		}
	}
}
</style>
