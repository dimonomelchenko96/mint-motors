<template lang="pug">
button.button(
    :class="`button_${theme}`"
)
    .button__icon(
        v-if="buttonIcon" 
    )
        .button__icon(
            v-if="buttonIcon" 
        )
            template
                div.button__icon-inner(
                    v-html="require(`../../assets/svg/button/${buttonIcon}.svg?raw`)"
                )
        .button__text {{ buttonText }}
</template>

<script>
export default {
	props: ['buttonIcon', 'buttonText', 'theme'],
};
</script>

<style lang="scss" scoped>
.button {
	padding: d(15) 0;
	width: 100%;
	display: flex;
	justify-content: center;
	border-radius: d(10);
	background: #f7f7f7;
	color: #000000;
	&_gray {
		background: #232323;
		color: #ffffff;
	}
	&_blue {
		background: #001aff;
		color: #ffffff;
	}
	&_pink {
		background: $pink;
		color: #000;
	}
	&__text {
		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 600;
		font-size: d(16);
		line-height: 100%;
		display: flex;
		align-items: center;
		text-transform: uppercase;
	}
	&__icon {
		margin-right: d(10);
		&-inner {
			width: d(16);
			height: d(16);
			svg {
				width: 100%;
			}
		}
	}
}
</style>
