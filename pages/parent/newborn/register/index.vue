<template>
    <div class="parent-register">
        <div class="container">
            <form @submit.prevent="register" class="login-form" id="parent-register-form">

                <h1 class="admin-title">Newborn Resgister</h1>
                <div class="default-input login-input">
                    <label for="fatherFirstName">Father First Name</label>
                    <input type="text" v-model="newborn.fatherFirstName">
                </div>
                <div class="default-input login-input">
                    <label for="fatherLastName">Father Last Name</label>
                    <input type="text" v-model="newborn.fatherLastName">
                </div>
                <div class="default-input login-input">
                    <label for="fatherPatronymic">Father Patronymic</label>
                    <input type="text" v-model="newborn.fatherPatronymic">
                </div>
                <div class="default-input login-input">
                    <label for="newbornName">Newborn Name</label>
                    <input type="text" v-model="newborn.newbornName">
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
                newborn: {
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
                console.log(this.newborn.firstName);
            }
        }
}
</script>