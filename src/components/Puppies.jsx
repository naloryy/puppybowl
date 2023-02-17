import React from "react";

const Puppies = (props) => {
  const allPuppies = props.allPuppies;
  console.log(allPuppies);
  return (
    <div className="container">
      {allPuppies.map((puppie, idx) => {
        return (
          <div key={idx} id="cardContainer" className="pups">
            <h3 id="name">{puppie.name}</h3>
            <img className="pupsImg" src={puppie.imageUrl} alt="" />
            <button className="button">details</button>
          </div>
        );
      })}
    </div>
  );
};

export default Puppies;
