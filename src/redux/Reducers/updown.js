const intialState = 0;

const changTheNumber = (state = intialState, action) => {
    switch (action.type) {
        case "INCREMENT": return state + action.payload; 
        case "DECREMENT": return state - action.payload;
        default: return state;
    }
}

export default changTheNumber;