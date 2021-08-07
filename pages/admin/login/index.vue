<template>
    <div class="admin-login">
        <div class="container">
            <form @submit.prevent="login" class="login-form">

                <h1 class="admin-title">Welcome back</h1>
                <div class="default-input login-input">
                    <label for="username">Name</label>
                    <input type="text" v-model="admin.username">
                </div>
                 <div class="default-input login-input">
                    <label for="password">Password</label>
                    <input type="password" v-model="admin.password">
                </div>
                <button type="submit" class="secondary-button login-btn">Login</button>

            </form>
        </div>
    </div>
</template>

<script>
    export default {
        layout: "empty",

        data() {
            return {
                admin: {
                    username: '',
                    password: ''
                }
            }
        },

        methods: {
            login() {
                console.log(this.admin.username);
            }
        }
    }
</script>
