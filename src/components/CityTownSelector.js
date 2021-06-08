let cities = null;
let towns = null;

const CityTownSelector = ({
  cityTown,
  selectedCity,
  onChangeCity,
  onChangeTown,
}) => {
  if (Object.keys(cityTown).length !== 0) {
    cities = Object.keys(cityTown).map((city) => (
      <option key={city} value={city}>
        {city}
      </option>
    ));
  }

  if (Object.keys(cityTown).length !== 0 && selectedCity) {
    towns = [...cityTown[selectedCity]].map((town) => (
      <option key={town} value={town}>
        {town}
      </option>
    ));
  }

  const selectCityHandler = (event) => {
    const city = event.target.value;
    onChangeCity(city);
  };

  const selectTownHandler = (event) => {
    const town = event.target.value;
    onChangeTown(town);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-white p-4">
      <select
        className="form-select md:w-2/3 md:justify-self-end bg-gray-200 rounded border-none outline-none focus:ring-0"
        onChange={selectCityHandler}
      >
        <option value="">請選擇縣市</option>
        {cities}
      </select>
      <select
        className="form-select md:w-2/3 md:justify-self-start bg-gray-200 rounded border-none outline-none focus:ring-0"
        onChange={selectTownHandler}
      >
        <option value="">請選擇鄉鎮區</option>
        {towns}
      </select>
    </div>
  );
};

export default CityTownSelector;
