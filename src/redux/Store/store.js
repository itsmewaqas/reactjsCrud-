// import { createStore, applyMiddleware, compose } from "redux";
// import logger from "redux-logger";
// import thunk from "redux-thunk";
// import rootReducer from "../Reducers/index";
// import promise from "redux-promise-middleware";
// const middleware = applyMiddleware(thunk, logger);
// const store = createStore(rootReducer, middleware);
// export default store;


import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import rootReducer from "../Reducers/index";

function saveToLocalStorage(state) {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem('state', serializedState)
    } catch (e) {
        console.log(e)
    }
}

function loadFromLocalStorage() {
    try {
        const serializedState = localStorage.getItem('state')
        if (serializedState === null) return undefined
        return JSON.parse(serializedState)
    } catch (e) {
        console.log(e)
        return undefined
    }
}

const middleware = applyMiddleware(thunk, logger);
const presistedState = loadFromLocalStorage()
const store = createStore(rootReducer, presistedState, middleware);
store.subscribe(() => saveToLocalStorage(store.getState()))
export default store;




