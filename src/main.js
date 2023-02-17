import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

// we can create global state(store) with help of vuex and use it
//through entire app,
const store = createStore({
  state() {
    return {
      counter: 0,
    };
  },
  //we have acces on mutation in whole app with
  //commit uilt in method
  mutations: {
    increment(state) {
      state.counter = state.counter + 1;
    },
  },
});
const app = createApp(App);

app.use(store);

app.mount('#app');
