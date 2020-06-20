// store methods for Deck component
const state = {
    users: []
};

const getters = {
    allUsers: (state) => state.users
};

const actions = {
    fetchUsers({ commit }) {
        const url = 'https://jsonplaceholder.typicode.com/users';
        fetch(url)
            .then(response => response.json())
            .then(json => commit('setUsers', json));
    },
    addUser({ commit }, formData){
        const url = 'https://jsonplaceholder.typicode.com/users';
        let options = {
            method: 'POST',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(formData)
        }
        console.log(options)
        fetch(url, options)
            .then(response => response.json())
            .then(json => commit('newUser', json));
    }
};

const mutations = {
    setUsers: (state, users) => (state.users = users),
    newUser: (state, user) => state.users.unshift(user)
};


export default {
    state,
    getters,
    actions,
    mutations
}