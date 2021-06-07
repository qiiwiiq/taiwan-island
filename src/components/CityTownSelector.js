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
    <div>
      <select onChange={selectCityHandler}>
        <option value="">請選擇縣市</option>
        {cities}
      </select>
      <select onChange={selectTownHandler}>
        <option value="">請選擇鄉鎮區</option>
        {towns}
      </select>
    </div>
  );
};

export default CityTownSelector;
