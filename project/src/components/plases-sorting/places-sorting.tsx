import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { SORT_TYPE, SortType } from '../../const';
import { getSortType } from '../../store/app-process/selectors';
import { setSortType } from '../../store/app-process/app-process';

function PlacesSorting() {
  const dispatch = useAppDispatch();
  const sortType = useAppSelector(getSortType);

  const [placesOptionActive, setPlacesOptionActive] = useState(false);

  const handleSortOptionClick = (selectedSortType: SortType) => {
    dispatch(setSortType(selectedSortType));
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
        {SORT_TYPE[sortType]}
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
              sortType === key ? 'places__option--active' : ''
            }`}
            tabIndex={0}
            onClick={() => handleSortOptionClick(key as SortType)}
          >
            {value}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default React.memo(PlacesSorting);

