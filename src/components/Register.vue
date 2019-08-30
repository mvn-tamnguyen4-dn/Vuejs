<template>
  <div class="form">
    <h2>Register</h2>
    <form>
      Email
      <input v-model="register.email" />
      <br />Password
      <input v-model="register.password" />
      <br />Name
      <input v-model="register.name" />
      <br />Phone
      <input v-model="register.phone" />
    </form>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      register: {
        email: "",
        password: "",
        name: "",
        phone: null
      }
    };
  }
};
</script>

<style>
</style>