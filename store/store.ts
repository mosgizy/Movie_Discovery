import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import movie from './slice/movie';
// import { fetchMoviesApi } from './slice/fetchMovie';

export const store = configureStore({
  reducer: {
    movie,
    // user: userSlice,
    // [fetchMoviesApi.reducerPath]: fetchMoviesApi.reducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(fetchMoviesApi.middleware),
});

setupListeners(store.dispatch);
