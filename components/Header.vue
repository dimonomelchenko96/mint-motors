<template lang="pug">
header.header
	nav
		.navigation(
			v-if="initialStatus"
		)
			.navigation__link
				nuxt-link(
					to="/"
					:class="{'active': $route.path === '/' }"
				).link__content
					include ../assets/svg/layout/home.svg
					p Home
			.navigation__link
				nuxt-link(
					to="world"
					:class="{'active': $route.path === '/world' }"
				).link__content
					include ../assets/svg/layout/world.svg
					p World
		.navigation(
			v-else
		)
			.bread-crumbs
				nuxt-link(
					v-for="el in firstBreadCrumbs"
					:to="el.to"
					v-if="homeOrWorld === el.show"
					:key="el.to"
				).bread-crumbs__link
					template
						.link__images(
							v-html="require(`~/assets/svg/layout/${el.show}.svg?raw`)"
						)
					p {{el.text}}
			span.slash /
			.bread-crumbs
				nuxt-link(
					v-for="el in secondBreadCrumbs"
					:to="el.to"
					v-if="secondParam === el.show"
					:key="el.to"
				).bread-crumbs__link
					template
						.link__image(
							v-html="require(`~/assets/svg/layout/bread-crumbs/${el.show}.svg?raw`)"
							:class="[secondParam === el.show ? el.modifier : '']"
						)
					p {{el.text}}
			template(
				v-if="thirdParam"
			)
				span.slash /
				p.track-day(
					v-if="trackNumber && secondParam === 'racing'"
				) Track day &#35{{trackNumber}}

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
		console.log(this.$route);
	},
	methods: {
		getRoouteParams(path) {
			const arrPath = path.split('/');

			console.log(this.$route);
			if (arrPath.length === 2) {
				if (arrPath[1] === '') {
					this.secondParam = '';
					this.thirdParam = '';
					this.trackNumber = '';
					this.initialStatus = true;
				} else if (arrPath[1] == 'world') {
					this.secondParam = '';
					this.thirdParam = '';
					this.trackNumber = '';
					this.initialStatus = true;
				} else this.initialStatus = false;
			} else {
				this.initialStatus = false;
				this.secondParam = '';
				this.thirdParam = '';
				this.trackNumber = '';
			}

			this.secondParam = arrPath[1];
			this.thirdParam = arrPath[2];
			this.trackNumber = arrPath[2];
		},
	},
	data() {
		return {
			balance: 98989.65,
			trackNumber: '',
			initialStatus: true,
			homeOrWorld: 'home',
			secondParam: '',
			thirdParam: '',
			carsArray: ['Audi', 'BMW', 'Porshe', 'Lexus', 'Toyota'],
			firstBreadCrumbs: [
				{ to: '/', text: 'Home', show: 'home' },
				{ to: '/world', text: 'World', show: 'world' },
			],
			secondBreadCrumbs: [
				{
					to: '/garage',
					text: 'Garage',
					show: 'garage',
					modifier: 'link__image_garage',
				},
				{
					to: '/market',
					text: 'NFT Car Market',
					show: 'market',
					modifier: 'link__image_market',
				},
				{
					to: '/finance',
					text: 'Finance',
					show: 'finance',
					modifier: 'link__image_finance',
				},
				{
					to: '/racing',
					text: 'Racing',
					show: 'racing',
					modifier: 'link__image_racing',
				},
			],
		};
	},
};
</script>

<style lang="scss" scoped>
.header {
	display: flex;
	justify-content: space-between;
	z-index: 100;
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

				&.active {
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

		.slash {
			color: rgba(255, 255, 255, 0.3);
			margin-right: d(16);
			line-height: 42px;
		}
		.bread-crumbs {
			margin-right: d(16);

			&__link {
				display: flex;
				justify-content: center;
				align-items: center;

				.link__images {
					margin-right: d(9);
					svg {
						width: d(14);
						height: d(14);
						margin-right: d(9);

						path {
							fill: #fff;
							margin-right: d(100);
						}
					}
				}

				p {
					font-family: 'Zen Dots';
					font-style: normal;
					font-weight: 400;
					font-size: d(14);
					line-height: d(42);
					color: #ffffff;
				}

				.link__image {
					display: flex;
					justify-content: center;
					align-items: center;
					width: d(28);
					height: d(28);
					border-radius: 50%;
					margin-right: d(16);

					svg {
						margin-right: 0;
						path {
							fill: #000;
						}
					}

					&_garage {
						background: #e05d54;
						svg {
							width: d(13);
							height: d(13);
						}
					}
					&_market {
						background: #fced6d;
						svg {
							width: d(11);
							height: d(11);
						}
					}
					&_racing {
						background: #fff;
						svg {
							width: d(11);
							height: d(11);
						}
					}
					&_finance {
						background: #6dfcc8;
						svg {
							width: d(14);
							height: d(11);
						}
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

	.track-day {
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
