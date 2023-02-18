import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Router } from "react-router-dom";

const Puppies = (props) => {
  const allPuppies = props.allPuppies;

  return (
    <div className="container">
      {allPuppies.map((puppy, idx) => {
        return (
          <div key={idx} id="cardContainer" className="pups">
            <h3 id="name">{puppy.name}</h3>
            <img className="pupsImg" src={puppy.imageUrl} alt="" />

            <Link to={`http://localhost:3000/player/${puppy.id}`}>
              <button className="detailBtn">Details</button>
            </Link>
          </div>
        );
      })}
      <Outlet />
    </div>
  );
};

export default Puppies;
