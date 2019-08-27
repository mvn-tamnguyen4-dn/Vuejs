<template>
  <div class="app">
    <transition name="fade">
      <h1>HELLO EVERYONE</h1>
    </transition>
    <div class="header-app">
      <p v-login="login">Hello</p>
    </div>
    <div class="button">
      <button @click="change">Change header</button>
      <button @click="showSignIn">Login</button>
      <button @click="showSignUp">Register</button>
    </div>
    <component :is="currentView" ref="checkLogin"></component>
  </div>
</template>

<script>
import Signin from "./components/Signin.vue";

import Signup from "./components/Signup.vue";
export default {
  name: "app",
  data() {
    return { currentView: "", login: false, user: [] };
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
    },
    change() {
      this.login = !this.login;
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
.header-app {
  border: 1px solid gray;
  text-align: center;
  color: red;
  height: 150px;
  font-size: 20px;
}
.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

