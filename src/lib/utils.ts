import { PluginOptions } from "./types/PluginOptions.ts";
import { LogLevel } from "./constants/LogLevel.ts";
import { Logger } from "./types/Logger.ts";

export const defaultOptions = {
	logger: console,
	logLevel: LogLevel.WARN,
};

export type DefaultMergedOptions = PluginOptions &
	Required<{
		logger: Logger;
		logLevel: LogLevel;
	}>;

export function mergeDefaultOptions(
	options: PluginOptions
): DefaultMergedOptions {
	return { ...defaultOptions, ...options };
}
