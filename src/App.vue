<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Header @changeView="changeView"></Header>
    <div class="body">
      <component :is="currentView" ref="userInput" />
      <button @click="getResult" v-if="currentView">Submit</button>
      <Result v-if="result"></Result>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Register from "./components/Register.vue";
import Info from "./components/Info.vue";
import Result from "./components/Result.vue";

export default {
  name: "app",
  data() {
    return {
      currentView: "",
      result: null
    };
  },
  components: {
    Header,
    Register,
    Info,
    Result
  },
  methods: {
    changeView(value) {
      this.result = null;
      this.currentView = value;
    },
    getResult() {
      var check = this.$refs.userInput.register;
      check = check ? check : this.$refs.userInput.info;
      this.result = check;
      console.log(this.result);
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
