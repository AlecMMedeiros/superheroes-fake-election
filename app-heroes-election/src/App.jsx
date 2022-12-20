import { useEffect } from 'react';
import HeroesVotes from './pages/HeroesVotes';
import { useContext } from 'react';
import ElectionContext from './context/ElectionContext';

function App() {
  const { fetchAllCities } = useContext(ElectionContext)
  const { baseData } =  useContext(ElectionContext);

  useEffect(() => {
    fetchAllCities(baseData); 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [baseData]);

  return (    
      <main>    
        <HeroesVotes />
      </main>
    );
}

export default App;
