import { PluginOptions } from "./types/PluginOptions.ts";
import { Query } from "./types/Query.ts";
import { QueryRunner } from "./QueryRunner.ts";
import { mergeDefaultOptions } from "./utils.ts";

export function createQuery(options: PluginOptions): Query {
	const mergedOptions = mergeDefaultOptions(options);
	return new QueryRunner(mergedOptions);
}
