<template>
  <div class="form">
    <h2 class="title-form">Input infomation</h2>
    <table class="table-form">
      <tr>
        <td>Name</td>
        <td>
          <input type="text" name="name" id="name" v-model="name" />
        </td>
      </tr>
      <tr>
        <td>Money</td>
        <td>
          <input type="text" name="money" id="money" v-model="money" />
        </td>
      </tr>
      <tr>
        <td>Status</td>
        <td>
          <input type="radio" name="status" value="recieved" v-model="status" />Recieve
          <input type="radio" name="status" value="sent" v-model="status" />Send
        </td>
      </tr>
      <tr>
        <td>Content</td>
        <td>
          <input type="text" name="content" id="content" v-model="content" />
        </td>
      </tr>
    </table>
    <button @click="addInfo" class="btn-submit">Submit</button>
  </div>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      name: "",
      money: null,
      status: null,
      content: ""
    };
  },
  methods: {
    addInfo() {
      var item = {
        name: this.name,
        money: this.money,
        status: this.status,
        content: this.content
      };
      this.$emit("sendItem", item);
    }
  }
};
</script>
<style scoped>
.form {
  border-style: ridge;
}
.table-form {
  width: 50%;
  margin: auto;
}
td {
  padding: 10px 5px;
}
.btn-submit {
  display: block;
  margin: 0 auto;
  font-size: 20px;
  background-color: green;
  border-radius: 5px;
  color: aliceblue;
  padding: 5px 10px;
}
input {
  border-radius: 5px;
}
</style>