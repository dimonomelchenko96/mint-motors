<template lang="pug">
.finance
	//- p Finance
	CardBalance
</template>

<script>
import CardBalance from '~/components/finance/CardBalance';

export default {
    name: 'Finance',

    components: {
        CardBalance
    }
};
</script>

<style lang="scss" scoped>
.finance {
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
    // p {
    //     text-align: center;
    //     padding: 200px;
    //     font-size: 70px;
    //     color: #fff;
    // }
}
</style>
