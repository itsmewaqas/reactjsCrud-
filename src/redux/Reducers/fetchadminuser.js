
const intialState = {
    adminUserlist: [], 
    err: null,
    loading: false, 
};

const usersData = (state = intialState, action) => {
    switch (action.type) {
        case "FETCH_ALL_ADMIN": return {
            ...state,
            loading: true
        }
        case "FETCH_ALL_ADMIN_SUCCESS": return {
            ...state,
            loading: false,
            adminUserlist: action.payload,
            err: null
        }
        case "FETCH_ALL_ADMIN_FAIL": return {
            ...state,
            loading: false,
            adminUserlist: null,
            err: action.payload
        }
        default: return state;
    }
}

export default usersData;