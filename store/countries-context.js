import {createContext, useEffect} from 'react';
import {useState} from 'react';

const axios = require('axios');

export const CountriesContext = createContext({
  countries: [],
  getCountries: () => {},
  getCountry: id => {},
  getRandomCountry: () => {},
});

const CountriesContextProvider = ({children}) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/region/europe')
      .then(res => res.json())
      .then(data => {
        const newCountries = data.map(country => ({
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
        console.log(newCountries);
      });
  }, []);

  console.log(countries);

  const getCountry = id => {
    return countries.find(country => country.id === id);
  };

  const getRandomCountry = () => {
    const countriesLength = countries.length;
    console.log(countriesLength);
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