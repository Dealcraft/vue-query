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
			this.posts = await this.$query.post("/posts", {
				title: "Hello World",
				body: "This is a post",
			});
			this.posts = await this.$query.patch("/posts/1", {
				title: "Hello World",
				body: "This is a post",
			});
			this.posts = await this.$query.delete("/posts/1");
		},
	},

	created() {
		this.getPosts();
	},
});
</script>

<style scoped></style>
