<template lang="pug">
.characteristics-card
	.characteristics-card__top
		img.characteristics-card__img(src='../assets/img/car-market/Bmw.png')
		.characteristics-card__top-right
			.characteristics-card__start-production 1973
			h3.characteristics-card__brand {{model}}
			.characteristics-card__end-production 2002
	.characteristics-card__characteristics
		.characteristics-card__item
			.characteristics-card__parametr Power:
			.characteristics-card__value 320 hp
		.characteristics-card__item
			.characteristics-card__parametr Max speed:
			.characteristics-card__value 210 km/h
		.characteristics-card__item
			.characteristics-card__parametr Up to 100km/h:
			.characteristics-card__value 6.2 sec

</template>

<script>
export default {
    props: ['model'],
};
</script>

<style lang="scss" scoped>
.characteristics-card {
    &__top {
        display: flex;
    }
    &__img {
        margin-right: d(16);
        max-width: d(44);
        max-height: d(44);
        object-fit: contain;
    }
    &__start-production {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        font-size: d(16);
        line-height: d(20);
        letter-spacing: -0.02em;
        color: #ffffff;
        opacity: 0.25;
    }
    &__brand {
        font-family: 'Lexend';
        font-style: normal;
        font-weight: 600;
        font-size: d(20);
        line-height: d(42);
        display: flex;
        align-items: center;
        color: #ffffff;
    }
    &__end-production {
        font-family: 'Lexend';
        font-style: normal;
        font-weight: 600;
        font-size: d(20);
        line-height: d(25);
        color: #ffffff;
        opacity: 0.5;
    }
    &__characteristics {
        margin-top: d(16);
        padding: d(12);
        width: d(170);
        background: rgba(224, 237, 255, 0.05);
        backdrop-filter: blur(d(114));
        border-radius: d(8);
    }
    &__item {
        &:not(:last-child) {
            margin-bottom: d(16);
        }
    }
    &__parametr {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 15px;
        letter-spacing: 0.01em;
        color: rgba(217, 217, 217, 0.3);
    }
    &__value {
        margin-top: d(4);
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
        letter-spacing: 0.01em;
        color: #ffffff;
    }
}
</style>
