<template>
  <div class="list" v-if="listItem.length > 0">
    <h2 class="title-list">List</h2>
    <div v-for="item in listItem" :key="item.id" class="item-list">
      <Item :item="item"></Item>
    </div>
  </div>
</template>
<script>
import Item from "./Item.vue";

export default {
  name: "List",
  props: ["listItem"],
  components: {
    Item
  }
};
</script>