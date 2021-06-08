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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 my-5">
      {filterCusines.map((cusine) => (
        <Cusine key={cusine.ID} cusine={cusine} />
      ))}
    </div>
  );
};

export default CusineList;
