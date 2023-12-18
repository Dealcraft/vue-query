import { Query } from "./types/Query.ts";
import { PluginOptions } from "./types/PluginOptions.ts";
import { HTTPVerb } from "./constants/HTTPVerb.ts";
import { loggerService } from "./loggerService.ts";
import { Logger } from "./types/Logger.ts";
import { DefaultMergedOptions } from "./utils.ts";

export class QueryRunner implements Query {
	private options: PluginOptions;
	private logger: Logger;
	constructor(options: DefaultMergedOptions) {
		this.options = options;
		this.logger = new loggerService(options.logLevel, options.logger);
		this.logger.log("Logger initialized");
		this.logger.log("QueryRunner initialized");
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

		this.logger.debug(`Constructing full URL for ${route}`);
		const fullUrl: string = `${this.options.baseUrl}${route}`;

		let timeout: NodeJS.Timeout | null = null;
		if (this.options.maxLoadingTime) {
			const abortController = new AbortController();
			this.logger.debug("AbortController initialized");
			timeout = setTimeout(() => {
				abortController.abort();
			}, this.options.maxLoadingTime);
			this.logger.debug(`Started timeout ${this.options.maxLoadingTime}ms`);
			fetchInit.signal = abortController.signal;
		}

		this.logger.log(`Sending request to ${fullUrl}`);
		const result: Response = await fetch(fullUrl, fetchInit);
		if (timeout) clearTimeout(timeout);

		const json = await result.json();

		this.logger.debug(`Response status: ${result.status}`);
		this.logger.debug("Response", json);

		return json;
	}

	async get<T = unknown>(route: string): Promise<T> {
		this.logger.log(`GET ${route}`);
		return this.request<T>(HTTPVerb.GET, route);
	}

	async post<T = unknown>(route: string, body?: object | string): Promise<T> {
		this.logger.log(`POST ${route}`);
		return this.request<T>(HTTPVerb.POST, route, body);
	}

	async patch<T = unknown>(route: string, body?: object | string): Promise<T> {
		this.logger.log(`PATCH ${route}`);
		return this.request<T>(HTTPVerb.PATCH, route, body);
	}

	async delete<T = unknown>(route: string): Promise<T> {
		this.logger.log(`DELETE ${route}`);
		return this.request<T>(HTTPVerb.DELETE, route);
	}

	async put<T = unknown>(route: string, body?: object | string): Promise<T> {
		this.logger.log(`PUT ${route}`);
		return this.request<T>(HTTPVerb.PUT, route, body);
	}
}
