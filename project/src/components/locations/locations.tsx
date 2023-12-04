import { useState } from 'react';
import { useAppDispatch} from '../../hooks';
import { changeCity } from '../../store/action';

const locations = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
] as const;

type LocationType = (typeof locations)[number];

function Locations() {
  const [activeLocation, setActiveLocation] = useState<LocationType | null>(
    null
  );

  const dispatch = useAppDispatch();

  const handleSetActiveLink = (location: LocationType) => {
    setActiveLocation(location === activeLocation ? null : location);
    dispatch(changeCity({ city: { name: location } }));
  };

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {locations.map((location) => (
          <li key={location} className="locations__item">
            <a
              className={`locations__item-link tabs__item ${
                activeLocation === location ? 'tabs__item--active' : ''
              }`}
              href="#todo"
              onClick={() => handleSetActiveLink(location)}
            >
              <span>{location}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
export default Locations;
