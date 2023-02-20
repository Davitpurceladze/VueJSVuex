<template>
  <h3>{{ counter }}</h3>
  <p>we do more...</p>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.getters.normalizedCounter;
      // return this.$store.getters['numbers/normalizedCounter']
      //numbers is name what we called this state in main state in modules section
    },
  },
};
</script>
