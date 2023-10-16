<template>
	<div>
		<p>{{ typeof posts }}</p>
		<pre>{{ posts }}</pre>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "App",
	data() {
		return {
			posts: [],
		};
	},

	methods: {
		async getPosts() {
			this.posts = await this.$query.get("/posts");
		},
	},

	created() {
		this.getPosts();
	},
});
</script>

<style scoped></style>
