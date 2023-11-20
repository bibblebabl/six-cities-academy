import { Offer } from '../../types';
type PropertyDescriptionListProps = {
  offer: Offer[];
};
function PropertyDescriptionList({ offer }: PropertyDescriptionListProps) {
  const ratingProperty = (rating: number): string =>
    ((rating * 5) / 100).toFixed(1);

  return (
    <>
      {offer.map((property) => (
        <div key={property.id} className="property__wrapper">
          {property.premium && (
            <div className="property__mark">
              <span>Premium</span>
            </div>
          )}
          <div className="property__name-wrapper">
            <h1 className="property__name">{property.cardName}</h1>
            <button
              className={`property__bookmark-button button ${
                property.bookmark ? 'property__bookmark-button--active' : ''
              }`}
              type="button"
            >
              <svg
                className={`${
                  property.bookmark
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
              <span style={{ width: `${property.rating}%` }}></span>
              <span className="visually-hidden">Rating</span>
            </div>
            <span className="property__rating-value rating__value">
              {ratingProperty(property.rating)}
            </span>
          </div>
          <ul className="property__features">
            <li className="property__feature property__feature--entire">
              {property.housingType}
            </li>
            <li className="property__feature property__feature--bedrooms">
              {property.bedrooms ? `${property.bedrooms} ${property.bedrooms > 1 ? 'Bedrooms' : 'Bedroom'}` : '1 Bedroom'}
            </li>
            <li className="property__feature property__feature--adults">
              Max {property.maxAdults ? `${property.maxAdults} ${property.maxAdults > 1 ? 'adults' : 'adult'}` : '2 adults'}
            </li>
          </ul>
          <div className="property__price">
            <b className="property__price-value">&euro;{property.value}</b>
            <span className="property__price-text">&nbsp;night</span>
          </div>
          <div className="property__inside">
            <h2 className="property__inside-title">What&apos;s inside</h2>
            <ul className="property__inside-list">
              <li className="property__inside-item">Wi-Fi</li>
              <li className="property__inside-item">Washing machine</li>
              <li className="property__inside-item">Towels</li>
              <li className="property__inside-item">Heating</li>
              <li className="property__inside-item">Coffee machine</li>
              <li className="property__inside-item">Baby seat</li>
              <li className="property__inside-item">Kitchen</li>
              <li className="property__inside-item">Dishwasher</li>
              <li className="property__inside-item">Cabel TV</li>
              <li className="property__inside-item">Fridge</li>
            </ul>
          </div>
          <div className="property__host">
            <h2 className="property__host-title">Meet the host</h2>
            <div className="property__host-user user">
              <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                <img
                  className="property__avatar user__avatar"
                  src="img/avatar-angelina.jpg"
                  width="74"
                  height="74"
                  alt="Host avatar"
                />
              </div>
              <span className="property__user-name">Angelina</span>
              <span className="property__user-status">Pro</span>
            </div>
            <div className="property__description">
              <p className="property__text">
                A quiet cozy and picturesque that hides behind a a river by the
                unique lightness of Amsterdam. The building is green and from
                18th century.
              </p>
              <p className="property__text">
                An independent House, strategically located between Rembrand
                Square and National Opera, but where the bustle of the city
                comes to rest in this alley flowery and colorful.
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default PropertyDescriptionList;