<template lang="pug">
VueSlickCarousel(v-bind="settings" @beforeChange='change' ref="carousel")
	div.carousel__block(v-for="(elem, i) in data" v-if='data.length >= 8')
		div.carousel__margin
			CarCardSlider(
					:key="i"
					:status="activeSlide === i ? data[activeSlide].status : passiveStatus[data[i].status]"
				)

	div.carousel__block(v-for="(elem, i) in 15" v-if="data.length < 8")
		div.carousel__margin
			CarCardSlider(
					v-if="i < data.length"
					:key="i"
					:status="activeSlide === i ? data[activeSlide].status : passiveStatus[data[i].status]"
				)
			CarCardSlider( 	
					v-else
					:status="'empty'"
				)

			
	template(#prevArrow)
		button(class="carousel__arrow" :disabled="data.length < 8 ? activeSlide === 0 : false") 
			img(src="@/assets/svg/carousel-arrow.svg" alt="arrow-left")

	template(#nextArrow)
		button(class="carousel__arrow carousel__arrow-right" :disabled="data.length < 8 ? activeSlide === data.length - 1 : false")
			img(src="@/assets/svg/carousel-arrow.svg" alt="arrow-right")
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
import CarCardMarket from '~/components/carCards/CarCardMarket';
import CarCardSlider from '~/components/carCards/CarCardSlider';
import EmptyCard from '~/components/ui/EmptyCard';

export default {
	components: {
		VueSlickCarousel,
		CarCardMarket,
		CarCardSlider,
		EmptyCard,
	},
	props: ['data'],
	data() {
		return {
			activeSlide: 0,
			transformData: null,
			passiveStatus: {
				normal: 'passive',
				crashed: 'passive',
				broken: 'passive-broken',
				active: 'passive-market',
			},

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
			this.$emit('setActiveCard', next);
		},
		disableEmptySlide() {
			if (this.data.length < 8) {
				let slides = document.querySelectorAll('.slick-slide');
				slides.forEach(item => {
					if (
						item.dataset.index >= this.data.length ||
						item.dataset.index < 0
					) {
						item.style.pointerEvents = 'none';
					}
				});
			}
		},
	},
	mounted() {
		this.disableEmptySlide();
		this.transformData = this.data;

		// if (this.data.length < 8) {
		// 	this.transformData = [...this.data];
		// 	let emptyLength = 15 - this.data.length;

		// 	for (let i = 0; i < emptyLength; i++) {
		// 		this.transformData.push({ status: 'empty' });
		// 	}
		// } else {
		// 	this.transformData = [...this.data];
		// }
		// console.log(this.transformData);
	},
};
</script>

<style lang="scss" scoped>
.carousel {
	&__margin {
		margin: 0 d(5);
		display: flex;
		justify-content: center;
	}

	&__empty {
		margin-top: d(38);
		// width: 100%;
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
