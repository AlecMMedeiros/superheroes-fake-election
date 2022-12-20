import { useEffect } from 'react';
import HeroesVotes from './pages/HeroesVotes';
import { useContext } from 'react';
import ElectionContext from './context/ElectionContext';
import Loading from './components/Loading';

function App() {
  const { fetchAllCities, baseData, loading } = useContext(ElectionContext)  ;

  useEffect(() => {
    fetchAllCities(baseData); 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [baseData]);

  return (    
      <main>
        { loading ? <Loading /> :  <HeroesVotes /> }
      </main>
    );
}

export default App;
