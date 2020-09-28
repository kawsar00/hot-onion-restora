import { faHome, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Item.css'

const Item = (props) => {
  const { img, title, fullDesc, price } = props.foodItems
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(price);
  const plusQuantity = () => {
    setQuantity(quantity + 1);
    setTotalPrice(totalPrice + price)
  }
  const minusQuantity = () => {
    setQuantity(quantity - 1);
    setTotalPrice(totalPrice - price)

  }
  return (
    <>
      <div className="col-md-4 mr-5 mt-5">
        <h1>{title}</h1>
        <p className="text-muted mt-5">{fullDesc}</p>
        <div className="d-flex">
          <h2 className="font-weight-bold">${totalPrice}</h2>
          <div className="quantity ml-5">
            {
              quantity > 1 ?
              <button onClick={minusQuantity} className=" font-weight-bold">-</button>
              :
              <button disabled className=" font-weight-bold">-</button>
            }
            
            <span className="mx-3">{quantity}</span>
            {
              quantity < 20 ?
              <button onClick={plusQuantity} className=" font-weight-bold">+</button>
              :
              <button disabled className="font-weight-bold"><small className="text-danger">maximum limit reached</small></button>
            }
          </div>
        </div>
        <div className="mt-5">
        <button style={{width:"17vh"}} className="btn red-button"><FontAwesomeIcon className="mr-2" icon={faShoppingCart} />Add</button>
        <Link to="/" className="btn home-button ml-3"><FontAwesomeIcon className="mr-2" icon={faHome} />Home</Link>
        </div>
      </div>
      <div className="col-md-4">
        <img style={{ width: '100%' }} src={img} alt="" />
      </div>
    </>
  );
};

export default Item;