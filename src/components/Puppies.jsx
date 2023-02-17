import React from "react";

const Puppies = (props) => {
  const allPuppies = props.allPuppies;
  console.log(allPuppies);
  return (
    <div>
      {allPuppies.map((puppie, idx) => {
        return (
          <div className="container">
            <div key={idx} id="cardContainer" className="pups">
              <h3 id="name">{puppie.name}</h3>
              <img className="pupsImg" src={puppie.imageUrl} alt="" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Puppies;
