import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        menu: true,
        darkMode: false,
        users: [],
    },
    mutations: {
        toggleMenu(state) {
            state.menu = !state.menu;
        },
        toggleDarkMode(state) {
            state.darkMode = !state.darkMode;
        },
        addUsers: (state, newUser) => state.users.push(newUser),
        setUsers: (state, users) => (state.users = users),
    },
    actions: {
        async getUsers({commit}) {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            commit('setUsers', response.data);
        },
        async addUsers({commit}, data) {
            const response = await axios.post(`https://jsonplaceholder.typicode.com/users`, data)
            commit('addUsers', response.data)
        },
    },
    modules: {},
});
