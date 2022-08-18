<template lang="pug">
header.header
	nav.navigation
		.navigation__link
			nuxt-link(to="/").link__content
					include ../assets/svg/layout/house.svg
					p Home
		.navigation__link
			nuxt-link(to="world").link__content
					include ../assets/svg/layout/globe.svg
					p World
	.balance
		include ../assets/svg/layout/frame.svg
		p {{balance}} mtr

</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            balance: 98989.65,
        };
    },
};
</script>

<style lang="scss" scoped>
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
