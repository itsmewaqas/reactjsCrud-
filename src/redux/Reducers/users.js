
const intialState = {
    usersList: [], 
    err: null,
    loading: false, 
};

const usersData = (state = intialState, action) => {
    switch (action.type) {
        case "FETCH_ALL_USERS": return {
            ...state,
            loading: true
        }
        case "FETCH_ALL_USERS_SUCCESS": return {
            ...state,
            loading: false,
            usersList: action.payload,
            err: null
        }
        case "FETCH_ALL_USERS_FAIL": return {
            ...state,
            loading: false,
            usersList: null,
            err: action.payload
        }
        default: return state;
    }
}

export default usersData;