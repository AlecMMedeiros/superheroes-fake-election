import { instanceAxios } from './api';


const apiGetCityId = async (city) => {
  const fetchedCities = await instanceAxios
    .get('cities', { params: { name: city } })
    .then((response) => response.data);
  return fetchedCities;
};

const mergeElectionWithNames = async (candidatesData, city) => {
  const citiesData = await apiGetCityId(city);
  const electionData = await instanceAxios.get('election', {
    params: { cityId: citiesData[0].id },
  });
  electionData.data.forEach((candidateFomElection) => {
    candidatesData.data.forEach((ele) => {
      if (candidateFomElection.candidateId === ele.id) {
        const index = electionData.data.findIndex(
          (elem) => elem.candidateId === ele.id
        );
        electionData.data[index].name = ele.name
        electionData.data[index].image = ele.image;
      }
    });
  });
  return [electionData, citiesData];
};

export const formatApiData = async (city) => {
  const candidatesData = await instanceAxios.get('candidates', {
    params: { name: null },
  });
  const base = [];
  const mergedData = await mergeElectionWithNames(candidatesData, city);
  mergedData[1].map((ele) => {
    let results = [];
    mergedData[0].data.map((city) => results.push(city));
    return base.push({
      cityName: ele.name,
      votingPopulation: ele.votingPopulation,
      absence: ele.absence,
      presence: ele.presence,
      results: results,
    });
  });

  return base[0];
};
