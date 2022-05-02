import { configureStore } from "@reduxjs/toolkit";
import buttonCentralReducer from '../pages/main/components/pokedex-button-central/pokedexButtonCentralSlice';
import buttonSelectReducer from '../pages/main/components/pokedex-button-select/pokedexButtonSelectSlice';

export const store = configureStore({
  reducer: {
    buttonCentral: buttonCentralReducer,
    buttonSelect: buttonSelectReducer
  }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch