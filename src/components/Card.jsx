import React from "react";
import { data } from "../data";
const Card = () => {
  return (
    <div className="card-list">
      <div className="card">
        {data.map((item) => {
          return (
            <div key={item.id}>
              <section>
                <img src={item.image.original} alt="" />
                <h5>Name:{item.name}</h5>
                <h1>Kind:{item.kind}</h1>
              </section>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
