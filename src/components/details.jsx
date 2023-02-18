import React from "react";
import { useParams } from "react-router-dom";

function Details(props) {
  const { id } = useParams();
  const allPuppies = props.allPuppies;
  const puppy = allPuppies.find((p) => p.id === parseInt(id));

  return (
    <div>
      <h2>{puppy.name}</h2>
      <img src={puppy.imageUrl} alt="" />
      <p>{puppy.description}</p>
    </div>
  );
}

export default Details;
