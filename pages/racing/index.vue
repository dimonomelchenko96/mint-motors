<template lang="pug">
.racing
	h2 Select track
	VueSlickCarousel(v-bind="settings" @beforeChange='change')
		TrackDayCard.racing__card(
			v-for="(track, i) in tracks"
			:class="i === activeSlide ? 'racing__card-active' : null"
			:key= "track.trackId"
			:trackId = "track.trackId"
			:allPlayers = "track.allPlayers"
			:currentPlayers = "track.currentPlayers"	
			:title = "track.title"
			:reward = "track.reward"
			:reward2nd = "track.reward2nd"
			:price = "track.price"
		)

		template(#prevArrow="")
			button(class="carousel__arrow")
				img(src="@/assets/svg/carousel-arrow.svg" alt="arrow-left")
        
		template(#nextArrow="")
			button(class="carousel__arrow carousel__arrow-right")
				img(src="@/assets/svg/carousel-arrow.svg" alt="arrow-right")
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
import TrackDayCard from '~/components/ui/RacingTrack/TrackDayCard';

export default {
	name: 'Racing',

	data() {
		return {
			activeSlide: 0,
			settings: {
				centerMode: true,
				centerPadding: '27.5%',
				focusOnSelect: true,
				slidesToShow: 1,
				speed: 500,
				arrow: true,
				draggable: true,
				// infinite: false,
			},
			tracks: [
				{
					trackId: 45645645465,
					// TrackDayPlayers
					allPlayers: 4,
					currentPlayers: 1,
					// TrackDayTitle
					title: 'track day1',

					// TrackDay1stReward
					reward: 6577,
					// TrackDay2ndReward
					reward2nd: 'none',
					// TrackDayPrice
					price: 4000,
				},
				{
					trackId: 9878978978,
					// TrackDayPlayers
					allPlayers: 4,
					currentPlayers: 2,
					// TrackDayTitle
					title: 'track day2',

					// TrackDay1stReward
					reward: 5252,
					// TrackDay2ndReward
					reward2nd: 'none',
					// TrackDayPrice
					price: 2000,
				},
				{
					trackId: 9878978978,
					// TrackDayPlayers
					allPlayers: 4,
					currentPlayers: 3,
					// TrackDayTitle
					title: 'track day3',

					// TrackDay1stReward
					reward: 4000,
					// TrackDay2ndReward
					reward2nd: 'none',
					// TrackDayPrice
					price: 1000,
				},
				{
					trackId: 9878978978,
					// TrackDayPlayers
					allPlayers: 4,
					currentPlayers: 4,
					// TrackDayTitle
					title: 'track day4',

					// TrackDay1stReward
					reward: 4500,
					// TrackDay2ndReward
					reward2nd: 'none',
					// TrackDayPrice
					price: 2200,
				},
				{
					trackId: 9878978978,
					// TrackDayPlayers
					allPlayers: 4,
					currentPlayers: 0,
					// TrackDayTitle
					title: 'track day5',

					// TrackDay1stReward
					reward: 3300,
					// TrackDay2ndReward
					reward2nd: 'none',
					// TrackDayPrice
					price: 1650,
				},
			],
		};
	},

	components: {
		TrackDayCard,
		VueSlickCarousel,
	},

	methods: {
		change(prev, next) {
			console.log(next);
			this.activeSlide = next;
		},
	},
};
</script>

<style lang="scss" scoped>
.racing {
	height: 90vh;
	display: flex;
	flex-direction: column;
	justify-content: center;

	h2 {
		font-family: 'Zen Dots';
		font-style: normal;
		font-weight: 400;
		font-size: d(32);
		line-height: d(38);
		letter-spacing: 0.01em;
		color: #ffffff;
		margin-bottom: d(55);
		margin-left: d(50);
	}

	&__cards {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: d(20);
	}
	&__card {
		height: d(414);
		opacity: 0.2;
		&-active {
			opacity: 1;
		}
	}
}

.carousel {
	&__arrow {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: d(6);
		width: d(40);
		height: d(40);
		background: #ffffff;
		border-radius: d(20);
		img {
			width: d(12);
			height: d(12);
		}
		&-right {
			img {
				transform: rotate(180deg);
			}
		}
	}
}

::v-deep .slick {
	&-prev,
	&-next {
		z-index: 100;
		transform: translate(0, -100%);
		&::before {
			display: none;
		}
		&:hover,
		&:focus {
			background: #ffffff;
		}
	}
	&-track {
		display: flex;
		column-gap: 20px;
	}
	&-prev {
		left: d(54);
	}
	&-next {
		right: d(54);
	}
}
</style>
