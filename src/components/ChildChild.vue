<template>
  <div>
    <h2>This is Child Child</h2>
    <p>{{ ms3 }}</p>
  </div>
</template>

<script>
export default {
  name: "Parent",
  data() {
    return {
      mes1: "Send from ChildChild to Child"
    };
  },
  inject: ["ms3"]
};
</script>

<style>
</style>