
const intialState = {
    cardData: []
};

const cardItems = (state = intialState, action) => {
    switch (action.type) {
        case "ADDTOCART": return {
            ...state,
            cardData: [...state.cardData, action.payload],
        }
        case "REMOVETOCART":
            state.cardData.pop();
            return {
                ...state,
            }
        default: return state;
    }
}

export default cardItems;

