import Vue from "vue";
import App from "./App.vue";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faGripVertical,
  faMagnifyingGlass,
  faWineGlass,
  faUsers,
  faCog,
  faPallet,
  faDashboard,
  faGlobe,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import "./assets/tailwind.css";

/* add icons to the library */
library.add(
  faGripVertical,
  faMagnifyingGlass,
  faWineGlass,
  faUsers,
  faCog,
  faPallet,
  faDashboard,
  faGlobe,
  faPhone
);

/* add font awesome icon component */
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
