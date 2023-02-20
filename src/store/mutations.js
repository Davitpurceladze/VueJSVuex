export default {
  authoriseUser(state) {
    state.userAuthentication = true;
  },
  unautoriseUser(state) {
    state.userAuthentication = false;
  },
};
