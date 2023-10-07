import { App, Plugin } from "vue";

export const VueQueryPlugin: Plugin = {
	install(app: App) {
		app.config.globalProperties.$query = {
			get() {
				return "Hallo";
			},
		};
	},
};
