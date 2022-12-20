import  { useState } from 'react'
import citiesServices from '../services';
import ElectionContext from './ElectionContext'

function ElectionProvider({children}) { 
  const [baseData, setBaseData] = useState('Asgard');
  const [currentCity, setCurrentyCity] = useState([]);
  const [loading , setLoading ] = useState(true)
  const [ error , setError ] = useState(false)

  const fetchAllCities = async (getSelectedCity) => {
    try {
      const getData = await citiesServices.formatApiData(getSelectedCity);
      setLoading(false)      
      setCurrentyCity(getData);
    } catch (error) {
      setError(error.message)
    }
  };



  const changeCity=(newcity)=>{
    setBaseData(newcity);
  }
  return (
    <ElectionContext.Provider value={{baseData, currentCity, loading, error, fetchAllCities, changeCity }}>{children}</ElectionContext.Provider>  
  )
}

export default ElectionProvider;
