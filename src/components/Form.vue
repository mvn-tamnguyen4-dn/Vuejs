<template>
  <div>
    <h1>Nhập thông tin</h1>
    <table>
      <tr>
        <td>Tên</td>
        <td>
          <input type="text" name="name" id="name" v-model="name" />
        </td>
      </tr>
      <tr>
        <td>Số tiền</td>
        <td>
          <input type="text" name="money" id="money" v-model="money" />
        </td>
      </tr>
      <tr>
        <td>Trạng thái</td>
        <td>
          <input type="radio" name="status" value="nhận" v-model="status" />Nhận
          <input type="radio" name="status" value="gửi" v-model="status" />Gửi
        </td>
      </tr>
      <tr>
        <td>Nội dung</td>
        <td>
          <input type="text" name="content" id="content" v-model="content" />
        </td>
      </tr>
    </table>
    <button @click="addInfo">Xác nhận</button>
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