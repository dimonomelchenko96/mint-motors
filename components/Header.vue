<template lang="pug">
header.header
	nav
		.navigation(
			v-if="initialStatus"
		)
			.navigation__link
				nuxt-link(to="/" ).link__content
						include ../assets/svg/layout/house.svg
						p Home
			.navigation__link
				nuxt-link(to="world" ).link__content
						include ../assets/svg/layout/globe.svg
						p World
		.navigation(
			v-else
		)
			.bread-crumbs
				nuxt-link(to="/" v-if="homeOrWorld === 'home'")
					include ../assets/svg/layout/house.svg
					p {{homeOrWorld}}
				nuxt-link(to="/world" v-else)
					include ../assets/svg/layout/globe.svg
					p {{homeOrWorld}}
			span.slash /
			.bread-crumbs
				nuxt-link(:to="secondParam" v-if="secondParam === 'garage'")
					.bread-crumbs__image.bread-crumbs__image_garage
						include ../assets/svg/layout/bread-crumbs/garage.svg
					p Garage
				nuxt-link(:to="secondParam" v-else-if="secondParam === 'market'")
					.bread-crumbs__image.bread-crumbs__image_market
						include ../assets/svg/layout/bread-crumbs/market.svg
					p NFT Car Market
				nuxt-link(:to="secondParam" v-else-if="secondParam === 'racing'")
					.bread-crumbs__image.bread-crumbs__image_racing
						include ../assets/svg/layout/bread-crumbs/racing.svg
					p Racing
				nuxt-link(:to="secondParam" v-else="secondParam === 'finance'")
					.bread-crumbs__image.bread-crumbs__image_finance
						include ../assets/svg/layout/bread-crumbs/finance.svg
					p Finance
	.balance
		include ../assets/svg/layout/frame.svg
		p {{balance}} mtr

</template>

<script>
export default {
    name: 'Header',
    watch: {
        $route(current, prev) {
            this.getRoouteParams(current.path);
        },
    },
    mounted() {
        this.getRoouteParams(this.$route.path);
    },
    methods: {
        getRoouteParams(path) {
            const arrPath = path.split('/');

            if (arrPath.length === 2) {
                if (arrPath[1] === '') {
                    this.secondParam = '';
                    this.initialStatus = true;
                } else if (arrPath[1] == 'world') {
                    this.secondParam = '';
                    this.initialStatus = true;
                } else this.initialStatus = false;
            }

            this.secondParam = arrPath[1];
        },
    },
    data() {
        return {
            balance: 98989.65,
            initialStatus: true,
            homeOrWorld: 'home',
            secondParam: '',
        };
    },
};
</script>

<style lang="scss" scoped>
a.nuxt-link-exact-active {
    background: rgba(0, 0, 0, 0.3);
    border-radius: d(8);
    svg {
        path {
            fill: #fff;
        }
    }
    p {
        color: #fff;
    }
}
.header {
    display: flex;
    justify-content: space-between;
    .navigation {
        display: flex;

        &__link {
            margin-right: d(16);
            .link__content {
                width: d(98);
                height: d(42);
                display: flex;
                justify-content: center;
                align-items: center;

                svg {
                    width: d(14);
                    height: d(14);
                    margin-right: d(9);
                    path {
                        fill: rgba(255, 255, 255, 0.3);
                    }
                }

                p {
                    font-family: 'Zen Dots';
                    font-style: normal;
                    font-weight: 400;
                    font-size: d(14);
                    color: rgba(255, 255, 255, 0.3);
                }

                &:hover {
                }
            }
        }
    }

    .balance {
        display: flex;
        align-items: center;

        svg {
            width: d(28);
            height: d(28);
            margin-right: d(8);
        }

        p {
            font-family: 'Zen Dots';
            font-style: normal;
            font-weight: 400;
            font-size: d(12);
            color: #fff;
        }
    }
}
</style>
