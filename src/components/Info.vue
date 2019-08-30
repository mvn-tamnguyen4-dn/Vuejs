<template>
  <div class="form">
    <h2>Info</h2>
    <form>
      ID
      <input v-model="info.id" />
      <br />Name
      <input v-model="info.name" />
      <br />Address
      <input v-model="info.address" />
    </form>
  </div>
</template>

<script>
export default {
  name: "Info",
  data() {
    return {
      info: {
        id: null,
        name: "",
        address: ""
      }
    };
  }
};
</script>

<style>
</style>