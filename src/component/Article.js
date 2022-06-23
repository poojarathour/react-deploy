import React from "react";
function Article(props) {
  return (
    <article>
      <div className="card">
        <img src={props.imgsrc} alt="spax-one" className="card__image" />
        <div className="card_info">
          <h5>{props.titel}</h5>
          <p>{props.id}</p>
          <p>{props.year}</p>
          <p>{props.lounch}</p>
          <p>{props.landg}</p>
        </div>
      </div>
    </article>
  );
}

export default Article;
