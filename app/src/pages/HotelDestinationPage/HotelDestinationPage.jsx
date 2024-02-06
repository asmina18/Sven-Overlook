import { Title } from "../../components/Title/Title";
import {  CountryList} from "../../components/Destination/CountryList";
import { NavLink } from 'react-router-dom';
import { useState } from "react";

export const HotelDestinationPage = () => {


      const [selectedCountry, setSelectedCountry] = useState(null);
    
      const handleCountrySelect = (countrySlug) => {
        setSelectedCountry(countrySlug);
      };
      
    
    
      return (
        <>
        <Title title="HOTELLER & DESTINATIONER " />

        <div>
          <nav>
            <NavLink to="/destinations/danmark" onClick={() => handleCountrySelect('danmark')}>Danmark</NavLink>
            <NavLink to="/destinations/sverige" onClick={() => handleCountrySelect('sverige')}>Sverige</NavLink>
            <NavLink to="/destinations/norge" onClick={() => handleCountrySelect('norge')}>Norge</NavLink>
            <NavLink to="/destinations/findland" onClick={() => handleCountrySelect('findland')}>Findland</NavLink>
            <NavLink to="/destinations/tyskland" onClick={() => handleCountrySelect('tyskland')}>Tyskland</NavLink>
            <NavLink to="/destinations/polen" onClick={() => handleCountrySelect('polen')}>Polen</NavLink>

          </nav>
          <CountryList selectedCountry={selectedCountry} />
          {/* ...другие компоненты, которые зависят от selectedCountry... */}
        </div>
      
        </>
      )
    };
    