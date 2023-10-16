import { createApp } from "vue";
import App from "./App.vue";
import { VueQueryifyPlugin } from "./lib";

createApp(App)
	.use(VueQueryifyPlugin, {
		baseUrl: "https://jsonplaceholder.typicode.com",
	})
	.mount("#app");
