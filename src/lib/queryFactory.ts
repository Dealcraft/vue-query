import { PluginOptions } from "./types/PluginOptions.ts";
import { Query } from "./types/Query.ts";

export function createQuery(options: PluginOptions): Query {
	const get = (route: string): string => {
		return `${options.baseUrl}${route}`;
	};

	return {
		get,
	};
}
