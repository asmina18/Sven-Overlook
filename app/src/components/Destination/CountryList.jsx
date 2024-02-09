import React, { useState, useEffect } from 'react';
import style from "../../components/Destination/countryList.module.scss";

export const CountryList = ({selectedCountry}) => {
  const [countries, setCountries] = useState([]);

console.log(selectedCountry);

  useEffect(() => {
    fetch('http://localhost:4000/destinations') //​‌‍‌⁡⁢⁣⁢ mne nado zakinut selectedcontry  i ne zabud dobavit i proverit ⁡​
      .then(response => response.json())
      .then(data => setCountries(data))
      .catch(error => console.error('Error', error));
  }, []);

  console.log("data",countries);
  return (
    <div className={style.countryListContainer}>
    <ul>
      {countries.map(country => (
        <li key={country.id}>
          <figure className={style.countryFigure}>
            <img 
              src={`http://localhost:4000/images/${country.CountryImage.country_image_filename}`} 
              alt={country.CountryImage.country_image_title} 
            />
            <figcaption className= {style.countryCaption}>
              <h3>{country.name}</h3>
              <p>{country.description}</p>
            </figcaption>
          </figure>
        </li>
      ))}
    </ul>
  </div>
  
  );
};