<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <div v-for="item in posts" :key="item">{{ item }}</div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      posts: [],
      errors: [],
      post: {
        title: "foo",
        body: "bar",
        userId: 1
      }
    };
  },
  mounted() {
    this.$http.post(["posts"], this.post).then(response => {
      console.log(3, response["body"]);
    });
    this.$http.get(["todos", "101"]).then(response => {
      this.posts = response;
      console.log(2, this.posts);
    });
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
