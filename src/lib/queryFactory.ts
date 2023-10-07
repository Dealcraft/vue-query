import { PluginOptions } from "./types/PluginOptions.ts";
import { Query } from "./types/Query.ts";

export function createQuery(options: PluginOptions): Query {
	const get = async (route: string): Promise<string> => {
		const result: Response = await fetch(`${options.baseUrl}${route}`);

		if (result.headers.get("Content-Type")?.includes("application/json"))
			return await result.json();
		return await result.text();
	};

	return {
		get,
	};
}
