<template>
  <main>
    <div class="admin-page-wrapper">
      <nuxt-link to="/admin/parents/add">
        <div class="default-button">
          <span>Add Parent</span>
        </div>
      </nuxt-link>

      <div class="table-wrapper">
        <h1 class="table-title"></h1>
        <table>
          <thead>
            <tr>
              <th v-for="(key, index) in tableKeys" :key="index">
                {{ key.name }}
              </th>
            </tr>
          </thead>

           <tr v-for="(row, index) in data" :key="index">
            <td>{{ row.id }}</td>
            <td>{{ row.name }}</td>
            <td>{{ row.name }}</td>
            <td>{{ row.name }}</td>
            <td>{{ row.name }}</td> 
          </tr>
        </table>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  layout: "admin",

  computed: {
    tableKeys() {
      return [
        { id: "Id" },
        { name: "Name" },
        { name: "Name" },
        { name: "Name" },
        { name: "Name" }
      ];
    },

    data() {
      return [
        {
          id: "1",
          name: "Something",
          Name: "Something",
          name: "Something",
          name: "Something"
        },
         {
          id: "1",
          name: "Something",
          Name: "Something",
          name: "Something",
          name: "Something"
        },
         {
           id: "1",
          name: "Something",
          Name: "Something",
          name: "Something",
          name: "Something"
        },
         {
        id: "1",
          name: "Something",
          Name: "Something",
          name: "Something",
          name: "Something"
        },
         {
           id: "1",
          name: "Something",
          Name: "Something",
          name: "Something",
          name: "Something"
        },
         {
          id: "1",
          name: "Something",
          Name: "Something",
          name: "Something",
          name: "Something"
        }
      ];
    }
  }
};
</script>