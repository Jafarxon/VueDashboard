<template>
    <b-container fluid>
        <b-row>
            <b-col cols="8" class="right-side">
                <login-svg/>
            </b-col>
            <b-col cols="4" class="left-side">
                <h4 class="alert-heading mb-4">
                    Добро пожаловать в ZK-Dashboard! 👋</h4>
                <p>
                    Пожалуйста, войдите в свою учетную запись и начните путешествие </p>
                <b-alert show variant="success ">
                    Admin: admin@demo.com | admin
                </b-alert>

                <b-form-group
                        id="input-group-1"
                        label="Компания:"
                        label-for="input-1"
                        class="mt-3"
                >
                    <b-form-input
                            id="input-1"
                            v-model="user.login"
                            type="email"
                            placeholder="Введите логин"
                    ></b-form-input>
                </b-form-group>
                <b-form-group
                        id="input-group-2"
                        label="Компания:"
                        label-for="input-2"
                >
                    <b-form-input
                            id="input-2"
                            v-model="user.password"
                            type="password"
                            placeholder="Введите пароль"
                    ></b-form-input>
                </b-form-group>
                <b-form-checkbox
                        id="checkbox-1"
                        v-model="status"
                        name="checkbox-1"
                        value="accepted"
                        unchecked-value="not_accepted"
                >
                    Запомните Меня
                </b-form-checkbox>
                <router-link to="/admin" class="mt-3">
                    <b-button variant="primary" style="width: 100%">Войти</b-button>
                </router-link>

                <p class="text-center mt-3">
                    <a href="#"><span class="text-primary">Создать новый аккаунт ?</span></a>
                </p>
            </b-col>
        </b-row>

    </b-container>
</template>

<script>
    import LoginSvg from "../components/loginSvg";

    export default {
        name: "Login",
        components: {LoginSvg},
        data() {
            return {
                user: {
                    login: 'admin@demo.com',
                    password: 'admin'
                },
                status: false
            }
        }
    }
</script>

<style scoped lang="scss">
    .right-side {
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #f8f8f8;

        svg {
            margin-bottom: 70px;
        }
    }

    .left-side {
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: #fff;
        padding: 4rem;
    }
</style>
