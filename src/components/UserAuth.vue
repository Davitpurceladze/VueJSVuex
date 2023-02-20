<template>
  <button @click="authorised">Login</button>
  <button @click="nonAuthorise">Logout</button>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  methods: {
    ...mapActions({
      authorised: 'authoriseUser',
      nonAuthorise: 'unautoriseUser',
    }),
  },
};
</script>
