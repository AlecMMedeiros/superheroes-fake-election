import  { useState } from 'react'
import { formatApiData } from '../services/cities.service';
import ElectionContext from './ElectionContext'

function ElectionProvider({children}) { 
  const [baseData, setBaseData] = useState('Asgard');
  const [currentCity, setCurrentyCity] = useState([]);

  const fetchAllCities = async (getSelectedCity) => {
    const getData = await formatApiData(getSelectedCity);
    setCurrentyCity(getData);
  };


  const changeCity=(newcity)=>{
    setBaseData(newcity);
  }
  return (
    <ElectionContext.Provider value={{baseData, currentCity, fetchAllCities, changeCity }}>{children}</ElectionContext.Provider>  
  )
}

export default ElectionProvider;
