
const intialState = {
    departmentList: [], 
    err: null,
    loading: false, 
};

const departmentData = (state = intialState, action) => {
    switch (action.type) {
        case "FETCH_ALL_DEPARTMENT": return {
            ...state,
            loading: true
        }
        case "FETCH_ALL_DEPARTMENT_SUCCESS": return {
            ...state,
            loading: false,
            departmentList: action.payload,
            err: null
        }
        case "FETCH_ALL_DEPARTMENT_FAIL": return {
            ...state,
            loading: false,
            departmentList: null,
            err: action.payload
        }
        default: return state;
    }
}

export default departmentData;