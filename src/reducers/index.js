import { combineReducers } from 'redux';
import MessagesReducer from './MessagesReducer';

const rootReducer = combineReducers({
    messages: MessagesReducer
});

export default rootReducer;
