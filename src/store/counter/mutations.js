export default {
  increment(state) {
    state.counter = state.counter + 1;
  },
  increase(state, payload) {
    console.log(state);
    state.counter = state.counter + payload.value;
  },
};
