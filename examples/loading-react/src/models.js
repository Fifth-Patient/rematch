const asyncDelay = (ms) => new Promise((r) => setTimeout(r, ms))

export const count = {
	state: 0,
	reducers: {
		addOne(s) {
			return s + 1
		},
	},
	effects: {
		async submit() {
			// mocking the delay of an effect
			await asyncDelay(3000)
			this.addOne()
		},
	},
}
