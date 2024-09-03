import { createSlice } from '@reduxjs/toolkit';

const loadFavorites = () => {
  const favorites = localStorage.getItem('favorites');
  return favorites ? JSON.parse(favorites) : [];
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: loadFavorites(),
  reducers: {
    addFavorite: (state, { payload }) => {
      state.push(payload);
      localStorage.setItem('favorites', JSON.stringify(state));
    },
    removeFavorite: (state, { payload }) => {
      const updatedState = state.filter(city => city !== payload);
      localStorage.setItem('favorites', JSON.stringify(updatedState));
      return updatedState;
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
