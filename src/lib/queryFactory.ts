import { PluginOptions } from "./types/PluginOptions.ts";
import { Query } from "./types/Query.ts";

export function createQuery(options: PluginOptions): Query {
	async function request<ResponseType = unknown>(
		method: "GET" | "POST",
		route: string,
		body?: object | string
	): Promise<ResponseType> {
		const fetchInit: RequestInit = {
			method,
		};

		if (body) {
			if (typeof body === "object") fetchInit.body = JSON.stringify(body);
			if (typeof body === "string") fetchInit.body = body;
		}

		const result: Response = await fetch(
			`${options.baseUrl}${route}`,
			fetchInit
		);

		return result.json();
	}

	return {
		get: <ResponseType = unknown>(route: string): Promise<ResponseType> =>
			request<ResponseType>("GET", route),
		post: <ResponseType = unknown>(
			route: string,
			body: object | string
		): Promise<ResponseType> => request<ResponseType>("POST", route, body),
	};
}
