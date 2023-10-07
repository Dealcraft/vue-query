import { AuthenticationStrategy } from "../strategies/AuthenticationStrategy.ts";

export type PluginOptions = {
	baseUrl?: string;
	authentication?: AuthenticationStrategy;
};
