import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setSortType } from '../../store/action';

function PlacesSorting() {
  const dispatch = useAppDispatch();
  const sortType = useAppSelector((state) => state.sortType);

  const [placesOptionActive, setPlacesOptionActive] = useState(false);

  const handleSortOptionClick = (selectedSortType: string) => {
    dispatch(setSortType({ sortType: selectedSortType }));
    setPlacesOptionActive(false);
  };

  const handleSetPlacesOptionToggle = () => {
    setPlacesOptionActive(!placesOptionActive);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={handleSetPlacesOptionToggle}
      >
        {sortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use href="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={`places__options places__options--custom ${
          placesOptionActive ? 'places__options--opened' : ''
        }`}
      >
        <li
          className={`places__option ${
            sortType === 'Popular' ? 'places__option--active' : ''
          }`}
          tabIndex={0}
          onClick={() => handleSortOptionClick('Popular')}
        >
          Popular
        </li>
        <li
          className={`places__option ${
            sortType === 'Price: low to high' ? 'places__option--active' : ''
          }`}
          tabIndex={0}
          onClick={() => handleSortOptionClick('Price: low to high')}
        >
          Price: low to high
        </li>
        <li
          className={`places__option ${
            sortType === 'Price: high to low' ? 'places__option--active' : ''
          }`}
          tabIndex={0}
          onClick={() => handleSortOptionClick('Price: high to low')}
        >
          Price: high to low
        </li>
        <li
          className={`places__option ${
            sortType === 'Top rated first' ? 'places__option--active' : ''
          }`}
          tabIndex={0}
          onClick={() => handleSortOptionClick('Top rated first')}
        >
          Top rated first
        </li>
      </ul>
    </form>
  );
}

export default PlacesSorting;
