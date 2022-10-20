<template>
    <div>
        <b-table striped hover :items="dataTable" :fields="fields" class="users-table" :dark="darkMode">
            <template #cell(address)="data">
                {{data.item.address.street}} {{data.item.address.suite }} {{data.item.address.city }}
            </template>
            <template #cell(company)="data">
                {{data.item.company.name }}, {{data.item.company.catchPhrase}}
            </template>
            <template #cell(action)>
                <b-button-group size="sm">
                    <b-button @click="showModal = true">
                        <b-icon-pencil-square/>
                    </b-button>
                    <b-button>
                        <b-icon-info-circle-fill/>
                    </b-button>
                    <b-button>
                        <b-icon-archive-fill/>
                    </b-button>
                </b-button-group>
            </template>
        </b-table>
        <users-modal title-modal="Редактирования" :is-open="showModal" @closeEvent="closeModal($event)"/>
    </div>
</template>

<script>

    import UsersModal from "./UsersModal";

    export default {
        name: "UsersTable",
        components: {UsersModal},
        props: {
            data: Array,
            searchField: String,
            selected: String,
        },
        data() {
            return {
                showModal: false,
                dataTable: [],
                fields: [
                    {
                        key: 'id',
                        label: 'ID',
                        sortable: true
                    },
                    {
                        key: 'name',
                        label: 'Ф.И.О',
                        sortable: true
                    },
                    {
                        key: 'username',
                        label: 'Логин',
                        sortable: true
                    },
                    {
                        key: 'email',
                        label: 'Почта',
                        sortable: true
                    },
                    {
                        key: 'address',
                        label: 'Адрес',
                        sortable: true
                    },
                    {
                        key: 'phone',
                        label: 'Телефон',
                        sortable: true
                    },
                    {
                        key: 'website',
                        label: 'Сайт',
                        sortable: true
                    },
                    {
                        key: 'company',
                        label: 'Компания',
                        sortable: true
                    },
                    {
                        key: 'action',
                        label: 'Действия',
                        sortable: true
                    }
                ],
            }
        },
        methods:
            {
            closeModal(data) {
                this.showModal = data;
            },
        },
        watch: {
            searchField: {
                handler(newVal) {
                    this.dataTable = newVal ? this.dataTable.filter(item => item[this.selected].toString().toLowerCase().includes(this.searchField.toString().toLowerCase())) : this.data;
                },
                immediate: true
            },
            data: {
                handler(newVal) {
                    this.dataTable = newVal;
                },
                immediate: true,
            }
        },
        computed: {
            darkMode() {
                return this.$store.state.darkMode;
            },
        }
    }
</script>

<style scoped>

</style>
