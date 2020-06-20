// store methods for Deck component
const state = {
    cards: [
        {
            id: 1,
            title: "Ace of Spades"
        },
        {
            id: 2,
            title: "Ace of Hearts"
        },
        {
            id: 3,
            title: "Ace of Diamonds"
        },
        {
            id: 4,
            title: "Ace of Clubs"
        },
        {
            id: 5,
            title: "King of Spades"
        },
        {
            id: 6,
            title: "King of Hearts"
        },
        {
            id: 7,
            title: "King of Diamonds"
        },
        {
            id: 8,
            title: "King of Clubs"
        }
    ]
};

const getters = {
    allCards: (state) => state.cards
};

const actions = {};

const mutations = {};


export default {
    state,
    getters,
    actions,
    mutations
}