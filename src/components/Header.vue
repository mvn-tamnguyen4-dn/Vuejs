<template>
  <div class="header">
    <button @click="change('Register')">Register</button>
    <button @click="change('Info')">Info</button>
  </div>
</template>

<script>
export default {
  name: "Header",
  methods: {
    change(value) {
      console.log(value);
      this.$emit("changeView", value);
    }
  }
};
</script>

<style>
</style>