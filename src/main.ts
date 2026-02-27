import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import AnimateOnScroll from 'primevue/animateonscroll';
// @ts-ignore
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faGithub,
  faLinkedin,
  faBluesky,
  faGitlab,
  faGitAlt,
} from '@fortawesome/free-brands-svg-icons';
import {
  faAddressCard,
  faSpaghettiMonsterFlying,
} from '@fortawesome/free-solid-svg-icons';
// @ts-ignore
import router from './router/index.js';
// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

library.add(faGithub);
library.add(faLinkedin);
library.add(faBluesky);
library.add(faGitlab);
library.add(faGitAlt);
library.add(faAddressCard);
library.add(faSpaghettiMonsterFlying);

const vuetify = createVuetify({
  components,
  directives,
});

import 'primevue/resources/themes/viva-dark/theme.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import 'animate.css';

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.directive('animateonscroll', AnimateOnScroll);
app.use(vuetify);
app.use(PrimeVue);
app.use(router);
app.mount('#app');
