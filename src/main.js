import Vue from 'vue';
import App from './App.vue';

import VueResource from 'vue-resource';

// import tailwind css
import '@/assets/css/tailwind.css';

// import baloon css
import 'balloon-css';

// import prism editor
import 'prismjs/components/prism-json.js';
import VuePrismEditor from 'vue-prism-editor';
import 'vue-prism-editor/dist/VuePrismEditor.css';

// import font-awesome icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faHamburger,
  faBookOpen,
  faHeart,
  faComments,
  faCircle,
  faArrowLeft,
  faArrowRight,
  faBars,
} from '@fortawesome/free-solid-svg-icons';
import {
  faTwitter,
  faGithub,
  faTwitch,
  faVuejs,
  faLinkedin,
  faDiscord,
  faDev,
} from '@fortawesome/free-brands-svg-icons';

// import modals
import VModal from 'vue-js-modal';
import router from './router.js';

Vue.use(VueResource);
Vue.component('prism-editor', VuePrismEditor);

library.add(
  faVuejs,
  faGithub,
  faTwitter,
  faTwitch,
  faLinkedin,
  faDiscord,
  faDev,
  faBars,
  faBookOpen,
  faHeart,
  faComments,
  faCircle,
  faArrowLeft,
  faArrowRight
);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;
Vue.use(VModal);

// create global event bus
Vue.prototype.$eventHub = new Vue();

new Vue({
  el: '#app',
  router,
  render: h => h(App),
});