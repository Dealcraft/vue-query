import { createApp } from "vue";
import App from "./App.vue";
import { VueQueryfyPlugin } from "./lib";

createApp(App)
	.use(VueQueryfyPlugin, {
		baseUrl: "https://jsonplaceholder.typicode.com",
	})
	.mount("#app");
