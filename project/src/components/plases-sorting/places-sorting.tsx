import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setSortType } from '../../store/action';
import { SORT_TYPE, SortTypes } from '../../const';

function PlacesSorting() {
  const dispatch = useAppDispatch();
  const sortType = useAppSelector((state) => state.sortType);

  const [placesOptionActive, setPlacesOptionActive] = useState(false);

  const handleSortOptionClick = (selectedSortType: SortTypes) => {
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
        {Object.entries(SORT_TYPE).map(([key, value]) => (
          <li
            key={key}
            className={`places__option ${
              sortType === value ? 'places__option--active' : ''
            }`}
            tabIndex={0}
            onClick={() => handleSortOptionClick(value as SortTypes)}
          >
            {value}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default PlacesSorting;
