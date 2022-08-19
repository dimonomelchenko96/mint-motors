<template lang="pug">
.market
	.market__car-characteristics
		CarCharacteristicsBlock(
			:model="model"
		)
	.market__car-card
		CarCardMarket

</template>

<script>
import CarCharacteristicsBlock from '~/components/CarCharacteristicsBlock';
import CarCardMarket from '../../components/CarCards/CarCardMarket';

export default {
    name: 'Market-brand',
    data() {
        return {
            model: '',
        };
    },
    mounted() {
        this.model = this.$route.params.brand;
    },
    components: {
        CarCharacteristicsBlock,
		CarCardMarket,
    },
};
</script>

<style lang="scss" scoped>
.market {
    height: calc(var(--vh) * 100);
    position: relative;
    &__car-characteristics {
        position: absolute;
        top: d(78);
    }

    &__car-card {
        position: absolute;
        top: 50%;
        left: 50%;
    }
}
</style>
