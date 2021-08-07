<template>
    <div class="parent-register">
        <div class="container">
            <form @submit.prevent="register" class="login-form" id="parent-register-form">

                <h1 class="admin-title">Parent Resgister</h1>
                <div class="default-input login-input">
                    <label for="firstName">First Name</label>
                    <input type="text" v-model="parent.firstName">
                </div>
                <div class="default-input login-input">
                    <label for="lastName">Last Name</label>
                    <input type="text" v-model="parent.lastName">
                </div>
                <div class="default-input login-input">
                    <label for="patronymic">Patronymic</label>
                    <input type="text" v-model="parent.patronymic">
                </div>
                <div class="default-input login-input">
                    <label for="email">E-mail</label>
                    <input type="e-mail" v-model="parent.email">
                </div>
                 <div class="default-input login-input">
                    <label for="password">Password</label>
                    <input type="password" v-model="parent.password">
                </div>
                <button type="submit" class="secondary-button login-btn">Register</button>

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
                    firstName: '',
                    lastName: '',
                    patronymic: '',
                    email: '',
                    password: ''
                }
            }
        },

        methods: {
            register() {
                console.log(this.parent.firstName);
            }
        }
    }
    </script>
