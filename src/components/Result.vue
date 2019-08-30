<template>
  <div class="result">
    <h2>Result</h2>
    <div v-for="(value,key) in $parent.result" :key="value.id">{{key}}: {{value}}</div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>