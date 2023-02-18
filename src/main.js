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
  //commit built in method
  mutations: {
    increment(state) {
      state.counter = state.counter + 1;
    },
    increase(state, payload) {
      state.counter = state.counter + payload.value;
    },
  },
  //getters are like methods but we are using them in mutations
  //getters get 2 arguments first-state, second getter,
  //we can use getter in any component in whole app
  getters: {
    finalCounter(state) {
      return state.counter * 6;
    },
    normalizedCounter(_, getters) {
      const finalCounter = getters.finalCounter;
      if (finalCounter < 0) {
        return 0;
      }
      if (finalCounter > 100) {
        return 100;
      }
      return finalCounter;
    },
  },
});
const app = createApp(App);

app.use(store);

app.mount('#app');
