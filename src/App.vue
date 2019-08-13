<template>
  <div id="app">
    <Form :listItem="listItem" @updateList="listItem = $event"></Form>
    <List v-bind:listItem="listItem"></List>
  </div>
</template>

<script>
import Form from "./components/Form.vue";
import List from "./components/List.vue";

export default {
  name: "app",
  components: {
    Form,
    List
  },
  data: function() {
    return {
      listItem: []
    };
  }
};
</script>

<style>
</style>
