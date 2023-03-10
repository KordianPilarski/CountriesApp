import {createContext, useEffect} from 'react';
import {useState} from 'react';
import axios from 'axios';

export const CountriesContext = createContext({
  countries: [],
  getCountries: () => {},
  getCountry: id => {},
  getRandomCountry: () => {},
});

const CountriesContextProvider = ({children}) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios('https://restcountries.com/v3.1/region/europe').then(res => {
      const newCountries = res.data.map(country => ({
        id: country.cca2,
        name: country.name.common,
        officialName: country.name.official,
        capital: country.capital,
        region: country.region,
        languages: country.languages,
        flag: country.flags.png,
        population: country.population,
      }));
      setCountries(newCountries);
    });
  }, []);

  const getCountry = id => {
    return countries.find(country => country.id === id);
  };

  //for later use
  const getRandomCountry = () => {
    const countriesLength = countries.length;
    const randomNum = Math.floor(Math.random() * countriesLength) + 1;
    const randomCountry = countries[randomNum];
    return randomCountry;
  };

  const value = {countries, getCountry, getRandomCountry};

  return (
    <CountriesContext.Provider value={value}>
      {children}
    </CountriesContext.Provider>
  );
};

export default CountriesContextProvider;
