<template>
  <Dialog>
    <h3 slot="header">Register</h3>
    <div slot="body">
      <table>
        <tr>
          <th>Username</th>
          <td>
            <input type="text" v-model="register.username" />
          </td>
        </tr>
        <tr>
          <th>Password</th>
          <td>
            <input type="password" v-model="register.password" />
          </td>
        </tr>
        <tr>
          <th>Phone</th>
          <td>
            <input type="text" v-model="register.phone" />
          </td>
        </tr>
        <tr>
          <th>Address</th>
          <td>
            <input type="text" v-model="register.address" />
          </td>
        </tr>
      </table>
      <button @click="addUser">Submit</button>
    </div>
  </Dialog>
</template>

<script>
import Dialog from "./Dialog.vue";

export default {
  name: "Signin",
  data() {
    return {
      register: {
        username: "",
        password: "",
        phone: "",
        address: ""
      }
    };
  },
  components: {
    Dialog
  },
  methods: {
    addUser() {
      this.$parent.user.push(this.register);
      console.log(this.$parent.user);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
