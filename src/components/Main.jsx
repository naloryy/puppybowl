import React, { useState, useEffect } from "react";
import { Navbar } from "./";
import { Puppies } from "./";
import { fetchPuppies } from "../api-adapter";

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
      {<Navbar />}
      <Puppies allPuppies={allPuppies} />
    </div>
  );
};

export default Main;
