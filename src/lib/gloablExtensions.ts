import { Query } from "./types/Query.ts";

declare module "@vue/runtime-core" {
	interface ComponentCustomProperties {
		$query: Query;
	}
}
