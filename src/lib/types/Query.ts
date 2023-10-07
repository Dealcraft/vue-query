export type Query = {
	get(route: string): Promise<string>;
};
