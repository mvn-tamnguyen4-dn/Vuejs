<template>
  <p>{{ item.name }} đã {{ item.status }} {{ item.money }} VND. Nội dung: {{ item.content }}</p>
</template>

<script>
export default {
  name: "Item",
  props: ["item"]
};
</script>
