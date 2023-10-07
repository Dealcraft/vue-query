import Component from "../components/Component.vue";
import { App } from "vue";

export const VuePluginTemplate = {
	install: (app: App) => {
		app.component("Component", Component);
	},
};
