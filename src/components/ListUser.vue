<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Team</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{user.id}}</td>
          <td>{{user.name}}</td>
          <td>{{user.team}}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>
            <nav class="pagination">
              <a v-on:click="prev()" class="button">Previous</a>
              <a v-on:click="next()" class="button">Next page</a>
              <ul>
                <li v-for="p in pageCount" :key="p.id">
                  <a v-if="pageNo == p" v-on:click="page(p)" class="button is-primary">{{p}}</a>
                  <a v-else v-on:click="page(p)" class="button">{{p}}</a>
                </li>
              </ul>
            </nav>
          </td>
        </tr>
        <tr>
          <td colspan="3">
            <button v-on:click="first()" class="button">First</button>
            <button v-on:click="prev()" class="button">Prev</button>
            <span style="padding-top:1em;">{{pageNo}}/{{pageCount}}</span>
            <button v-on:click="next()" class="button">Next</button>
            <button v-on:click="last()" class="button">Last</button>
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>
<script>
import users from "../data/user.json";

export default {
  name: "ListUser",
  data() {
    return {
      users: users,
      pageNo: 1,
      pageSize: 10
    };
  }
};
</script>