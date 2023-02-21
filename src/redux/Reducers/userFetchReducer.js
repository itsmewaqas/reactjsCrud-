
const intialState = {
    userFetchList: [],
    err: null,
    loading: false, 
};

const userFetchReducer = (state = intialState, action) => {
    switch (action.type) {
    
        case "FETCH_USER": return {
            ...state,
            loading: true 
        }
        case "FETCH_USER_SUCCESS": return {
            ...state,
            loading: false,
            userFetchList: action.payload,
            err: null
        }
        case "FETCH_USER_FAIL": return {
            ...state,
            loading: false,
            userFetchList: null,
            err: action.payload
        }

        case "LOGOUT": return {
            ...state,
            userFetchList: null
        }

        default: return state;
    }
}

export default userFetchReducer;
