<template>
  <div id="admin-wrapper">
    <div id="admin-sidebar">
      <div class="sidebar-logo">
        <img src="../assets/images/logos/default-logo.png" alt="" />
      </div>
      <div class="sidebar-nav">
        <nuxt-link
          v-for="(item, index) in nav"
          :key="index"
          class="sidebar-nav-item"
          :to="item.link"
        >
          {{ item.name }}
        </nuxt-link>

        <div class="sidebar-nav-item" @click="logout">{{ $t("logout") }}</div>
      </div>
    </div>

    <div id="admin-content">
      <AdminHeader />
      <Nuxt />
    </div>
  </div>
</template>

<script>
import AdminHeader from "../components/AdminHeader.vue";
export default {
  components: {
    AdminHeader
  },

  middleware: "admin-middleware",

  computed: {
    nav() {
      return [
        { name: this.$t("dashboard"), link: "/admin/dashboard" },
        { name: this.$t("hospitals"), link: "/admin/hospitals" },
        {
          name: this.$t("guardianshipAuthorities"),
          link: "/admin/guardianships"
        },
        {
          name: this.$t("registryOffices"),
          link: "/admin/registry-offices"
        },
        {
          name: this.$t("parents"),
          link: "/admin/parents"
        }
      ];
    }
  },

  methods: {
    async logout() {
      try {
        await this.$auth.logout();
        await this.$auth.$storage.removeCookie("auth-user");
        document.location.reload();
      } catch (err) {
        this.$toast.error(err);
      }
    }
  }
};
</script>
