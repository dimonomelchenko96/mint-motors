<template lang="pug">
.device
	div(
		v-for="dev in devices"
		:key="dev"
		:class="'device__' + dev"
		v-if="device === dev || device === null"
	)
		slot(:name="dev")
</template>

<script>
export default {
	data() {
		return {
			device: null,
			devices: ["mob", "desc"],
		};
	},
	methods: {
		setDevice() {
			if (this.isDesctop) {
				this.device = "desc";
			} else {
				this.device = "mob";
			}
		},
	},
	mounted() {
		this.setDevice();
		window.addEventListener("resize", this.setDevice);
	},
	beforeDestroy() {
		window.removeEventListener("resize", this.setDevice);
	},
};
</script>

<style lang="scss" scoped>
.device {
	&__mob {
		display: none;
	}

	&__desc {
		display: block;
	}
}

@include mob {
	.device {
		&__mob {
			display: block;
		}
	
		&__desc {
			display: none;
		}
	}
}
</style>
