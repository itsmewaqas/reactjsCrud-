
const intialState = {
    userList: [],
    err: null,
    loading: false,
};

const userAdd = (state = intialState, action) => {
    switch (action.type) {

        case "ADD_USER": return {
            ...state,
            loading: true
        }
        case "ADD_USER_SUCCESS": return {
            ...state,
            loading: false,
            userList: action.payload,
            err: null
        }
        case "ADD_USER_FAIL": return {
            ...state,
            loading: false,
            userList: null,
            err: action.payload
        }
        
        default: return state;
    }
}

export default userAdd;