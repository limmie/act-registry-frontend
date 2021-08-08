<template>
  <div class="parent-register">
    <div class="container">
      <form
        @submit.prevent="register"
        class="login-form"
        id="parent-register-form"
      >
        <h1 class="admin-title">{{ $t("parentRegister") }}</h1>
        <div class="default-input login-input">
          <label for="firstName">{{ $t("firstName") }}</label>
          <input type="text" v-model="parent.firstName" />
        </div>
        <div class="default-input login-input">
          <label for="lastName">{{ $t("lastName") }}</label>
          <input type="text" v-model="parent.lastName" />
        </div>
        <div class="default-input login-input">
          <label for="patronymic">{{ $t("patronymic") }}</label>
          <input type="text" v-model="parent.patronymic" />
        </div>
        <div class="default-input login-input">
          <label for="email">{{ $t("email") }}</label>
          <input type="e-mail" v-model="parent.email" />
        </div>
        <div class="default-input login-input">
          <label for="password">{{ $t("password") }}</label>
          <input type="password" v-model="parent.password" />
        </div>
        <button type="submit" class="secondary-button login-btn">
          {{ $t("register") }}
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
        firstName: "",
        lastName: "",
        patronymic: "",
        email: "",
        password: ""
      }
    };
  },

  methods: {
    async register() {
      try {
        await this.validateParent();
        const { data } = await this.$axios.post();
      } catch (err) {
        this.$toast.error(err);
      }
    },

    validateParent() {}
  }
};
</script>
