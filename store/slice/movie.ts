import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'

interface movieI{
  movieDetails:{}
}

const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    movieDetails:{}
  },
  reducers: {
    setLink: (state, action: PayloadAction<movieI>) => { 
      state.movieDetails = action.payload
    },
  },
});

export const { setLink } = movieSlice.actions;

export default movieSlice.reducer;