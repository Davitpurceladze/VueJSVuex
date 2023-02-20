<template>
  <h3>{{ count }}</h3>
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

    // ...mapGetters(['finalCounter']), //we use inside computed:{}  ...mapGetters([]) in the aray we can use any name of getter in string and use it in this component
    // if this mapgetters is local (namespaced:true) we can do
    // ...mapGetters('numbers'{})
    ...mapGetters({
      // we can describe our custom names for getter in state
      count: 'finalCounter',
    }),
  },
};
</script>
