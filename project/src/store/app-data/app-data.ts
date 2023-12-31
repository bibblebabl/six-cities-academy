import { createSlice } from '@reduxjs/toolkit';
import { AppData } from '../../types/state';
import { NameSpace } from '../../const';
import {
  getOfferByIdAction,
  getOffersAction,
  getOffersNearbyAction,
  getReviewsbyIdAction,
  postReviewAction,
} from '../api-actions';

const initialState: AppData = {
  offers: [],
  offerById: null,
  offersNearby: [],
  reviews: [],
  isLoading: false,
};

export const appData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getOffersAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isLoading = false;
      })
      .addCase(getOfferByIdAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOfferByIdAction.fulfilled, (state, action) => {
        state.offerById = action.payload;
        state.isLoading = false;
      })
      .addCase(getOfferByIdAction.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getOffersNearbyAction.fulfilled, (state, action) => {
        state.offersNearby = action.payload;
      })
      .addCase(postReviewAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(getReviewsbyIdAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      });
  },
});
