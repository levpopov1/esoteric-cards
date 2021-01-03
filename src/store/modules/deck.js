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
    ],
    playingCardsCategories: [
        {
            id: 1,
            title: "Theory11",
            url: "theory11"
        },
        {
            id: 2,
            title: "USPCC",
            url: "uspcc"
        },
        {
            id: 3,
            title: "Ellusionist",
            url: "ellusionist"
        },
        {
            id: 4,
            title: "Art of Play",
            url: "art-of-play"
        },
        {
            id: 5,
            title: "Bicycle",
            url: "bicycle"
        }, 
        {
            id: 6,
            title: "Expert",
            url: "expert"
        }
    ],
    cardGamesCategories: [
        {
            id: 1,
            title: "Hearhtstone",
            url: "hearthstone"
        },
        {
            id: 2,
            title: "Magic The Gathering",
            url: "mtg"
        },
        {
            id: 3,
            title: "Legends of Runeterra",
            url: "lor"
        },
        {
            id: 4,
            title: "Pokemon",
            url: "pokemon"
        },
        {
            id: 5,
            title: "Yu-Gi-Oh",
            url: "yugioh"
        }, 
        {
            id: 6,
            title: "Gwent",
            url: "gwent"
        }
    ], 
    decklist: [
        {
            id: 1,
            category: "theory11",
            decks: [
                {
                    id: 1,
                    name: "Monarch", 
                    img: "whatever.png"
                },
                {
                    id: 2,
                    name: "Union", 
                    img: "whatever.png"
                },
                {
                    id: 3,
                    name: "Citizen", 
                    img: "whatever.png"
                },
                {
                    id: 4,
                    name: "Hudson", 
                    img: "whatever.png"
                },
                {
                    id: 5,
                    name: "High Victorian", 
                    img: "whatever.png"
                },
                {
                    id: 6,
                    name: "Contraband", 
                    img: "whatever.png"
                },
                {
                    id: 7,
                    name: "Medallion", 
                    img: "whatever.png"
                },
                {
                    id: 8,
                    name: "Tycoon", 
                    img: "whatever.png"
                },
                {
                    id: 9,
                    name: "Artisan", 
                    img: "whatever.png"
                },
            ]
        },
        {
            id: 2,
            category: "art-of-play",
            decks: [
                {
                    id: 1,
                    name: "Aviator", 
                    img: "whatever.png"
                },
                {
                    id: 2,
                    name: "Papercuts", 
                    img: "whatever.png"
                },
                {
                    id: 3,
                    name: "NOC", 
                    img: "whatever.png"
                },
                {
                    id: 4,
                    name: "Voyager", 
                    img: "whatever.png"
                },
                {
                    id: 5,
                    name: "Ace Fultons", 
                    img: "whatever.png"
                },
                {
                    id: 6,
                    name: "Provision", 
                    img: "whatever.png"
                },
                {
                    id: 7,
                    name: "Black Wheels", 
                    img: "whatever.png"
                },
                {
                    id: 8,
                    name: "Harmony", 
                    img: "whatever.png"
                },
             ]
        }

    ]
};

const getters = {
    allCards: (state) => state.cards,
    playingCardsCategories: (state) => state.playingCardsCategories,
    cardGamesCategories: (state) => state.cardGamesCategories,
    decklist: (state) => state.decklist,
};

const actions = {};

const mutations = {};


export default {
    state,
    getters,
    actions,
    mutations
}