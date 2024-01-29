import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { Offer, Review } from '../types';
import { APIRoute, AppRoute } from '../const';
import { redirectToRoute } from './action';
import { AuthData } from '../types/auth-data';
import { UserData, UserDataProfile } from '../types/user-data';
import { dropToken, saveToken } from '../services/token';
import { ReviewData } from '../types/review-data';

export const getOffersAction = createAsyncThunk<
  Offer[],
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/getOffers', async (_arg, { extra: api }) => {
  const { data } = await api.get<Offer[]>(APIRoute.Offers);

  return data;
});

export const getOfferByIdAction = createAsyncThunk<
  Offer,
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/getOfferById', async (offerId, { extra: api }) => {
  const { data } = await api.get<Offer>(`${APIRoute.Offers}/${offerId}`);

  return data;
});

export const getOffersNearbyAction = createAsyncThunk<
  Offer[],
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/getOffersNearby', async (offerId, { extra: api }) => {
  const { data } = await api.get<Offer[]>(
    `${APIRoute.Offers}/${offerId}/nearby`
  );
  return data;
});

export const getReviewsbyIdAction = createAsyncThunk<
  Review[],
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/getReviewsbyId', async (hotelId, { extra: api }) => {
  const { data } = await api.get<Review[]>(`${APIRoute.Reviews}/${hotelId}`);
  return data;
});

export const postReviewAction = createAsyncThunk<
  Review[],
  [ReviewData, string],
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/postReview', async ([{ comment, rating }, hotelId], { extra: api }) => {
  const { data } = await api.post<Review[]>(`${APIRoute.Reviews}/${hotelId}`, {
    comment,
    rating,
  });

  return data;
});

export const checkAuthAction = createAsyncThunk<
  UserDataProfile,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/checkAuth', async (_arg, { extra: api }) => {
  const {
    data: { email, avatarUrl },
  } = await api.get<UserData>(APIRoute.Login);
  return { email: email, avatarUrl: avatarUrl };
});

export const loginAction = createAsyncThunk<
  UserDataProfile,
  AuthData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const {
      data: { token, avatarUrl },
    } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(token);
    dispatch(redirectToRoute(AppRoute.Root));
    return { avatarUrl: avatarUrl, email: email };
  }
);

export const logoutAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/logout', async (_arg, { extra: api }) => {
  await api.delete(APIRoute.Logout);
  dropToken();
});

export const postFavoriteAction = createAsyncThunk<
  Offer,
  [number, number],
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/postFavorite', async ([isFavorite, id], { extra: api }) => {
  const { data } = await api.post<Offer>(
    `${APIRoute.Favorites}/${id}/${isFavorite}`
  );
  return data;
});

export const getFavoritesOffersAction = createAsyncThunk<
  Offer[],
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/getFavoritesOffers', async (_arg, { extra: api }) => {
  const { data } = await api.get<Offer[]>(`${APIRoute.Favorites}`);
  return data;
});
