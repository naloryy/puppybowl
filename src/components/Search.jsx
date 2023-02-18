import React from "react";
import { useState } from "react";
import { fetchPuppies } from "../api-adapter";

function Search() {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");

  async function sentToDataBase(name, breed) {
    try {
      console.log("hello");
      const getName = await fetchPuppies();
      const getPuppies = getName.filter(
        (puppy) => puppy.name && (breed ? puppy.breed : true)
      );
      console.log(getPuppies);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          sentToDataBase(name, breed);
        }}
      >
        <label>
          Name:
          <input
            name="name"
            type="text"
            value={name}
            onChange={(event) => {
              console.log(event.target.value);
              setName(event.target.value);
            }}
          />
        </label>
        <label>
          Breed:
          <input
            name="breed"
            type="text"
            value={breed}
            onChange={(event) => {
              console.log(event.target.value);
              setBreed(event.target.value);
            }}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Search;
