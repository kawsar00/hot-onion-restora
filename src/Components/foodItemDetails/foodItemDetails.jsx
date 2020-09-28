import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './FoodItemDetails.css';
import foodData from '../FoodItem/foodData'
import Item from '../Item/Item';


const FoodItemDetails = () => {
  const {itemKey} = useParams()
  const [Items] = useState(foodData)
  const foodItems = Items.find(item => item.key === itemKey)

  return (
    <div style={{margin:'100px 0px'}} className="container-fluid d-flex justify-content-center">
      {
        <Item foodItems={foodItems} itemKey={itemKey}></Item>
      }
    </div>
  );
};

export default FoodItemDetails;