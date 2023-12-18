import { Query } from "./types/Query.ts";
import { PluginOptions } from "./types/PluginOptions.ts";
import { HTTPVerb } from "./constants/HTTPVerb.ts";

export class QueryRunner implements Query {
	private options: PluginOptions;
	constructor(options: PluginOptions) {
		this.options = options;
	}

	async request<T = unknown>(
		method: HTTPVerb,
		route: string,
		body?: object | string
	): Promise<T> {
		const fetchInit: RequestInit = {
			method,
		};

		if (body) {
			if (typeof body === "string") fetchInit.body = body;
			if (typeof body === "object") fetchInit.body = JSON.stringify(body);
		}

		const result: Response = await fetch(
			`${this.options.baseUrl}${route}`,
			fetchInit
		);

		return result.json();
	}

	get<T = unknown>(route: string): Promise<T> {
		return this.request<T>(HTTPVerb.GET, route);
	}

	post<T = unknown>(route: string, body?: object | string): Promise<T> {
		return this.request<T>(HTTPVerb.POST, route, body);
	}
}
