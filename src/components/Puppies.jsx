import React from "react";

const Puppies = (props) => {
  const allPuppies = props.allPuppies;
  console.log(allPuppies);
  return (
    <div>
      {allPuppies.map((puppie, idx) => {
        return (
          <div key={idx}>
            <h3>{puppie.name}</h3>
            <h3>{puppie.breed}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Puppies;
