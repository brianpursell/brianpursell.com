import Vue from "vue";
import App from "./components/App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "es6-promise/auto";
import store from "./store";

library.add(faAngleUp);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false;

new Vue({
  el: "#app",
  store: store,
  render: h => h(App)
});
