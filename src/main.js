import { setTimeout } from 'core-js';
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
  //good practise is to use actions between component and mutations
  //because mutation is syncronous and action are asyncronous
  //we can call dispatch() inside of actions to call other action
  //thats sound good when using http requests,
  //we also cann use getters and state inside actions
  actions: {
    increment(context) {
      setTimeout(function () {
        context.commit('increment');
      }, 2000);
    },
    increase(context, payload) {
      context.commit('increase', payload);
    },
  },
  //getters are like methods but we are using them in mutations
  //getters get 2 arguments first-state, second getter,
  //we can use getter in any component in whole app
  getters: {
    finalCounter(state) {
      return state.counter;
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
