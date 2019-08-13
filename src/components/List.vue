<template>
  <div>
    <h1>Danh sách</h1>
    <ul>
      <li
        v-for="item in listItem"
        v-bind:key="item.id"
      >{{ item.name }} đã {{ item.status }} {{ item.money }} VND. Nội dung: {{ item.content }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "List",
  props: ["listItem"]
};
</script>