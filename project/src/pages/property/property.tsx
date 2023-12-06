import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PropertyDescriptionList from '../../components/property-description-list/property-description-list';
import Reviews from '../../components/reviews/reviews';
import NearPlaces from '../../components/near-places/near-places';
import Map from '../../components/map/map';
import { reviews } from '../../mock/reviews';
import { useAppSelector } from '../../hooks';
import PropertyGallery from '../../components/property-gallery/property-gallery';

function Property(): JSX.Element {
  const offers = useAppSelector((state) => state.offers);
  const activeCity = useAppSelector((state) => state.city);
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [hoveredPlaceCardId, setHoveredPlaceCardId] = useState<number | null>(
    null
  );

  const setActiveCard = (cardId: number | null) => {
    setHoveredPlaceCardId(cardId);
  };

  const currentOffer = offers.find((offer) => offer.id.toString() === id);

  useEffect(() => {
    if (!currentOffer) {
      navigate('/404');
    }
  }, [currentOffer, id, navigate]);

  const currentOffersNearby = offers.filter(
    (offer) => offer.id.toString() !== id
  );

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width="81"
                  height="41"
                />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a
                    className="header__nav-link header__nav-link--profile"
                    href="#todo"
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">
                      Oliver.conner@gmail.com
                    </span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#todo">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--property">
        <section className="property">
          <PropertyGallery offer={currentOffer} />
          <div className="property__container container">
            {currentOffer ? (
              <PropertyDescriptionList offer={currentOffer} />
            ) : null}
            <Reviews reviews={reviews} offerId={id} />
          </div>

          <section className="property__map map">
            <Map
              city={activeCity}
              offers={currentOffersNearby}
              placeLocationId={hoveredPlaceCardId}
            />
          </section>
        </section>
        <div className="container">
          <NearPlaces
            offers={currentOffersNearby}
            setActiveCard={setActiveCard}
          />
        </div>
      </main>
    </div>
  );
}

export default Property;
