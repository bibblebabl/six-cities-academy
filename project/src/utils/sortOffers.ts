import { Offer } from '../types';

export const sortOffers = (offers: Offer[], sortType: string): Offer[] => {
  let sortedOffers = [...offers];

  switch (sortType) {
    case 'Price: low to high':
      sortedOffers = sortedOffers.sort((a, b) => a.price - b.price);
      break;
    case 'Price: high to low':
      sortedOffers = sortedOffers.sort((a, b) => b.price - a.price);
      break;
    case 'Top rated first':
      sortedOffers = sortedOffers.sort((a, b) => b.rating - a.rating);
      break;
    default:
      break;
  }

  return sortedOffers;
};
