<template>
  <Dialog>
    <h3 slot="header">Login</h3>
    <form slot="body">
      <table>
        <tr>
          <th>Username</th>
          <td>
            <input type="text" />
          </td>
        </tr>
        <tr>
          <th>Password</th>
          <td>
            <input type="password" name="password" id="password" />
          </td>
        </tr>
      </table>
      <button type="submit">Submit</button>
    </form>
  </Dialog>
</template>

<script>
import Dialog from "./Dialog.vue";

export default {
  name: "Signin",
  components: {
    Dialog
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
