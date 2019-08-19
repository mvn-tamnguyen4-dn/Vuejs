<template>
  <div>
    <h2>Profile</h2>
    <router-link
      v-show="+this.$route.params.id > 1"
      tag="a"
      :to="{ name: 'userProfile', params: { id: +this.$route.params.id-1 }}"
    >Pre</router-link>
    <p v-for="(value, key) of user" :key="value.id">{{key}}: {{value}}</p>
    <router-link v-show="+this.$route.params.id < users.length" tag="a" :to="{ name: 'userProfile', params: { id: +this.$route.params.id+1 }}">Next</router-link>
  </div>
</template>
<script>
import users from "../data/user.json";
export default {
  name: "Profile",
  data() {
    return {
      users: users,
      user: null
    };
  },
  beforeRouteEnter(to, from, next) {
    console.log("before enter");
    if (users) {
      next();
    }
  },
  beforeRouteUpdate(to, from, next) {
    console.log("before update");
    this.user = users.find(x => x.id === +to.params.id);
    next();
  },
  created() {
    console.log("created");
    this.user = users.find(x => x.id === +this.$route.params.id);
  }
};
</script>