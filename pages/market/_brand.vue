<template lang="pug">
.market
	.market__car-characteristics
		CarCharacteristicsBlock(
			:model="model"
		)


</template>

<script>
import CarCharacteristicsBlock from '~/components/CarCharacteristicsBlock';

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
        left: d(38);
    }
}
</style>
