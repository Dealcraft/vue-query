import { PluginOptions } from "./types/PluginOptions.ts";
import { LogLevel } from "./constants/LogLevel.ts";

export const defaultOptions: PluginOptions = {
	logger: console,
	logLevel: LogLevel.WARN,
};

export function mergeDefaultOptions(options: PluginOptions): PluginOptions {
	return { ...defaultOptions, ...options };
}
