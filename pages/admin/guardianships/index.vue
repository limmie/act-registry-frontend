<template>
  <main>
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

        <tbody>
          <tr v-for="(row, index) in data" :key="index">
            <td>{{ row.name }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<script>
export default {
  computed: {
    tableKeys() {
      return [{ name: "" }];
    },

    data() {
      return [{ name: "Hello Worl!" }];
    }
  }
};
</script>
