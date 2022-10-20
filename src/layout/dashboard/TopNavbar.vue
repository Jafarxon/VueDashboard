<template>
    <b-navbar :type="darkMode?'dark':''" :variant="darkMode?'dark':''">
        <div class="container-fluid">
            <div class="navbar-wrapper">
                <div class="navbar-left">
                    <div class="navbar-toggle d-inline" :class="{ toggled: true }">
                        <b-button variant="light" class="menu-btn" @click="toggleMenu()">
                            <BIconList/>
                        </b-button>
                    </div>
                    <span class="navbar-brand">
          {{ routeName }}
        </span>
                </div>
                <div class="navbar-right">
                    <b-form-checkbox @change="toggleDarkMode()" name="check-button" switch/>
                    <b-dropdown id="dropdown-1" text="Русский" class="m-md-2 mr-1"
                                :variant="darkMode?'outline-light':'outline'">
                        <b-dropdown-item>English</b-dropdown-item>
                        <b-dropdown-item>Ўзбек</b-dropdown-item>
                    </b-dropdown>
                    <b-button variant="light" class="menu-btn">
                        <BIconPersonCircle/>
                    </b-button>
                </div>
            </div>
        </div>

    </b-navbar>
</template>
<script>
    export default {
        computed: {
            routeName() {
                const {name} = this.$route;
                return this.capitalizeFirstLetter(name);
            },
            darkMode() {
                return this.$store.state.darkMode;
            },
        },
        methods: {
            capitalizeFirstLetter(string) {
                return string.charAt(0).toUpperCase() + string.slice(1);
            },
            toggleMenu() {
                this.$store.commit("toggleMenu");
            },
            toggleDarkMode() {
                this.$store.commit("toggleDarkMode");
            },
        },
    };
</script>
<style lang="scss">
    .navbar {
        position: relative;
        z-index: 1;
        padding: 10px;
        background: white;
        box-shadow: 10px 0 20px rgba(208, 208, 208, 0.6);

        .navbar-wrapper {
            width: 100%;
            padding-left: 15px;
            display: flex;
            align-items: center;
            justify-content: space-between;

            .navbar-left, .navbar-right {
                display: flex;
                align-items: center;
            }
        }

        .navbar-brand {
            font-size: 28px;
            margin-left: 10px;
        }
    }
</style>
