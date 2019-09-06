<template>
  <div>
    <h2>This is parent</h2>
    <Child></Child>
  </div>
</template>

<script>
import Child from "./Child";
export default {
  name: "Parent",
  data() {
    return {
      ms2: "Send from parent to child"
    };
  },
  components: {
    Child
  },
  provide: {
    ms3: "Send from parent to ChildChild"
  }
};
</script>

<style>
</style>