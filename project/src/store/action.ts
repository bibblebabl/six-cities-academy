import { createAction } from '@reduxjs/toolkit';
import { City } from '../types';

export const changeCity = createAction<{ city: City }>('location/changeCity');
