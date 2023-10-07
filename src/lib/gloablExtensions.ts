import { Query } from "./types/Query.ts";

declare module "@vue/runtime-core" {
	export interface ComponentCustomProperties {
		$query: Query;
	}
}
