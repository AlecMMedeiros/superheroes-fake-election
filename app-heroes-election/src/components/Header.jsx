export default function Header({ currentCity, changeCity }) {
  const handleCity = ({ currentTarget }) => {
    changeCity(currentTarget.value);
  };
  return (
    <>
      <div
        className={`flex flex-col items-center gap-2
         fixed top-0 h-28 w-screen shadow-md shadow-[#262626] text-sm text-gray-200 text-center font-josefim `}
      >
        <h1 className="text-2xl font-semibold mt-2 w-screen bg-[#121212]">{currentCity.cityName}</h1>
        <div className="flex gap-2 mt-2 bg-[#121212]">
        <span>Voters: {Intl.NumberFormat().format(currentCity.votingPopulation)}</span>
        <span>Absence: {Intl.NumberFormat().format(currentCity.absence)}</span>
        <span>Presence: {Intl.NumberFormat().format(currentCity.presence)}</span>
        </div>
        <select
          onChange={handleCity}
          className='place-self-center rounded-md shadow-md shadow-[#262626] mx-4 text-center bg-[#363636] focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500'
        >
          <option value='Asgard'>Asgard</option>
          <option value='Gotham'>Gotham</option>
          <option value='Themyscira'>Themyscira</option>
          <option value='Metropolis'>Metropolis</option>
          <option value='Smallville'>Smallville</option>
        </select>
      </div>
    </>
  );
}
