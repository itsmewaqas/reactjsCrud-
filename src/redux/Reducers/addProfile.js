
const intialState = {
    profileList: [],
    err: null,
    loading: false, 
};

const addProfile = (state = intialState, action) => {
    switch (action.type) {
        
        case "ADD_PROFILE": return {
            ...state,
            loading: true
        }
        case "ADD_PROFILE_SUCCESS": return {
            ...state,
            loading: false,
            profileList: action.payload,
            err: null
        }
        case "ADD_PROFILE_FAIL": return { 
            ...state,
            loading: false,
            profileList: null,
            err: action.payload
        }

        default: return state;
    }
}

export default addProfile;





















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