import { Title } from "../../components/Title/Title";
import { CountryList } from "../../components/Destination/CountryList";
import { useState } from "react";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";
import { Country } from "../../components/Destination/Country";

export const HotelDestinationPage = () => {


  const [selectedCountry, setSelectedCountry] = useState(null);
  const breadcrumbs = ["Valg af land",]

  const handleCountrySelect = (countrySlug) => {
    setSelectedCountry(countrySlug);
  };

  console.log(" er du selectedCoundtry", selectedCountry);

  return (
    <>
      <Title title="HOTELLER & DESTINATIONER " />

      <div>
        <nav> 
          <ul>
            <li onClick={() => handleCountrySelect('danmark')}>Danmark</li>
            <li onClick={() => handleCountrySelect('sverige')}>Sverige</li>
            <li onClick={() => handleCountrySelect('norge')}>Norge</li>
            <li onClick={() => handleCountrySelect('findland')}>Findland</li>
            <li onClick={() => handleCountrySelect('tyskland')}>Tyskland</li>
            <li onClick={() => handleCountrySelect('polen')}>Polen</li>
          </ul>
        </nav>
        <Breadcrumbs items={breadcrumbs} />
        <Country selectedCountry={selectedCountry} />
        <CountryList selectedCountry={selectedCountry} />
      </div>

    </>
  )
};
