<template>
  <main>
    <div class="admin-page-wrapper">
      <nuxt-link to="/admin/hospitals/add">
        <div class="default-button">
          <span>Add hospital</span>
        </div>
      </nuxt-link>

      <div class="table-wrapper">
        <h1 id="table-title">{{ $t("civils") }}</h1>
        <table>
          <tr>
            <th v-for="(key, index) in tableKeys" :key="index">
              {{ key.name }}
            </th>
          </tr>

          <tr v-for="(row, index) in data" :key="index">
            <td>{{ row.id }}</td>
            <td>{{ row.motherFirstName }}</td>
            <td>{{ row.motherLastName }}</td>
            <td>{{ row.motherPatronymic }}</td>
            <td>{{ row.birthDay }}</td>
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
        { name: "Id" },
        { name: "Mother First Name" },
        { name: "Mother Last Name" },
        { name: "Mother Patronymic" },
        { name: "Birthday" }
      ];
    },

    data() {
      return [
        {
          id: "1",
          motherFirstName: "Selim",
          motherLastName: "Atabalyyew",
          motherPatronymic: "Orazowic",
          birthDay: "8 July 2004"
        },
        {
          id: "1",
          motherFirstName: "Selim",
          motherLastName: "Atabalyyew",
          motherPatronymic: "Orazowic",
          birthDay: "8 July 2004"
        },
        {
          id: "1",
          motherFirstName: "Selim",
          motherLastName: "Atabalyyew",
          motherPatronymic: "Orazowic",
          birthDay: "8 July 2004"
        },
        {
          id: "1",
          motherFirstName: "Selim",
          motherLastName: "Atabalyyew",
          motherPatronymic: "Orazowic",
          birthDay: "8 July 2004"
        },
        {
          id: "1",
          motherFirstName: "Selim",
          motherLastName: "Atabalyyew",
          motherPatronymic: "Orazowic",
          birthDay: "8 July 2004"
        },
        {
          id: "1",
          motherFirstName: "Selim",
          motherLastName: "Atabalyyew",
          motherPatronymic: "Orazowic",
          birthDay: "8 July 2004"
        }
      ];
    }
  }
};
</script>
