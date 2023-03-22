import React from "react";
import axios from "axios";
import { useEffect } from "react";

const App = () => {
  const getData = async () => {
    const data = await axios.get("");
    console.log(data);
  };

  useEffect(() => getData());

  return <div>Hello</div>;
};

export default App;
