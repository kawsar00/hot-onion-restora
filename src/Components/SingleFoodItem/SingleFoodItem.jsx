import React from 'react';
import { Link } from 'react-router-dom';
import './SingleFoodItem.css'

const SingleFoodItem = (props) => {
  const { img, title, price, description, key } = props.foodItem
  return (
    <Link to={"/foodItem/"+key} className="col-md-4">
      <div className="card text-center p-5 mb-2 card-shadow border-0 border">
        <img className="card-img-top" src={img} alt="" />
        <h5 className="card-title mt-2 text-dark">{title}</h5>
        <p className="card-text text-muted">{description}</p>
        <p className="font-weight-bold text-dark">${price}</p>
      </div>
    </Link>
  );
};

export default SingleFoodItem;