import { Offer } from '../../types';
import { ratingProperty } from '../../utils';
type PropertyDescriptionListProps = {
  offer: Offer;
};
function PropertyDescriptionList({ offer }: PropertyDescriptionListProps) {
  const {
    id,
    title,
    isPremium,
    isFavorite,
    rating,
    type,
    bedrooms,
    maxAdults,
    price,
    goods,
    host,
    description,
  } = offer;
  return (
    <div key={id} className="property__wrapper">
      {isPremium && (
        <div className="property__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="property__name-wrapper">
        <h1 className="property__name">{title}</h1>
        <button
          className={`property__bookmark-button button ${
            isFavorite ? 'property__bookmark-button--active' : ''
          }`}
          type="button"
        >
          <svg
            className={`${
              isFavorite
                ? 'place-card__bookmark-icon'
                : 'property__bookmark-icon'
            }`}
            width="31"
            height="33"
          >
            <use href="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>
      </div>
      <div className="property__rating rating">
        <div className="property__stars rating__stars">
          <span style={{ width: `${ratingProperty(rating)}%` }}></span>
          <span className="visually-hidden">Rating</span>
        </div>
        <span className="property__rating-value rating__value">{rating}</span>
      </div>
      <ul className="property__features">
        <li className="property__feature property__feature--entire">{type}</li>
        <li className="property__feature property__feature--bedrooms">
          {bedrooms
            ? `${bedrooms} ${bedrooms > 1 ? 'Bedrooms' : 'Bedroom'}`
            : '1 Bedroom'}
        </li>
        <li className="property__feature property__feature--adults">
          Max{' '}
          {maxAdults
            ? `${maxAdults} ${maxAdults > 1 ? 'adults' : 'adult'}`
            : '2 adults'}
        </li>
      </ul>
      <div className="property__price">
        <b className="property__price-value">&euro;{price}</b>
        <span className="property__price-text">&nbsp;night</span>
      </div>
      <div className="property__inside">
        <h2 className="property__inside-title">What&apos;s inside</h2>
        <ul className="property__inside-list">
          {goods.map((item) => (
            <li key={item} className="property__inside-item">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="property__host">
        <h2 className="property__host-title">Meet the host</h2>
        <div className="property__host-user user">
          <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
            <img
              className="property__avatar user__avatar"
              src={host.avatarUrl}
              width="74"
              height="74"
              alt="Host avatar"
            />
          </div>
          <span className="property__user-name">{host.name}</span>
          <span className="property__user-status">
            {host.isPro ? 'Pro' : ''}
          </span>
        </div>
        <div className="property__description">
          <p className="property__text">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default PropertyDescriptionList;
