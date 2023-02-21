
const intialState = {
    employeeList: [], 
    err: null,
    loading: false, 
};

const employeeData = (state = intialState, action) => {
    switch (action.type) {
        case "FETCH_ALL_EMPLOYEE": return {
            ...state,
            loading: true
        }
        case "FETCH_ALL_EMPLOYEE_SUCCESS": return {
            ...state,
            loading: false,
            employeeList: action.payload,
            err: null
        }
        case "FETCH_ALL_EMPLOYEE_FAIL": return {
            ...state,
            loading: false,
            employeeList: null,
            err: action.payload
        }
        default: return state;
    }
}

export default employeeData;