import React, { useState } from "react";
import { Navbar } from "./";
import { Puppies } from "./";
import { fetchPuppies } from "../api-adapter/index";

const Main = () => {
  const [allPuppies, setAllPuppies] = useState([]);

  async function getAllPuppies() {
    try {
      const allPupps = await fetchPuppies();
      console.log("allPupps");
    } catch (error) {}
  }
  console.log(fetchPuppies());

  return <div id="main">{<Navbar />}</div>;
};

export default Main;
