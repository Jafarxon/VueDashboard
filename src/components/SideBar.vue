<template>
    <div class="side-bar" :class="getClasses()">
        <div class="side-bar-content">
            <div class="logo"><img src="../assets/logo.svg" width="30px" height="30px" alt="logo"/>dashboard</div>
            <div class="menu-list">
                <router-link to="/users">
                    <BIconPersonCircle/>
                    Пользователи
                </router-link>
                <router-link to="/posts">
                    <BIconFilePost/>
                    Посты
                </router-link>
                <router-link to="/test">
                    <BIconHexagon/>
                    Тест 1
                </router-link>
                <router-link to="/info">
                    <BIconInbox/>
                    Тест 2
                </router-link>
            </div>
        </div>
        <div class="menu-list">
            <router-link to="/login">
                <b-icon-arrow-left-circle class="mr-3"/>
                Выход
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SideBar",
        computed: {
            menu() {
                return this.$store.state.menu;
            },
            darkMode() {
                return this.$store.state.darkMode;
            },
        },
        methods: {
            getClasses() {
                return `${this.menu ? 'open' : ''} ${this.darkMode ? 'dark' : 'light'}`
            }
        }
    };
</script>

<style lang="scss">
    .side-bar {
        width: 0;
        height: 100vh;
        position: fixed;
        overflow: hidden;
        top: 0;
        left: 0;
        z-index: 2;
        box-shadow: 0 0 45px 0 rgba(0, 0, 0, 0.2);
        transition: 0.14s cubic-bezier(0.685, 0.0473, 0.346, 1);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .side-bar.dark {
        background-color: #343a40;
        color: white;
    }

    .side-bar.light {
        background-color: white;
        color: #343a40;
        .menu-list a{
            color: #343a40;
        }
    }

    .side-bar.open,
    .side-bar-content {
        font-size: 20px;
        width: 230px;
    }

    .menu-list {
        font-size: 20px;
        margin-left: 15px;
        margin-top: 20px;
    }

    .menu-list a {
        display: block;
        color: #ffffff;
        text-decoration: none;
        margin-bottom: 20px;
        transition: all 0.2s;

        svg {
            font-size: 18px;
            margin-right: 5px;
        }
    }

    .menu-list a:hover {
        color: #e89628;
        margin-left: 5px;
        text-decoration: none;
    }

    .logo {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 15px;
        padding-bottom: 10px;
        text-transform: uppercase;
        font-weight: 600;
        border-bottom: 1px solid #d1d1d1;
        text-align: center;
    }
</style>
