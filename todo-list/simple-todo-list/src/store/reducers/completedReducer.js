import ActionTypes from '../actions/actionTypes';
import INITIAL_STATE from '../../data/data';

function completedReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ActionTypes.COMPLETED : {
            let newState = Object.assign({}, state, { value: action.payload });
            return newState;
        }
        default: return state;
    }
}

export default completedReducer;