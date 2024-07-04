import { combineReducers } from 'redux';
import badgeSlice from './badgeSlice'; // Slice reducer'ınızın dosyası

const rootReducer = combineReducers({
    badgeSlice: badgeSlice,
});

export default rootReducer;
