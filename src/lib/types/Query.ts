export type Query = {
	get<T = unknown>(route: string): Promise<T>;
	post<T = unknown>(route: string, body: object | string): Promise<T>;
};
