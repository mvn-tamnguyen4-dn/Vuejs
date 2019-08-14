<template>
  <div id="app">
    <Form :listItem="listItem" @sendItem="pushItem"></Form>
    <List :listItem="listItem"></List>
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
  },
  methods: {
    pushItem(item) {
      this.listItem.unshift(item);
    }
  }
};
</script>

<style>
</style>
