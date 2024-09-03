import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './favoritesCities/slice';

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
  },
});