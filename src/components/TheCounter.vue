<template>
  <h3>{{ finalCounter }}</h3>
</template>

<script>
//we are importing mapGetters from 'vuex'
//it will dig in state instead of us
import { mapGetters } from 'vuex';
export default {
  computed: {
    // counter() {
    //   return this.$store.getters.finalCounter;
    // },

    ...mapGetters(['finalCounter']), // ...mapGetters([]) in the aray we can use any name of getter in string and use it in this component
  },
};
</script>
