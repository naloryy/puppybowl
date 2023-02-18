import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchPuppies } from "../api-adapter";
import { Link } from "react-router-dom";

const Details = () => {
  const [allPuppies, setAllPuppies] = useState([]);

  async function getAllPuppies() {
    try {
      const allPupps = await fetchPuppies();
      setAllPuppies(allPupps);
    } catch (error) {}
  }

  useEffect(() => {
    getAllPuppies();
  }, []);

  let { id } = useParams();

  return (
    <div className="details">
      {allPuppies.map((pup, idx) => {
        console.log(id);
        if (pup.id == id) {
          return (
            <div key={idx} className="Container">
              <div className="Card">
                <h3 className="puppyName">{pup.name}</h3>
                <img src={pup.imageUrl} className="img" />
                <div className="list">
                  Breed: {pup.breed}
                  <br />
                  Status: {pup.status}
                  <br />
                  Team: {pup.teamId}
                </div>
              </div>
            </div>
          );
        }
      })}
      <Link className="back" to="http://localhost:3000/">
        Back to the Puppies
      </Link>
    </div>
  );
};

export default Details;
