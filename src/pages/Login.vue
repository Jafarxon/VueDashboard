<template>
    <div class="login-page">
        <div class="box">
            <div class="form">
                <h2>ZK-Вход</h2>
                <div class="inputBox">
                    <input type="text" required>
                    <span>Логин</span>
                    <i></i>
                </div>
                <div class="inputBox">
                    <input type="password" required>
                    <span>Пароль</span>
                    <i></i>
                </div>
                <div class="links">
                    <a href="#">Забыли пароль?</a>
                    <a href="#">Зарегистрироваться</a>
                </div>

                <router-link to="/"><input type="submit" value="Войти"></router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login"
    }
</script>

<style scoped lang="scss">
    .login-page {
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #23242a;
    }

    .box {
        position: relative;
        width: 380px;
        height: 420px;
        background-color: #1c1c1c;
        border-radius: 8px;
        overflow: hidden;
    }

    .box::before {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 380px;
        height: 420px;
        background:  linear-gradient(0deg, transparent, #0028c6, #2d1752);
        transform-origin: bottom right;
        animation: animate 6s linear infinite;
    }

    .box::after {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 380px;
        height: 420px;
        background: linear-gradient(0deg, transparent, #0028c6, #2d1752);
        transform-origin: bottom right;
        animation: animate 6s linear infinite;
        animation-delay: -3s;
    }

    @keyframes animate {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    /* Form */
    .form {
        position: absolute;
        inset: 2px;
        border-radius: 8px;
        background: #28292d;
        z-index: 10;
        padding: 50px 40px;
        display: flex;
        flex-direction: column;
    }

    .form h2 {
        color: #f8f7fc;
        font-weight: 500;
        text-align: center;
        letter-spacing: 0.1em;
    }

    .inputBox {
        position: relative;
        width: 100%;
        margin-top: 35px;
    }

    .inputBox input {
        position: relative;
        width: 100%;
        padding: 20px 10px 10px;
        background: transparent;
        border: none;
        outline: none;
        color: #000000;
        font-size: 1em;
        letter-spacing: 0.05em;
        z-index: 10;
    }

    .inputBox span {
        position: absolute;
        left: 0;
        padding: 20px 0px 10px;
        font-size: 1em;
        color: #ffffff;
        pointer-events: none;
        letter-spacing: 0.05em;
        transition: 0.5s;
    }

    .inputBox input:valid ~ span,
    .inputBox input:focus ~ span {
        color: #ffffff;
        transform: translateX(0px) translateY(-34px);
        font-size: 0.75em;
    }

    .inputBox i {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 2px;
        background: #ffffff;
        border-radius: 4px;
        transition: 0.5s;
        pointer-events: none;
        z-index: 0;
    }

    .inputBox input:valid ~ i,
    .inputBox input:focus ~ i {
        height: 44px;
    }

    .links {
        display: flex;
        justify-content: space-between;

    }

    .links a {
        margin: 10px 0;
        font-size: 0.75em;
        color: #ffffff;
        text-decoration: none;
    }

    .links a:hover,
    .links a:nth-child(2) {
        color: #ffffff;
    }

    input[type="submit"] {
        border: none;
        outline: none;
        background: #ffffff;
        padding: 11px 25px;
        width: 100px;
        margin-top: 10px;
        border-radius: 4px;
        font-weight: 600;
        cursor: pointer;
    }

    input[type="submit"]:active {
        opacity: 0.8;
    }
</style>
