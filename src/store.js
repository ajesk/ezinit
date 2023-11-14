import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import characters from './reducers/characters';
import combat from './reducers/combat';
import page from './reducers/page';


const reducer = combineReducers({
    characters, page, combat
});

const store = configureStore({
    reducer,
});

export default store;
