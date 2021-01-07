// store methods for Deck component
const state = {
    playingCards: [],
    playingCardsCategories: [],
    playingCardsVendors: [],
    cardGamesCategories: [],
    decklist: []
};

const getters = {
    allPlayingCards: (state) => state.playingCards,
    playingCardsCategories: (state) => state.playingCardsCategories,
    cardGamesCategories: (state) => state.cardGamesCategories,
    decklist: (state) => state.decklist,
    playingCardsVendors: (state) => state.playingCardsVendors
};

const actions = {
    fetchPlayingCards({ commit }) {
        const url = 'http://localhost:5000/api/v1/categories/';
        fetch(url)
            .then(response => response.json())
            .then(json => commit('setPlayingCards', json))
    },
    fetchPlayingCardsVendors({ commit }) {
        const url = 'http://localhost:5000/api/v1/categories/playing-cards/vendors';
        fetch(url)
            .then(response => response.json())
            .then(json => commit('setPlayingCardsVendors', json))
    }
};

const mutations = {
    setPlayingCards: (state, playingCards) => (state.playingCards = playingCards),
    setPlayingCardsVendors: (state, playingCardsVendors) => (state.playingCardsVendors = playingCardsVendors),
    setPlayingCardsCategories: (state, playingCardsCategories) => (state.cardGamesCategories = playingCardsCategories)
};


export default {
    state,
    getters,
    actions,
    mutations
}