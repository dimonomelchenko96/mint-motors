<template lang="pug">
nuxt-link.brand-card(
	:to="`market/${brand}`"
	:class="{'link-disabled' : start}"
)
    .brand-card__amount
        .brand-card__amount-inner(
            :class="{'brand-card__amount-inner_upcoming' : start}"
        ) {{start ? start : amount > 9 ? amount : "0" + amount}}
    img.brand-card__img(
        :class="[start && 'opacity']"
        :src="require(`~/assets/img/car-market/${brand}.png`)"
        :alt='brand'
    )
    .brand-card__brand(
        :class="[start && 'opacity']"
    ) {{brand}}
</template>

<script>
export default {
    props: ['brand', 'amount', 'start'],
    data() {
        return {};
    },
};
</script>

<style lang="scss" scoped>
.brand-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: d(7) d(11) d(12);
    width: 100%;
    background: #201f23;
    border-radius: d(5);
    height: d(164);
    opacity: 1;
    &__amount {
        display: flex;
        justify-content: flex-end;
        &-inner {
            padding: 0 d(16);
            width: auto;
            font-family: 'Zen Dots';
            font-style: normal;
            font-weight: 400;
            font-size: d(10);
            text-align: center;
            line-height: d(20);
            letter-spacing: 0.01em;
            color: #ffffff;
            background: #000000;
            border-radius: d(15);
            &_upcoming {
                width: 100%;
                background: #e05d54;
                text-overflow: ellipsis;
            }
        }
    }
    &__brand {
        font-family: 'Zen Dots';
        font-style: normal;
        font-weight: 400;
        font-size: d(12);
        line-height: d(14);
        letter-spacing: 0.01em;
        color: rgba(255, 255, 255, 0.6);
    }
    &__img {
        display: block;
        align-self: center;
        max-height: 60%;
        max-width: 65%;
        object-fit: contain;
    }
}
.opacity {
    filter: grayscale(1);
    opacity: 0.3;
}
.link-disabled {
    pointer-events: none;
}
</style>
