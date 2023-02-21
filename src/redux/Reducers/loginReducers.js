
const intialState = {
    loginDetails: [],
    err: null,
    loading: false,
    success: ''
};

const loginData = (state = intialState, action) => {
    switch (action.type) {
        case "USER_LOGIN": return {
            ...state,
            loading: true,
        }
        case "USER_LOGIN_SUCCESS":
            return {
                ...state,
                loading: false,
                loginDetails: action.payload[1],
                success: action.payload[0],
                err: null
            }
        case "USER_LOGIN_FAIL": return {
            ...state,
            loading: false,
            loginDetails: null,
            success: null,
            err: action.err,
        }

        case "PROFILE_UPDATE": return {
            ...state,
            loading: true,
        }
        case "PROFILE_UPDATE_SUCCESS": return {
            ...state,
            loading: false,
            loginDetails: action.payload.user,
            err: null
        }

        case "PROFILE_UPDATE_FAIL": return {
            ...state,
            loading: false,
            loginDetails: null,
            err: action.err
        }

        case "LOGOUT": return {
            ...state,
            loginDetails: null
        }

        default: return state;
    }
}

export default loginData;



// https://firehydrant.com/blog/graceful-error-handling-with-redux/