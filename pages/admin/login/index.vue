<template>
  <div class="admin-login">
    <div class="container">
      <form @submit.prevent="login" class="login-form">
        <h1 class="admin-title">Welcome back</h1>
        <div class="default-input login-input">
          <label for="username">{{ $t("username") }}</label>
          <input type="text" v-model="admin.username" />
        </div>
        <div class="default-input login-input">
          <label for="password">{{ $t("password") }}</label>
          <input type="password" v-model="admin.password" />
        </div>
        <button type="submit" class="secondary-button login-btn">
          {{ $t("login") }}
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import Alert from "../../../components/Alert.vue";

import { isEmpty } from "validator";

export default {
  layout: "empty",

  components: {
    Alert
  },

  data() {
    return {
      admin: {
        username: "",
        password: ""
      }
    };
  },

  methods: {
    async login() {
      try {
        await this.validateAdmin();
        const { data } = await this.$axios.post(`/admin/login`, this.admin);
        const { admin } = data;
        await this.$auth.loginWith("local", {
          data: {
            username: this.admin.username,
            password: this.admin.password
          }
        });
        await this.$auth.$storage.setCookie("auth-user", {
          username: admin.username
        });
        await this.$auth.$storage.setCookie("auth-token", admin.token);
        this.$toast.success("Successfully signed in");
        this.$router.push("/admin/dashboard");
      } catch (err) {
        console.log(err.response);
        this.$toast.error(err);
      }
    },

    async validateAdmin() {
      if (isEmpty(this.admin.username)) {
        throw new Error("Admin username is required");
      }

      if (isEmpty(this.admin.password)) {
        throw new Error("Admin password is required");
      }
    }
  }
};
</script>
