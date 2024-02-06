import React, { useState, useEffect } from 'react';

export const CountryList = () => {
  const [countries, setCountries] = useState([]);



  useEffect(() => {
    fetch('http://localhost:4000/destinations')
      .then(response => response.json())
      .then(data => setCountries(data))
      .catch(error => console.error('Error', error));
  }, []);

  return (
    <div>
      <ul>
        {countries.map(country => (
          <li key={country.id}>
            <figure>
              <figcaption>
                <h3>{country.name}</h3>
                <p>{country.description}</p>
              </figcaption>
            </figure>
            <img 
              src={`http://localhost:4000/images/${country.CountryImage.country_image_filename}`} 
              alt={country.CountryImage.country_image_title} 
            />
          </li>
        ))}
      </ul>
    </div>
  );
};