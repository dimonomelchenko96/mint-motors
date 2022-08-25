export const state = () => ({
	isPaid: false,
});

export const mutations = {
	isPaidToggle(state) {
		state.isPaid = !state.isPaid;
	},
};
