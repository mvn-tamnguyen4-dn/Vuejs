<template>
  <div class="app">
    <div class="button">
      <button @click="showSignIn">Login</button>
      <button @click="showSignUp">Register</button>
    </div>
    <component :is="currentView"></component>
  </div>
</template>

</script>
<script>
import Signin from "./components/Signin.vue";

import Signup from "./components/Signup.vue";
export default {
  name: "app",
  data() {
    return { currentView: "Signin" };
  },
  components: {
    Signin,
    Signup
  },
  methods: {
    showSignIn() {
      this.currentView = "Signin";
    },
    showSignUp() {
      this.currentView = "Signup";
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
.close {
  color: tomato;
}
</style>

