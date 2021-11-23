import { createStore } from "redux";

const initialState = {
    tasks: []
}

const reducer = (state = initialState, action) => {
    console.log('REDUCER', action);
    if (action.type == 'ADD_TASKS') {
        return {
            ...state,
            tasks: state.tasks.concat(action.payload)
        }
    }
    return state
}

export const ADD_TASKS = 'ADD_TASKS';
export default createStore(reducer)
