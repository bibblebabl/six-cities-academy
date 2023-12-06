import { City, Offer } from './../types/index';
import { createReducer } from '@reduxjs/toolkit';
import { changeCity, setSortType } from './action';
import { placeCardsMock } from '../mock/offers';

type InitialState = {
  city: City;
  offers: Offer[];
  sortType: string;
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
  offers: placeCardsMock,
  sortType: 'Popular',
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      const { name, location } = action.payload.city;

      state.city = { name, location };
    })
    .addCase(setSortType, (state, action) => {
      state.sortType = action.payload.sortType;
    });
});

export { reducer };
