import "./assets/backend/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Icon from "uikit/dist/js/uikit-icons.js";
import UIkit from "uikit";
import "uikit/dist/js/uikit.min.js";
import "uikit/dist/css/uikit.min.css";

UIkit.use(Icon);
const app = createApp(App);

app.use(router);

app.mount("#app");
