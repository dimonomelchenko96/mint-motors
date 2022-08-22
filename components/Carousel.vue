<template lang="pug">
VueSlickCarousel(v-bind="settings" @afterChange='change')

    div.carousel__block(v-for="i in 20")
        div.carousel__margin
            CarCardMarket

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
import CarCardMarket from '~/components/carCards/CarCardMarket';

export default {
	components: {
		VueSlickCarousel,
		CarCardMarket,
	},
	data() {
		return {
			settings: {
				centerMode: true,
				centerPadding: '30px',
				focusOnSelect: true,
				slidesToShow: 7,
				speed: 500,
				arrow: false,
				draggable: true,
			},
		};
	},
	methods: {
		log() {
			console.log(this.$refs);
		},
		change(prev) {
			console.log(prev);
		},
	},
	mounted() {},
};
</script>

<style lang="scss">
.carousel {
	&__margin {
		margin: 0 d(14);
	}

	&__block {
	}
	&__arrow {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: d(6);
		width: d(28);
		height: d(28);
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
.slick {
	&-prev,
	&-next {
		z-index: 100;
		&::before {
			display: none;
		}
		&:hover,
		&:focus {
			background: #ffffff;
		}
	}
	&-prev {
		left: d(54);
	}
	&-next {
		right: d(54);
	}
	&-current {
		border: 1px solid orange !important;
	}
}
</style>
