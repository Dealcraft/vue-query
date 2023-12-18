import { AuthenticationStrategy } from "../strategies/AuthenticationStrategy.ts";
import { Logger } from "./Logger.ts";
import { LogLevel } from "./LogLevel.ts";

export type PluginOptions = {
	baseUrl?: string;
	authentication?: AuthenticationStrategy;
	logger?: Logger;
	logLevel?: LogLevel;
};
