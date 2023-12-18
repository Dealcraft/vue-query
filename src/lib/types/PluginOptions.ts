import { Logger } from "./Logger.ts";
import { LogLevel } from "./../constants/LogLevel.ts";

export type PluginOptions = {
	baseUrl?: string;
	maxLoadingTime?: number;
	logger?: Logger;
	logLevel?: LogLevel;
};
