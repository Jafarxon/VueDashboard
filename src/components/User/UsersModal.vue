<template>
    <b-modal v-model="show"
             id="modal-xl"
             size="xl"
             centered
             :title=titleModal
    >
        <b-container>
            <b-row>
                <b-col>
                    <b-form-group
                            id="input-group-1"
                            label="Ф.И.О:"
                            label-for="input-1"
                    >
                        <b-form-input
                                id="input-1"
                                v-model="user.name"
                                type="text"
                                placeholder="Введите Ф.И.О"
                        ></b-form-input>
                    </b-form-group>
                </b-col>
                <b-col>
                    <b-form-group
                            id="input-group-2"
                            label="Имя Пользователя:"
                            label-for="input-2"
                    >
                        <b-form-input
                                id="input-2"
                                v-model="user.username"
                                type="text"
                                placeholder="Введите Имя Пользователя:"
                        ></b-form-input>
                    </b-form-group>
                </b-col>
                <b-col>
                    <b-form-group
                            id="input-group-3"
                            label="Адрес электронной почты"
                            label-for="input-3"
                    >
                        <b-form-input
                                id="input-3"
                                v-model="user.email"
                                type="email"
                                placeholder="Введите адрес электронной почты"
                        ></b-form-input>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b-form-group
                            id="input-group-4"
                            label="Адрес:"
                            label-for="input-4"
                    >
                        <b-form-input
                                id="input-4"
                                v-model="user.address"
                                type="text"
                                placeholder="Введите Адрес"
                        ></b-form-input>
                    </b-form-group>
                </b-col>
                <b-col>
                    <b-form-group
                            id="input-group-5"
                            label="Телефонный номер:"
                            label-for="input-5"
                    >
                        <b-form-input
                                id="input-5"
                                v-model="user.phone"
                                type="text"
                                placeholder="Введите телефонный номер"
                        ></b-form-input>
                    </b-form-group>
                </b-col>
                <b-col>
                    <b-form-group
                            id="input-group-6"
                            label="Сайт:"
                            label-for="input-6"
                    >
                        <b-form-input
                                id="input-6"
                                v-model="user.website"
                                type="text"
                                placeholder="Введите сайт"
                        ></b-form-input>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col cols="4">
                    <b-form-group
                            id="input-group-7"
                            label="Компания:"
                            label-for="input-7"
                    >
                        <b-form-input
                                id="input-7"
                                v-model="user.company"
                                type="text"
                                placeholder="Введите компанию"
                        ></b-form-input>
                    </b-form-group>
                </b-col>
            </b-row>
        </b-container>
        <template #modal-footer>
            <div class="w-100">
                <b-button
                        variant="primary"
                        class="float-right ml-3"
                        @click="addUser()"
                >Добавить
                </b-button>
                <b-button
                        class="float-right "
                        @click="show = false"
                >Отменить
                </b-button>
            </div>
        </template>
    </b-modal>
</template>

<script>
    import {mapActions} from "vuex";
    export default {
        name: "UsersModal",
        props: {
            titleModal: String,
            isOpen: {
                type: Boolean,
                required: true,
                default: false
            }
        },
        data() {
            return {
                show: null,
                user: {
                    name: '',
                    username: '',
                    email: '',
                    address: '',
                    phone: '',
                    website: '',
                    company: '',
                }
            }
        },
        methods: {
            ...mapActions(["addUsers"]),
            addUser() {
                this.show = false;
                this.addUsers(this.user);
                this.user.name = '';
                this.user.username = '';
                this.user.email = '';
                this.user.address = '';
                this.user.phone = '';
                this.user.website = '';
                this.user.company = '';
            }
        },
        watch: {
            isOpen: {
                handler(newVal) {
                    this.show = newVal
                }
            },
            show: {
                handler(newVal) {
                    this.$emit('closeEvent', newVal);
                }
            }
        }
    }
</script>

<style scoped>

</style>
