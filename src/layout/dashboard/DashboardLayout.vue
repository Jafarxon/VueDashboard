<template>
    <div class="wrapper">
        <side-bar/>
        <div class="main-panel" :class="menu ? '' : 'close'">
            <top-navbar></top-navbar>
            <dashboard-content></dashboard-content>
            <content-footer></content-footer>
        </div>
    </div>
</template>
<style lang="scss"></style>
<script>
    import TopNavbar from "./TopNavbar.vue";
    import ContentFooter from "./ContentFooter.vue";
    import DashboardContent from "./Content.vue";
    import SideBar from "../../components/SideBar";

    export default {
        components: {
            SideBar,
            TopNavbar,
            ContentFooter,
            DashboardContent,
        },
        methods: {},
        computed: {
            menu() {
                return this.$store.state.menu;
            },
        },
    };
</script>
<style lang="scss">
    .main-panel {
        width: calc(100vw - 230px);
        position: absolute;
        right: 0;
    }
    .main-panel.close {
        font-size: 1rem;
        font-weight: 400;
        width: 100vw;
        transition: 0.14s cubic-bezier(0.685, 0.0473, 0.346, 1);
    }
    .box-shadow {
        box-shadow: 0 0 45px 0 rgba(0, 0, 0, 0.6);
    }
</style>
