import React from 'react';
import './Banner.css'

const Banner = () => {
  return (
    <div className="banner-bg">
      <div className="form-style">
        <h1>Best food waiting for your belly</h1>
        <form action="">
          <span className="position-relative"><input className="searchBox" type="text" placeholder="Search food items" /></span>
          <span className="position-absolute"><input className=" btn red-button" type="submit" value="Search" /></span>
        </form>
      </div>

    </div>
  );
};

export default Banner;