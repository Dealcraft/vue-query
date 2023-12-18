import { Logger } from "./Logger.ts";
import { LogLevel } from "./../constants/LogLevel.ts";

export type PluginOptions = {
	baseUrl?: string;
	logger?: Logger;
	logLevel?: LogLevel;
};
