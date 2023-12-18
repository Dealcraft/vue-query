import { Query } from "./types/Query.ts";

declare module "vue" {
	interface ComponentCustomProperties {
		$query: Query;
	}
}
