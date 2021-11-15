import { configureStore } from '@reduxjs/toolkit'
import moviesReducer from './movies'
import createSagaMiddleware from "redux-saga";
import saga from './sagas'

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: { movies: moviesReducer },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware)
});

sagaMiddleware.run(saga);

export default store;