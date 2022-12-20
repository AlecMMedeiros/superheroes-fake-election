import { useEffect } from 'react';
import HeroesVotes from './pages/HeroesVotes';
import { useContext } from 'react';
import ElectionContext from './context/ElectionContext';
import Loading from './components/Loading';
import Error from './components/Error';


function App() {
  const { fetchAllCities, baseData, loading, error } = useContext(ElectionContext)  ;

  useEffect(() => {
    fetchAllCities(baseData); 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [baseData]);

  return (   
     
      <main>
        { error ? <Error error={error}/> : loading ? <Loading /> :  <HeroesVotes /> }
      </main>
    );
}

export default App;
