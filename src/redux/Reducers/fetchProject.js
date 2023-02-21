
const intialState = {
    projectList: [], 
    err: null,
    loading: false, 
};

const projectData = (state = intialState, action) => {
    switch (action.type) {
        case "FETCH_ALL_PROJECT": return {
            ...state,
            loading: true
        }
        case "FETCH_ALL_PROJECT_SUCCESS": return {
            ...state,
            loading: false,
            projectList: action.payload,
            err: null
        }
        case "FETCH_ALL_PROJECT_FAIL": return {
            ...state,
            loading: false,
            projectList: null,
            err: action.payload
        }
        default: return state;
    }
}

export default projectData;