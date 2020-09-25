import React, { useState } from 'react';
import './FoodItem.css';
import foodData from './foodData'
import SingleFoodItem from '../SingleFoodItem/SingleFoodItem';

const FoodItem = () => {
  const [foodItems] = useState(foodData)
  const [category, setCategory] = useState('breakfast')
  const categoryHandler = (category) => {
    setCategory(category)
  }

  return (
    <div className="container-fluid">
      <div className="navbar-expand">
        <ul className="navbar-nav nav-button justify-content-center">
          <li className="nav-item">
            <button className={category === 'breakfast' ? 'focus-button' : ""} onClick={() => categoryHandler('breakfast')}>Breakfast</button>
          </li>
          <li className="nav-item">
            <button className={category === 'lunch' ? 'focus-button' : ""} onClick={() => categoryHandler('lunch')}>Lunch</button>
          </li>
          <li className="nav-item">
            <button className={category === 'dinner' ? 'focus-button' : ""} onClick={() => categoryHandler('dinner')}>Dinner</button>
          </li>
        </ul>
      </div>
      <div className="d-flex flex-wrap">
      {
        foodItems.map(foodItem => {
          return(
            foodItem.category === category && 
          <SingleFoodItem foodItem={foodItem} key={foodItem.key}></SingleFoodItem>
          ) 
        })
      }
      </div>
    </div>
  );
};

export default FoodItem;