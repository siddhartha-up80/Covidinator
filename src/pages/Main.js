import React, { useState } from "react";
import Navbar from "../components/Navbar";
import List from "../components/List";
import { useEffect } from "react";

const Main = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  // getting data from api using fetch, await
  const getCovidData = async () => {
    const res = await fetch("https://data.covid19india.org/data.json");

    const actualData = await res.json();
    setData(actualData.statewise);
  };

  //search filter function

    const filteredData = data.filter((val)=>{
        return search === "" ? val : val.state.toUpperCase().includes(search.toUpperCase());
    })


  // using useEffect to run and get data after first render the page
  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <div>
      <Navbar setSearch={setSearch} search={search} />
      <List data={filteredData} />
    </div>
  );
};

export default Main;
