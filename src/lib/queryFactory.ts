import { PluginOptions } from "./types/PluginOptions.ts";
import { Query } from "./types/Query.ts";
import { QueryRunner } from "./QueryClass.ts";

export function createQuery(options: PluginOptions): Query {
	return new QueryRunner(options);
}
