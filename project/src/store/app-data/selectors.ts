import { NameSpace } from '../../const';
import { Offer, Review } from '../../types';
import { State } from '../../types/state';

export const getOffers = (state: State): Offer[] => state[NameSpace.Data].offers;
export const getOfferById = (state: State): Offer | null => state[NameSpace.Data].offerById;
export const getOffersNearby = (state: State): Offer[] => state[NameSpace.Data].offersNearby;
export const getReviewsbyId = (state: State): Review[] => state[NameSpace.Data].reviews;
export const getLoadingStatus = (state: State): boolean => state[NameSpace.Data].isLoading;
