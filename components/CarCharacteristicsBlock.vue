<template lang="pug">
.card
	.card__top
		img.card__img(src='../assets/img/car-market/Bmw.png')
		.card__top-right
			.card__start-production {{data.startProd}}
			h3.card__brand {{data.brand}}
			.card__end-production {{data.endProd}}
	.card__characteristics
		.card__item(
			v-for="(item, i) in data.params"
		)
			.card__parameter {{item.characteristic}}
			.card__value-block 
				.card__value(
					:class="`card__value_${data.state}`"
				) {{item.value}}
				.card__persent(
					v-if="data.state === 'crashed'"
				) {{item.percent}} 
	MainButton(
		buttonText="Start Race"
		buttonIcon="testdrive"
		theme='blue'
	)

</template>

<script>
import MainButton from '~/components/button/MainButton';

export default {
	props: ['data'],
	components: {
		MainButton,
	},
};
</script>

<style lang="scss" scoped>
<<<<<<< HEAD
.characteristics {
=======
.card {
>>>>>>> dev_omelchenko
	&__top {
		display: flex;
	}
	&__img {
		margin-right: d(16);
		max-width: d(44);
		width: 100%;
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
	&__parameter {
		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 600;
		font-size: d(12);
		line-height: d(15);
		letter-spacing: 0.01em;
		color: rgba(217, 217, 217, 0.3);
	}
	&__value {
		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 600;
		font-size: d(14);
		line-height: d(17);
		letter-spacing: 0.01em;
		&-block {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-top: d(4);
		}
		&_new {
			color: #ffffff;
		}
		&_crashed {
			color: #fced6d;
		}
		&_broken {
			color: #e05d54;
		}
	}
	&__persent {
		font-family: 'Zen Dots';
		font-style: normal;
		font-weight: 400;
		font-size: d(10);
		letter-spacing: 0.01em;
		color: #e05d54;
	}
}
</style>
