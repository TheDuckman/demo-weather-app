import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
import "@fontsource/inter/600.css";

const app = createApp(App);

// store
const pinia = createPinia();
app.use(pinia);

app.mount("#app");
