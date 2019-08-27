<template>
  <Dialog>
    <h3 slot="header">Login</h3>
    <div slot="body">
      <table>
        <tr>
          <th>Username</th>
          <td>
            <input type="text" v-model="login.username" />
          </td>
        </tr>
        <tr>
          <th>Password</th>
          <td>
            <input type="password" v-model="login.password" />
          </td>
        </tr>
      </table>
      <button type="submit" @click="getLogin">Submit</button>
    </div>
  </Dialog>
</template>

<script>
import Dialog from "./Dialog.vue";
export default {
  name: "Signin",
  data() {
    return {
      login: {
        username: "",
        password: ""
      },
      isLogin: false
    };
  },
  components: {
    Dialog
  },
  methods: {
    getLogin() {
      var user = this.$parent.user.find(
        x =>
          x.username == this.login.username && x.password == this.login.password
      );
      if (user) {
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
      console.log(this.isLogin);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
