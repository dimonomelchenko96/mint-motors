<template lang="pug">
.bread-crumbs
	nuxt-link(
		v-for="el in firstBreadCrumbs"
		:to="el.to"
		v-if="homeOrWorld === el.show"
		:key="el.to"
	).bread-crumbs__link.first-bread-crumbs
		.bread-crumbs__image.first-bread-crumbs__image(
			v-html="require(`~/assets/svg/layout/${el.show}.svg?raw`)"
		)
		p {{el.text}}
	span.bread-crumbs__slash /
	nuxt-link(
		v-for="el in secondBreadCrumbs"
		:to="el.to"
		v-if="secondParam === el.show"
		:key="el.to"
	).bread-crumbs__link
		.bread-crumbs__image(
			v-html="require(`~/assets/svg/layout/bread-crumbs/${el.show}.svg?raw`)"
			:class="[secondParam === el.show ? el.modifier : '']"
		)
		p {{el.text}}
	template(
		v-if="thirdParam"
	)
		span.bread-crumbs__slash /
		p.bread-crumbs__track-day(
			v-if="trackNumber && secondParam === 'racing'"
		) Track day &#35{{trackNumber}}
</template>

<script>
export default {
	name: 'BreadCrumbs',
	props: [
		'firstBreadCrumbs',
		'secondBreadCrumbs',
		'homeOrWorld',
		'secondParam',
		'thirdParam',
		'trackNumber',
	],
};
</script>

<style lang="scss" scoped>
.bread-crumbs {
	display: flex;
	align-items: center;

	&__slash {
		color: rgba(255, 255, 255, 0.3);
		margin-right: d(16);
	}

	&__image {
		display: flex;
		justify-content: center;
		align-items: center;
		width: d(28);
		height: d(28);
		border-radius: 50%;
		margin-right: d(16);

		&.first-bread-crumbs__image {
			margin-right: d(1.88);

			::v-deep {
				svg {
					width: d(14);
					height: d(14);
				}
			}
		}

		&_garage {
			background: #e05d54;
			::v-deep {
				svg {
					width: d(14);
					height: d(10);
				}
			}
		}
		&_market {
			background: #fced6d;
			::v-deep {
				svg {
					width: d(14);
					height: d(14);
				}
			}
		}
		&_racing {
			background: #fff;

			::v-deep {
				svg {
					width: d(26);
					height: d(14);
				}
			}
		}
		&_finance {
			background: #6dfcc8;
			::v-deep {
				svg {
					width: d(18);
					height: d(18);
				}
			}
		}
	}
	&__link {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-left: d(6);
		margin-right: d(16);
		height: d(42);

		p {
			font-family: 'Zen Dots';
			font-style: normal;
			font-weight: 400;
			font-size: d(14);
			color: #ffffff;
			margin-top: d(2);
		}
	}

	&__track-day {
		font-family: 'Zen Dots';
		font-style: normal;
		font-weight: 400;
		font-size: d(14);
		line-height: d(42);
		color: #ffffff;
	}
}
</style>

<
