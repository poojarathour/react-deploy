import React, { useState, useEffect } from "react";

const FetchAPI = () => {
  const [spacdata, setSpacdata] = useState([]);

  const getSpacdata = async () => {
    const response = await fetch(
      "https://api.spacexdata.com/v3/launches?limit=100"
    );
    setSpacdata(await response.json());
  };
  useEffect(() => {
    getSpacdata();
  }, []);

  return (
    <>
      {spacdata.map((curElem) => {
        return (
          <article>
            <div className="card">
              <img
                src={curElem.mission_patch_small}
                alt="spax-one"
                className="card__image"
              />
              <div className="card_info">
                <h5>{curElem.mission_name}</h5>
                <p>Mission id:{curElem.mission_id}</p>
                <p>Launch Year:{curElem.launch_year}</p>
                <p>Successful Launch:</p>
                <p>Successful Landing:</p>
              </div>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default FetchAPI;
