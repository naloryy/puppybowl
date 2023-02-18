import React from "react";

const Puppies = (props) => {
  const allPuppies = props.allPuppies;

  return (
    <div className="container">
      {allPuppies.map((puppy, idx) => {
        return (
          <div key={idx} id="cardContainer" className="pups">
            <h3 id="name">{puppy.name}</h3>
            <img className="pupsImg" src={puppy.imageUrl} alt="" />
            <button onClick={() => `/Details/${puppy.id}`} className="button">
              details
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Puppies;
