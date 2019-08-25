<template>
  <div class="dialog" v-show="visible">
    <header class="header">
      <button class="btnClose" @click="close">x</button>
      <slot name="header"></slot>
    </header>
    <div class="body">
      <slot name="body"></slot>
    </div>
    <footer class="footer">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>
<script>
export default {
  name: "Dialog",
  data() {
    return { visible: true };
  },
  methods: {
    close() {
      this.visible = false;
    }
  }
};
</script>
<style scoped>
.btnClose {
  color: red;
  font-size: 20px;
  border: none;
  position: absolute;
  top: 0px;
  right: 0px;
}
input {
  border-radius: 3px;
  padding: 5px;
  margin: 10px;
}
header {
  color: blue;
  font-size: 25px;
}
.dialog {
  max-width: 50%;
  text-align: center;
  position: fixed;
  left: 40%;
  top: 20%;
  border: 1px solid gray;
  padding: 20px;
  background-color: azure;
  z-index: 1;
  box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>