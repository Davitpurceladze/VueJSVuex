import { setTimeout } from 'core-js';
import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

//create object to split logic for state
//this counterModule contains all data and logic what asosiated
//with counter
const counterModule = {
  state() {
    return {
      counter: 0,
    };
  },
  mutations: {
    increment(state) {
      state.counter = state.counter + 1;
    },
    increase(state, payload) {
      state.counter = state.counter + payload.value;
    },
  },
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
};

// we can create global state(store) with help of vuex and use it
//through entire app,
const store = createStore({
  //createStore has acces to modules: {} wich is object and we can
  //use same names as before to use dispatch and appGetters and so on
  //because by default, modules merged into store
  modules: {
    numbers: counterModule,
  },
  state() {
    return {
      userAuthentication: false,
    };
  },
  //we have acces on mutation in whole app with
  //commit built in method
  mutations: {
    authoriseUser(state) {
      state.userAuthentication = true;
    },
    unautoriseUser(state) {
      state.userAuthentication = false;
    },
  },
  //good practise is to use actions between component and mutations
  //because mutation is syncronous and action are asyncronous
  //we can call dispatch() inside of actions to call other action
  //thats sound good when using http requests,
  //we also cann use getters and state inside actions
  actions: {
    authoriseUser(context) {
      context.commit('authoriseUser');
    },
    unautoriseUser(context) {
      context.commit('unautoriseUser');
    },
  },
  //getters are like methods but we are using them in mutations
  //getters get 2 arguments first-state, second getter,
  //we can use getter in any component in whole app
  getters: {
    userVerification(state) {
      return state.userAuthentication;
    },
  },
});
const app = createApp(App);

app.use(store);

app.mount('#app');
