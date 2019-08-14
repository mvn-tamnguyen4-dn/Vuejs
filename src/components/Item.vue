<template>
  <p>{{ item.name }} has {{ item.status }} {{ item.money }} VND with content "{{ item.content }}"</p>
</template>

<script>
export default {
  name: "Item",
  props: ["item"]
};
</script>
<style scoped>
p {
  margin-left: 150px;
}
</style>
