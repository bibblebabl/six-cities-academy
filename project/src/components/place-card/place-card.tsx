import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Offer } from '../../types';
import { ratingProperty } from '../../utils';
import { MouseEventHandler } from 'react';

export type PlaceCardProps = {
  offer: Offer;
  setActiveCard?: (id: number | null) => void;
  cardType?: 'cities' | 'favorites' | 'nearPlaces';
  onCardClick?: () => void;
  setFavorite: (
    statusIsFavorite: boolean,
    offerId: number
  ) => MouseEventHandler<HTMLButtonElement> | undefined;
};

export const PLACE_CARD_CLASS_NAMES_MAP = {
  cities: {
    article: 'cities__card',
    imageWrapper: 'cities__image-wrapper',
  },
  nearPlaces: {
    article: 'near-places__card',
    imageWrapper: 'near-places__image-wrapper',
  },
  favorites: {
    article: 'favorites__card',
    imageWrapper: 'favorites__image-wrapper',
  },
};

function PlaceCard({
  offer,
  setActiveCard,
  setFavorite,
  cardType = 'cities',
  onCardClick,
}: PlaceCardProps): JSX.Element {
  const {
    isPremium,
    previewImage,
    price,
    isFavorite,
    type,
    title,
    rating,
    id,
  } = offer;

  const articleClassNames = PLACE_CARD_CLASS_NAMES_MAP[cardType]?.article;
  const imageWrapperClassNames =
    PLACE_CARD_CLASS_NAMES_MAP[cardType]?.imageWrapper;

  const handleMouseOver = () => {
    if (setActiveCard) {
      setActiveCard(id);
    }
  };

  const handleMouseLeave = () => {
    if (setActiveCard) {
      setActiveCard(id);
    }
  };

  return (
    <article
      className={`${articleClassNames} place-card`}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      onClick={onCardClick}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${imageWrapperClassNames} place-card__image-wrapper`}>
        <Link to={`${AppRoute.Property}/${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            style={{
              width: cardType === 'favorites' ? '150px' : '260px',
              height: cardType === 'favorites' ? '110px' : '200px',
            }}
            alt="Place view"
          />
        </Link>
      </div>
      <div
        className={`${
          cardType === 'favorites' ? 'favorites__card-info' : ''
        } place-card__info`}
      >
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button button ${
              isFavorite ? 'place-card__bookmark-button--active' : ''
            }`}
            type="button"
            onClick={setFavorite(isFavorite, id)}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use href="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${ratingProperty(rating)}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Property}/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
