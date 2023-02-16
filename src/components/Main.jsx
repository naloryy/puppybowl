import React, { useState } from "react";
import { Navbar } from "./";
import { Puppies } from "./";

const Main = () => {
  const [allPuppies, setallPuppies] = useState([]);

  async function getPuppies() {
    try {
      const allPuppies = await fetch(
        "https://fsa-puppy-bowl.herokuapp.com/api/2301-FTB-ET-WEB-FT/players"
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div id="main">
      {<Navbar />}
      <Puppies />
    </div>
  );
};

export default Main;
