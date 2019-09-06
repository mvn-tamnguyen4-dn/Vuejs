<template>
  <div>
    <h2>This is Child</h2>
    <ChildChild ref="data"></ChildChild>
    <!-- <p>{{ this.$refs.data.mes1 }}</p> -->
    <p>{{ $parent.ms2 }}</p>
  </div>
</template>

<script>
import ChildChild from "./ChildChild";

export default {
  name: "Child",
  components: {
    ChildChild
  },
  mounted() {
    console.log(this.$refs.data.mes1);
  }
};
</script>

<style>
</style>