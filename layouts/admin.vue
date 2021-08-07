<template>
    <div id="admin-wrapper">
        <div id="admin-sidebar">
            <div class="sidebar-logo">
                <img src="../assets/images/logos/default-logo.png" alt="">
            </div>
            <div class="sidebar-nav">
                <div class="sidebar-nav-item">
                    items
                </div>
                 <div class="sidebar-nav-item">
                    items
                </div>
                 <div class="sidebar-nav-item">
                    items
                </div>
                 <div class="sidebar-nav-item">
                    items
                </div>
            </div>
        </div>

        <div id="admin-content">
            <AdminHeader />
            <Nuxt />
        </div>
    </div>
</template>

<script>
import AdminHeader from "../components/AdminHeader.vue"
export default {
    components: {
        AdminHeader
    }
}
</script>