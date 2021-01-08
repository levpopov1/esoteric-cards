// Cards API Functions

const API = 'http://localhost:5000/api/v1/';

const state = {
    categories: [],
    vendors: [],
    decks: [],
    cards: [],
    currentCategory:{
        name: "",
        slug: ""
    },
    currentVendor:{
        name: "",
        slug: ""
    },
    currentDeck:{
        name: "",
        slug: ""
    }
};

const getters = {
    getCategories: (state) => state.categories,
    getVendors: (state) => state.vendors,
    getDecks: (state) => state.decks,
    getCurrentCategory: (state) => state.currentCategory,
    getCurrentVendor: (state) => state.currentVendor,
    getCurrentDeck: (state) => state.currentDeck,
    getPlayingCardsVendors: (state) => state.vendors.filter(item => item.category === "Playing Cards"),
    getCardGamesVendors: (state) => state.vendors.filter(item => item.category === "Card Games"),
};

const actions = {
    async fetchCategories({ commit }){
        const url = API + 'categories';
        let response = await fetch(url);
        let data = await response.json();
        commit('setCategories', data);
    },
    async fetchVendors({ commit }){
        const url = API + 'vendors';
        let response = await fetch(url);
        let data = await response.json();
        commit('setVendors', data);
    },
    async fetchDecks({ commit }){
        const url = API + 'decks';
        let response = await fetch(url);
        let data = await response.json();
        commit('setDecks', data);
    }
};

const mutations = {
    setCategories: (state, categories) => (state.categories = categories),
    setVendors: (state, vendors) => (state.vendors = vendors),
    setDecks: (state, decks) => (state.decks = decks),
    setCurrentCategory: (state, currentCategory) => (state.currentCategory = currentCategory),
    setCurrentVendor: (state, currentVendor) => (state.currentVendor = currentVendor),
    setCurrentDeck: (state, currentDeck) => (state.currentDeck = currentDeck),
    setCards: (state, cards) => (state.cards = cards),
};


export default {
    state,
    getters,
    actions,
    mutations
}