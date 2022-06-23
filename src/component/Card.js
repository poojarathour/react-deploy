import React from "react";
import Header from "./Header";
import Aside from "./Aside";
import FetchAPI from "./FetchAPI";

const Card = () => {
  return (
    <>
      <div class="container">
        <Header />
        <Aside />
        <div id="main" class="grid">
          <FetchAPI />
        </div>
      </div>
    </>
  );
};

export default Card;
