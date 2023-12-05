export type Offer = {
  city: {
    location: {
      latitude: number;
      longitude: number;
      zoom: number;
    };
    name: string;
  };
  description: string;
  goods: string[];
  host: {
    avatarUrl: string;
    id: number;
    isPro: boolean;
    name: string;
  };
  id: number;
  images: string[];
  isFavorite: boolean;
  isPremium: boolean;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  bedrooms: number;
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
};

export type Review = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: {
    avatarUrl: string;
    id: number;
    isPro: boolean;
    name: string;
  };
};

export type PropertiesLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type City = {
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  name: string;
};
