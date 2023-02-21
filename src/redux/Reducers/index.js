import { combineReducers } from 'redux';


import userAddReducer from './userAddReducer';
import userFetchReducer from './userFetchReducer';
import userDeleteReducer from './userDeleteReducer';
import loginData from './loginReducers';
// import ProfileData from './profileReducers';

// import userAdd from './userAdd';
// import userFetch from './userFetch';

// import addtocart from './addtocart';
// import changTheNumber from './updown';
// import getUsers from './users';
// import loginData from './loginReducers';
// import fetchadminuser from './fetchadminuser';
// import fetchEmployee from './fetchEmployee';
// import fetchDepartment from './fetchDepartment';
// import fetchProject from './fetchProject';
// import fetchTasks from './fetchTasks';
// import addDepartment from './addDepartment';
// import updateEmp from './updateEmp'; 
// import addProfile from './addProfile';
// import fetchProfile from './fetchProfile';


const rootReducer = combineReducers({

    userAddReducer,
    userFetchReducer,
    userDeleteReducer,
    loginData,
    // ProfileData

    // userAdd,
    // userFetch,

    // addtocart,
    // changTheNumber,
    // getUsers,
    // loginData,
    // fetchadminuser,
    // fetchEmployee,
    // fetchDepartment,
    // fetchProject,
    // fetchTasks,
    // addDepartment,
    // updateEmp,
    // addProfile,
    // fetchProfile
})

export default rootReducer;

// export default combineReducers({
//     addtocart,
// })