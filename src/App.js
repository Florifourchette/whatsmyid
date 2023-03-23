import React, { useState } from "react";
import axios from "axios";
import Map from "./Map";
import { useEffect } from "react";

const App = () => {
  const keyIP = process.env.REACT_APP_API_KEY;
  const keyCountry = process.env.REACT_APP_API_KEY_COUNTRY;

  const [locationIP, setLocationIP] = useState([]);
  const [countryData, setCountryData] = useState([]);
  const [flag, setFlag] = useState([]);
  const [buttonclicked, setButtonClicked] = useState(true);
  const [lat, setlat] = useState(48.068004);
  const [lng, setlng] = useState(21.611263);
  const [countryID, setCountryID] = useState("FR");
  const [IpDisplayed, setIPDisplayed] = useState("");

  const getIPData = async () => {
    try {
      const fetchedData = await axios.get(`https://ipapi.co/json/`);
      setLocationIP(fetchedData);
      setCountryID(fetchedData.data?.country);
    } catch (e) {
      console.log(e.message);
    }
  };

  const getCountryData = async () => {
    try {
      const fetchedData = await axios.get(
        `https://restcountries.com/v3.1/alpha/${countryID}`
      );
      setCountryData(fetchedData);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getIPData();
  }, [buttonclicked]);

  useEffect(() => {
    getCountryData();
  }, [countryID]);

  const handleClick = () => {
    setIPDisplayed(locationIP.data?.ip);
    setFlag(countryData.data[0]?.flags.svg);
    setlat(locationIP.data?.latitude);
    setlng(locationIP.data?.longitude);
  };

  return (
    <div>
      <button onClick={handleClick}>Get my IP address</button>
      <div>
        {IpDisplayed}
        <br />
        <img id="flag" src={flag} />
      </div>
      <Map lat={lat} lng={lng} />
    </div>
  );
};

export default App;
