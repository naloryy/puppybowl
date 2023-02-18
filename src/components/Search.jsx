import React from "react";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

function Search(props) {
  const [name, setName] = useState("");

  async function sendPuppyData(name) {
    try {
      const filterArray = props.allPuppies.filter((pup, inx) => {
        return pup.name === name;
      });
      setName(" ");
      props.sendPuppyData(filterArray);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="search">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          sendPuppyData(name);
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
        <Link to={`http://localhost:3000/${name.idx}`}>
          <button type="submit">Search</button>
        </Link>
      </form>
      <Outlet />
    </div>
  );
}

export default Search;
