
const intialState = {
    userDeletedList: [],
    err: null,
    loading: false, 
};

const userDeleteReducer = (state = intialState, action) => {
    switch (action.type) {
    
        case "DELETE_USER": return {
            ...state,
            loading: true 
        }
        case "DELETE_USER_SUCCESS": return {
            ...state,
            loading: false,
            userDeletedList: action.payload,
            err: null
        }
        case "DELETE_USER_FAIL": return {
            ...state,
            loading: false,
            userDeletedList: null,
            err: action.payload
        }

        default: return state;
    }
}

export default userDeleteReducer;
