<template lang="pug">
VueSlickCarousel(v-bind="settings" @beforeChange='change' ref="carousel")
	div.carousel__block(v-for="(elem, i) in 15")
		div.carousel__margin
			CarCardMarket(
					v-if="i <= slideOffset"
					:key="i"
					:active="activeSlide === i"
				)
			CarCardGarage(
				v-else
				:active="false"
				:empty="true"
			)
			
	template(#prevArrow)
		button(class="carousel__arrow" :disabled="activeSlide === 0") 
			img(src="@/assets/svg/carousel-arrow.svg" alt="arrow-left")

	template(#nextArrow)
		button(class="carousel__arrow carousel__arrow-right" :disabled="activeSlide === slideOffset")
			img(src="@/assets/svg/carousel-arrow.svg" alt="arrow-right")
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
import CarCardMarket from '~/components/carCards/CarCardMarket';
import CarCardGarage from '~/components/carCards/CarCardGarage';

export default {
	components: {
		VueSlickCarousel,
		CarCardMarket,
		CarCardGarage,
	},
	watch: {
		// activeSlide(newValue, oldValue) {
		// 	if (newValue > this.slideOffset) {
		// 		this.$refs.carousel.prev();
		// 	}
		// },
	},
	data() {
		return {
			slideOffset: 4,
			activeSlide: 0,
			settings: {
				centerMode: true,
				centerPadding: '30px',
				focusOnSelect: true,
				slidesToShow: 7,
				speed: 500,
				arrow: false,
				draggable: false,
			},
		};
	},
	methods: {
		change(prev, next) {
			this.activeSlide = next;
		},
		disableEmptySlide() {
			let slides = document.querySelectorAll('.slick-slide');
			slides.forEach(item => {
				if (
					item.dataset.index > this.slideOffset ||
					item.dataset.index < 0
				) {
					item.style.pointerEvents = 'none';
				}
			});
		},
	},
	mounted() {
		this.disableEmptySlide();
	},
};
</script>

<style lang="scss" scoped>
.carousel {
	&__margin {
		margin: 0 d(5);
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
	&-prev {
		left: d(54);
	}
	&-next {
		right: d(54);
	}
	&-slide {
		cursor: pointer;
	}
}
</style>
