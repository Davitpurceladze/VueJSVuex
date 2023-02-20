<template>
  <button @click="inc">Add 1</button>
  <button @click="increase({ value: 11 })">Add 11</button>
</template>

<script>
//we are importing mapActions from 'vuex'
//it will dig in state instead of us
import { mapActions } from 'vuex';
export default {
  methods: {
    // addOne() {
    //   //commit is build in method wich store gives us and
    //   //'increment is name of the method in mutations(state)'
    //   this.$store.dispatch('increment');
    // },
    // ...mapActions(['increment', 'increase']), // use mapActions in methods:{}
    ...mapActions({
      // we can descripe our custom names for actions in state
      inc: 'increment',
      increase: 'increase',
    }),
  },
};
</script>
