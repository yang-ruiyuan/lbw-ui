import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Antd from "ant-design-vue/es";
// 主题样式
import "./assets/less/theme.less";
import "ant-design-vue/dist/antd.css"; // or 'ant-design-vue/dist/antd.less'

const app = createApp(App);
app.use(Antd);
app.use(store);
app.use(router);
app.mount("#app");
