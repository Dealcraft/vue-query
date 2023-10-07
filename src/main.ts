import { createApp } from "vue";
import App from "./App.vue";
import { VueQueryPlugin } from "./lib";

createApp(App)
	.use(VueQueryPlugin, { baseUrl: "https://jsonplaceholder.typicode.com" })
	.mount("#app");
