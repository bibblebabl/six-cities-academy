import { createAction } from '@reduxjs/toolkit';
import { City } from '../types';

export const changeCity = createAction<{ city: City }>('location/changeCity');
export const setSortType = createAction<{ sortType: string }>(
  'place-card-list/setSortType'
);
