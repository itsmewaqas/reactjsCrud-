
const intialState = {
    empList: [],
    err: null,
    loading: false, 
};

const empUpdate = (state = intialState, action) => {
    switch (action.type) {
        
        case "UPDATE_EMP": return {
            ...state,
            loading: true 
        }
        case "UPDATE_EMP_SUCCESS": return {
            ...state,
            loading: false,
            empList: action.payload,
            err: null
        }
        case "UPDATE_EMP_FAIL": return {
            ...state,
            loading: false,
            empList: null,
            err: action.payload
        }

        default: return state;
    }
}

export default empUpdate;





















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