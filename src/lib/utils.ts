import { PluginOptions } from "./types/PluginOptions.ts";
import { LogLevel } from "./constants/LogLevel.ts";

export function mergeDefaultOptions(options: PluginOptions): PluginOptions {
	const defaultOptions: PluginOptions = {
		logger: console,
		logLevel: LogLevel.WARN,
	};

	return { ...defaultOptions, ...options };
}
