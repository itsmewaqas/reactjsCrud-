
const intialState = {
    taskList: [], 
    err: null,
    loading: false, 
};

const taskData = (state = intialState, action) => {
    switch (action.type) {
        case "FETCH_ALL_TASKS": return {
            ...state,
            loading: true
        }
        case "FETCH_ALL_TASKS_SUCCESS": return {
            ...state,
            loading: false,
            taskList: action.payload,
            err: null
        }
        case "FETCH_ALL_TASKS_FAIL": return {
            ...state,
            loading: false,
            taskList: null,
            err: action.payload
        }
        default: return state;
    }
}

export default taskData;