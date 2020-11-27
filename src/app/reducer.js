import { combineReducers } from 'redux';

const rootReducer = combineReducers({ todos, visibilityFilter });
function todos(state = [], action){
    switch(action.type){
        case 'ADD_TODO':
            return [
                ...state,
                {
                    text: action.text,
                    completed: false,
                }
            ];
        case 'COMPLETE_TODO':
            return [
                ...state.slice(0, action.index),
                Object.assign({}, state[action.index], {
                    completed: !state[action.index].completed,
                }),
                ...state.slice(action.index + 1)
            ]
        default:
            return state;
    }
}

function visibilityFilter(state = 'SHOW_ALL', action){
    switch(action.type){
        case 'SET_VISIBILITY_FITER':
            return action.filter;
        default:
            return state;
    }
}
export default rootReducer;