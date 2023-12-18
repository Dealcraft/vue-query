export type Query = {
	get<T = unknown>(route: string): Promise<T>;
	post<T = unknown>(route: string, body: object | string): Promise<T>;
	patch<T = unknown>(route: string, body: object | string): Promise<T>;
	put<T = unknown>(route: string, body: object | string): Promise<T>;
	delete<T = unknown>(route: string): Promise<T>;
};
