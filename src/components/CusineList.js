import Cusine from './Cusine';

const CusineList = ({ selectedCity, selectedTown, cusineData }) => {
  let filterCusines = cusineData;
  if (selectedCity) {
    filterCusines = cusineData.filter((data) => data.City === selectedCity);

    if (selectedTown) {
      filterCusines = filterCusines.filter(
        (data) => data.Town === selectedTown
      );
    }
  }

  return (
    <div>
      {filterCusines.map((cusine) => (
        <Cusine key={cusine.ID} cusine={cusine} />
      ))}
    </div>
  );
};

export default CusineList;
