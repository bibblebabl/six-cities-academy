import { useAppSelector } from '../../hooks';
import { sortOffers } from '../../utils/sortOffers';
import PlaceCard from '../place-card/place-card';

type PlacesCardListProps = {
  setActiveCard: (id: number | null) => void;
};

const PlacesCardList = ({ setActiveCard }: PlacesCardListProps) => {
  const offers = useAppSelector((state) => state.offers);
  const activeCity = useAppSelector((state) => state.city.name);
  const sortType = useAppSelector((state) => state.sortType);
  const offersByActiveCity = offers.filter(
    (offer) => offer.city.name === activeCity
  );

  const sortedOffersBySortType = sortOffers(offersByActiveCity, sortType);

  return (
    <div className="cities__places-list places__list tabs__content">
      {sortedOffersBySortType.map((offer) => (
        <PlaceCard key={offer.id} offer={offer} setActiveCard={setActiveCard} />
      ))}
    </div>
  );
};

export default PlacesCardList;
