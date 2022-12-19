import HeroCard from '../components/HeroCard';
import Header from '../components/Header';

export default function HeroesVotes({ currentCity, changeCity }) {
  return (
    <section>
      <Header changeCity={changeCity} currentCity={currentCity} />
      <HeroCard currentCity={currentCity} />
    </section>
  );
}
