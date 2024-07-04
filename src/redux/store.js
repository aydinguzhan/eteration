import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers'; // Root reducer'ınızı tanımladığınız dosya

const store = configureStore({
    reducer: rootReducer,
});

export default store;
