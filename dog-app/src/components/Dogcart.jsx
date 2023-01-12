
import React from "react";
import "../App.css"
const DogCart = ({item}) => {
  let dogId = item.id;
  return (
    <div   style={{ border: "1px solid", padding: "1%", boxSizing: "border-box"   }}
    data-cy={`dog-card-wrapper-${dogId}`}>
    
      <div>
        <div data-cy="dog-name">{item}</div>
        <div data-cy="dog-category">{item.category}</div>
      </div>
    </div>
  );
};

export default DogCart;
