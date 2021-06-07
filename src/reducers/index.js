import changeTheNumber from './reducer';
import multTheNumber from './mulDiv';
import todoReducer from './todoReducer'
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    changeTheNumber,
    multTheNumber,
    todoReducer,
});

export default rootReducer;