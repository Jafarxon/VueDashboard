<template>
    <div>
        <b-row class="my-3">
            <b-col cols="2">
                <b-form-input  v-model="searchField"></b-form-input>
            </b-col>
            <b-col cols="2">
                <b-form-select v-model="selected" :options="options" @change="clearSearch()"></b-form-select>
            </b-col>
            <b-col cols="6">
            </b-col>
            <b-col cols="2" style="text-align: right">
                <b-button @click="showModal = true" class="add">Добавить</b-button>
            </b-col>
        </b-row>
        <users-table :data="users" :searchField="searchField" :selected="selected"/>
        <users-modal :is-open="showModal" @closeEvent="closeModal($event)"/>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';
    import UsersTable from "../components/User/UsersTable";
    import UsersModal from "../components/User/UsersModal";

    export default {
        name: "Users",
        components: {UsersModal, UsersTable},
        data() {
            return {
                searchField: '',
                selected: "id",
                showModal: false,
                options:[
                    {value: 'id', text: 'ID'},
                    {value: 'name', text: 'Ф.И.О'},
                    {value: 'username', text: 'Логин'},
                    {value: 'email', text: 'Почта'},
                    {value: 'address', text: 'Адрес'},
                    {value: 'phone', text: 'Телефон'},
                    {value: 'website', text: 'Сайт'},
                    {value: 'company', text: 'Компания'},
                ],
            };
        },
        methods: {
            ...mapActions(["getUsers"]),
            closeModal(data) {
                this.showModal = data;
            },
            clearSearch() {
                this.searchField = '';
            }
        },
        created() {
            this.getUsers();
        },
        computed: {
            users() {
                return this.$store.state.users
            }
        },
    };
</script>

<style scoped>
    .add {
        background-color: #1b9300;
    }
    .add:hover {
        background-color: #166d1a;
    }

</style>
