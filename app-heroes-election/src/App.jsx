import { useEffect, useState } from 'react';
import { formatApiData } from './services/cities.service';
import HeroesVotes from './pages/HeroesVotes';

function App() {
  const [baseData, setBaseData] = useState('Asgard');
  const [currentCity, setCurrentyCity] = useState([]);

  const fetchAllCities = async (getSelectedCity) => {
    const getData = await formatApiData(getSelectedCity);
    setCurrentyCity(getData);
  };

  const changeCity=(newcity)=>{
    setBaseData(newcity);
  }

  useEffect(() => {
    fetchAllCities(baseData);
  }, [baseData]);

  return (
    <main>    
      <HeroesVotes changeCity={changeCity} currentCity={currentCity} />
    </main>
  );
}

export default App;
