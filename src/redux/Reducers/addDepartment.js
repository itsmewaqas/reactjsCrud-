
const intialState = {
    departmentList: [],
    err: null,
    loading: false, 
};

const addDepartment = (state = intialState, action) => {
    switch (action.type) {
        
        case "ADD_DEPARTMENT": return {
            ...state,
            loading: true
        }
        case "ADD_DEPARTMENT_SUCCESS": return {
            ...state,
            loading: false,
            departmentList: action.payload,
            err: null
        }
        case "ADD_DEPARTMENT_FAIL": return {
            ...state,
            loading: false,
            departmentList: null,
            err: action.payload
        }

        case "UPDATE_DEPARTMENT": return {
            ...state,
            loading: true 
        }
        case "UPDATE_DEPARTMENT_SUCCESS": return {
            ...state,
            loading: false,
            departmentList: action.payload,
            err: null
        }
        case "UPDATE_DEPARTMENT_FAIL": return {
            ...state,
            loading: false,
            departmentList: null,
            err: action.payload
        }

        default: return state;
    }
}

export default addDepartment;





















// export default function (state = {
//     restResponse: {
//         list: [],
//         err: null
//     }
// }, action) {
//     switch (action.type) {

//         case 'REGIS_STAFF':
//             return {
//                 ...state,
//                 addingStaff: true
//             }

//         case 'REGISTER_STAFF_SUCCESS':
//             let { name, email, password, staffId, type, resedentialAddress, city, region, postCode, personalMobile, isActive, isBlocked, } = action.payload;
//             return {
//                 ...state,
//                 addingStaff: false,
//                 restResponse: {
//                     list: action.payload,
//                     name, email, password, staffId, type, resedentialAddress, city, region, postCode, personalMobile, isActive, isBlocked,
//                     err: null
//                 }
//             }
//         case 'REGISTER_STAFF_FAIL':
//             return {
//                 ...state,
//                 addingStaff: false,
//                 restResponse: {
//                     list: null,
//                     err: action.payload
//                 }
//             }
//     }
//     return state;
// }