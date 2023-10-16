export type Query = {
	get<ResponseType = unknown>(route: string): Promise<ResponseType>;
	post<ResponseType = unknown>(
		route: string,
		body: object | string
	): Promise<ResponseType>;
};
