export default function HeroCard({ currentCity }) {
  const sortedData = currentCity.results
    ? currentCity.results.sort((a, b) => b.votes - a.votes)
    : '';
  return (
    <div className='grid grid-cols-2 grid-flow-row-dense md:grid-cols-4 h-auto gap-2 mx-4 mt-28 items-center shadow-2xl rounded-md bg-[#363636]'>
      {sortedData &&
        sortedData
          .sort((a, b) => b.votes - a.votes)
          .map((hero) => {
            return (
              <div
                className='flex flex-col w-40 md:w-48 h-auto place-content-center justify-self-center items-center gap-2 ring-2 ring-sky-500 rounded-md shadow-md shadow-[#121212] my-2 text-xs text-gray-200 font-josefim bg-[#121212] hover:bg-[#262626] hover:border-2 hover:border-sky-500 hover:ring-2 active:absolute active:w-96 active:text-lg active:bg-[#121212] active:top-10'
                key={hero.id}              
                name={hero.name}
              >
                <img
                  className='w-auto h-auto rounded-full'
                  src={hero.image}
                  alt={hero.name}
                />
                <p className='text-base'>
                  <strong>Name</strong>: {hero.name}
                </p>
                <p>
                  <strong>Total Votes</strong>:{' '}
                  {Intl.NumberFormat().format(hero.votes)}
                </p>
                <p>
                  <strong>Valid Votes %</strong>:{' '}
                  {((hero.votes / currentCity.presence) * 100).toFixed(2)}%
                </p>
                {sortedData.indexOf(hero) === 0 ? (
                  <p className='text-green-700 font-semibold text-lg'>
                    Winner!
                  </p>
                ) : (
                  <p className='font-semibold text-lg'>
                    Place: {sortedData.indexOf(hero) + 1}º
                  </p>
                )}
              </div>
            );
          })}
    </div>
  );
}
