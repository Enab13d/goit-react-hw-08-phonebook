import { FilterField, FilterLabel } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'features/filter/filterSlice';
import { getFilterValue } from 'features/filter/filterSlice';
import { LuSearch } from 'react-icons/lu';

export const Filter = () => {
  const filter = useSelector(getFilterValue);
  const dispatch = useDispatch();
  return (
    <>
      <FilterLabel htmlFor="filter"><LuSearch/> Find contacts by name</FilterLabel>
      <FilterField
        id="filter"
        onChange={e => dispatch(setFilter(e.target.value))}
        value={filter}
      />
    </>
  );
};
