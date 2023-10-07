import { App } from "vue";
import { PluginOptions } from "./PluginOptions.ts";

export type Plugin = {
	install(app: App, options?: PluginOptions): void;
};
