import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { apiGetImages } from '../Services/ImagesAPI';

export const imagesSlice = createSlice({
  name: 'images',
  initialState: {
    images: [],
    isLoading: false,
    lastQuery: '',
    error: false,
  },
  reducers: {
    removeImage: (state, action) => {
      const { index } = action.payload;
      state.images.splice(index, 1);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getImages.fulfilled, (state, action) => {
      state.images = action.payload;
      state.isLoading = false;

      if (state.images.length === 0) {
        state.error = true;
      } else {
        state.error = false;
      }
    })
    .addCase(getImages.pending, (state, action) => {
      state.lastQuery = action.meta.arg;
      state.images = [];
      state.isLoading = true;
    })
  },
});

// Custom Async reducer function
export const getImages = createAsyncThunk('images/getImages', async (query) => {
  const images = await apiGetImages(query);
  return images;
});


// non async reducer function
export const { removeImage } = imagesSlice.actions;

export default imagesSlice.reducer;