import React from 'react';
import Banner from '../Banner/Banner';
import FoodItem from '../FoodItem/FoodItem';
import Service from '../Service/Service';

const Home = () => {
  return (
    <div className="container-fluid">
      <Banner></Banner>
      <FoodItem></FoodItem>
      <Service></Service>
    </div>
  );
};

export default Home;