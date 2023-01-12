
import React from "react";
import "../App.css"
const DogCart = ({item}) => {
  let dogId = item.id;
  return (
    <div   style={{ border: "box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;", padding: "1%", boxSizing: "border-box"   }}
    data-cy={`dog-card-wrapper-${dogId}`}>
    
      <div>
        <div data-cy="dog-name">{item}</div>
        <div data-cy="dog-category">{item.category}</div>
      </div>
    </div>
  );
};

export default DogCart;
