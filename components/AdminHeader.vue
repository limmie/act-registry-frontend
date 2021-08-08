<template>
  <div id="admin-header">
    <div id="admin-header-username">
      <span>{{ admin.username }}</span>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    admin() {
      return this.$auth.user || this.$auth.$storage.getCookie("auth-user");
    }
  },

  middleware: "admin-middleware"
};
</script>
