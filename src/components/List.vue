<template>
  <div>
    <h2>Danh sach</h2>
    <div v-for="item in listItem" :key="item.id">
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