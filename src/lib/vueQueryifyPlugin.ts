import { App } from "vue";
import { Plugin } from "./types/Plugin.ts";
import { PluginOptions } from "./types/PluginOptions.ts";
import { createQuery } from "./queryFactory.ts";
import { mergeDefaultOptions } from "./utils.ts";

export const VueQueryifyPlugin: Plugin = {
	install: (app: App, options: PluginOptions): void => {
		options = mergeDefaultOptions(options);
		app.config.globalProperties.$query = createQuery(options);
	},
};
