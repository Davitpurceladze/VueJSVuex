<template>
  <button @click="addOne">Add 2</button>
</template>

<script>
export default {
  methods: {
    addOne() {
      //commit is build in method wich store gives us and
      //'increment is name of the method in mutations(state)'
      this.$store.dispatch('increment');
    },
  },
};
</script>
