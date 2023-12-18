import { City, Offer } from './../types/index';
import { createReducer } from '@reduxjs/toolkit';
import {
  changeCity,
  getOfferById,
  getOffers,
  requireAuthorization,
  setIsOffersLoadingStatus,
  setSortType,
} from './action';
import { AuthorizationStatus, SortType } from '../const';

type InitialState = {
  city: City;
  offers: Offer[];
  offerById: Offer | null;
  sortType: SortType;
  authorizationStatus: AuthorizationStatus;
  isOffersLoading: boolean;
};

const initialState: InitialState = {
  city: {
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13,
    },
  },
  offers: [],
  offerById: null,
  sortType: 'POPULAR',
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersLoading: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      const { name, location } = action.payload.city;

      state.city = { name, location };
    })
    .addCase(setSortType, (state, action) => {
      state.sortType = action.payload.sortType;
    })
    .addCase(getOffers, (state, action) => {
      state.offers = action.payload.offers;
    })
    .addCase(getOfferById, (state, action) => {
      state.offerById = action.payload.offer;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setIsOffersLoadingStatus, (state, action) => {
      state.isOffersLoading = action.payload.isOffersLoading;
    });
});

export { reducer };
