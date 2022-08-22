<template lang="pug">
header.header
	nav
		.navigation(
			v-if="initialStatus"
		)
			nuxt-link(
				to="/"
				:class="{'active': $route.path === '/' }"
			).navigation__link
				include ../assets/svg/layout/home.svg
				p Home
			nuxt-link(
				to="world"
				:class="{'active': $route.path === '/world' }"
			).navigation__link
				include ../assets/svg/layout/world.svg
				p World
		BreadCrumbs(
			v-else
			:firstBreadCrumbs="firstBreadCrumbs"
			:secondBreadCrumbs="secondBreadCrumbs"
			:homeOrWorld="homeOrWorld"
			:secondParam="secondParam"
			:thirdParam="thirdParam"
			:trackNumber="trackNumber"
		)
	BalanceHeader(
		:balance = "balance",
	)
</template>

<script>
import BalanceHeader from '~/components/ui/BalanceHeader';
import BreadCrumbs from '~/components/ui/BreadCrumbs';

export default {
	name: 'Header',
	components: {
		BalanceHeader,
		BreadCrumbs,
	},
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
				if (arrPath[1] === '') this.initialStatus = true;
				else if (arrPath[1] == 'world') this.initialStatus = true;
				else this.initialStatus = false;
			}

			this.secondParam = '';
			this.thirdParam = '';
			this.trackNumber = '';

			this.secondParam = arrPath[1];
			this.thirdParam = arrPath[2];
			this.trackNumber = arrPath[2];
		},
	},
	data() {
		return {
			balance: 98989.65898,
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
					modifier: 'bread-crumbs__image_garage',
				},
				{
					to: '/market',
					text: 'NFT Car Market',
					show: 'market',
					modifier: 'bread-crumbs__image_market',
				},
				{
					to: '/finance',
					text: 'Finance',
					show: 'finance',
					modifier: 'bread-crumbs__image_finance',
				},
				{
					to: '/racing',
					text: 'Racing',
					show: 'racing',
					modifier: 'bread-crumbs__image_racing',
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
}
</style>

<
