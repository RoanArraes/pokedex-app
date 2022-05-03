import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import buttonCentralReducer from '../pages/main/components/pokedex-button-central/pokedexButtonCentralSlice';
import buttonSelectReducer from '../pages/main/components/pokedex-button-select/pokedexButtonSelectSlice';
import pokedexSliceReducer from "../pages/main/components/pokedex/pokedexSlice";
import mySaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    buttonCentral: buttonCentralReducer,
    buttonSelect: buttonSelectReducer,
    pokedex: pokedexSliceReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false}).concat(sagaMiddleware)
});

sagaMiddleware.run(mySaga);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch