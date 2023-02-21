
const intialState = {
    userDetails: [],
    err: null,
    loading: false,
    message: '',
};

const userAddData = (state = intialState, action) => {
    switch (action.type) {
        case "USER_ADD": return {
            ...state,
            loading: true,
        }
        case "USER_ADD_SUCCESS":
            return {
                ...state,
                loading: false,
                userDetails: action.payload,
                message: action.payload,
                err: null
            }
        case "USER_ADD_FAIL": return {
            ...state,
            loading: false,
            userDetails: null,
            message: action.payload,
            err: action.payload,
        }
        case "LOGOUT": return {
            ...state,
            userDetails: null
        }

        case "USER_UPDATE": return {
            ...state,
            loading: true
        }
        case "USER_UPDATE_SUCCESS": return {
            ...state,
            loading: false,
            userDetails: action.payload.user,
            err: null
        }

        case "USER_UPDATE_FAIL": return {
            ...state,
            loading: false,
            userDetails: null,
            err: action.payload
        }


        case "USER_PROFILE_UPDATE": return {
            ...state,
            loading: true
        }
        case "USER_PROFILE_UPDATE_SUCCESS": return {
            ...state,
            loading: false,
            userDetails: action.payload.user,
            err: null
        }
        case "USER_PROFILE_UPDATE_FAIL": return {
            ...state,
            loading: false,
            userDetails: null,
            err: action.payload
        }


        case "UPDATE_USER_MULTIPLE": return {
            ...state,
            loading: true
        }
        case "UPDATE_USER_MULTIPLE_SUCCESS": return {
            ...state,
            loading: false,
            userDetails: action.payload,
            err: null
        }
        case "UPDATE_USER_MULTIPLE_FAIL": return {
            ...state,
            loading: false,
            userDetails: null,
            err: action.payload
        }

        default: return state;
    }
}

export default userAddData;