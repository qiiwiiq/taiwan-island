import { useState, useEffect } from 'react';

import CityTownSelector from '../components/CityTownSelector';
import CusineList from '../components/CusineList';

let cityTownData = {};
let cusineData = [];

const RuralCusine = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedTown, setSelectedTown] = useState('');

  const transformData = (dataArr) => {
    const cityTown = {};
    const data = [];

    for (let item of dataArr) {
      const { ID, Name, City, Town, FoodFeature, PicURL } = item;
      if (!cityTown[City]) {
        cityTown[City] = new Set();
      }

      cityTown[City].add(Town);
      data.push({
        ID,
        Name,
        City,
        Town,
        FoodFeature,
        PicURL,
      });
    }

    cityTownData = cityTown;
    cusineData = data;
  };

  const fetchData = () => {
    fetch('https://data.coa.gov.tw/Service/OpenData/ODwsv/ODwsvTravelFood.aspx')
      .then((response) => response.json())
      .then((data) => {
        transformData(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError('Something wrong...');
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const cityChangeHandler = (city) => {
    setSelectedTown('');
    setSelectedCity(city);
  };

  const townChangeHandler = (town) => {
    setSelectedTown(town);
  };

  return (
    <div>
      <h1>農村地方美食小吃特色料理</h1>
      <CityTownSelector
        cityTown={cityTownData}
        selectedCity={selectedCity}
        onChangeCity={cityChangeHandler}
        onChangeTown={townChangeHandler}
      />
      <CusineList
        selectedCity={selectedCity}
        selectedTown={selectedTown}
        cusineData={cusineData}
      />
    </div>
  );
};

export default RuralCusine;
