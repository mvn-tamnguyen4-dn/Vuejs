<template>
  <div>
    <h1>Home</h1>
    <router-view />
  </div>
</template>
<script>
import users from "../data/user.json";
export default {
  name: "Home"
};
</script>