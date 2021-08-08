<template>
  <div class="parent-register">
    <div class="container">
      <form
        @submit.prevent="login"
        class="login-form"
        id="parent-register-form"
      >
        <h1 class="admin-title">{{ $t("parentLogin") }}</h1>
        <div class="default-input login-input">
          <label for="firstName">{{ $t("firstName") }}</label>
          <input type="text" v-model="parent.email" />
        </div>
        <div class="default-input login-input">
          <label for="lastName">{{ $t("lastName") }}</label>
          <input type="text" v-model="parent.password" />
        </div>
        <button type="submit" class="secondary-button login-btn">
          {{ $t("login") }}
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  layout: "empty",

  data() {
    return {
      parent: {
        email: "",
        password: ""
      }
    };
  },

  methods: {
    async login() {
      try {
        await this.validateParent();
        const { data } = this.$axios.post("/");
        console.log(data);
      } catch (err) {
        this.$toast.error(err);
      }
    }
  }
};
</script>
