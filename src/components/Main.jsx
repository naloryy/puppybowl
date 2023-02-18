import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Puppies } from "./";
import { fetchPuppies } from "../api-adapter";
import { Search } from "./";

const Main = () => {
  const [allPuppies, setAllPuppies] = useState([]);

  async function getAllPuppies() {
    try {
      const allPupps = await fetchPuppies();
      setAllPuppies(allPupps);
    } catch (error) {}
  }

  useEffect(() => {
    getAllPuppies();
  }, []);

  return (
    <div id="main">
      {<Search />}
      <Puppies allPuppies={allPuppies} />
      <Outlet />
    </div>
  );
};

export default Main;
