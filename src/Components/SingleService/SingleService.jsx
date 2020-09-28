import React, { useState } from 'react';
import './SingleService.css'

const SingleService = (props) => {
  const { title, img, icon, desc } = props.serviceItem
  const [seeMore, setSeeMore] = useState(true)

  return (
    <div className="col-md-4">
      <div className="card card-style card-shadow">
        <img className="img-fluid card-img" src={img} alt="" />
        <div className="card-body d-flex">
          <div className="col-md-2 mr-3">
            <img src={icon} alt=""/>
          </div>
          <div className="col-md-10">
          <h5 className="card-title">{title}</h5>
          
          <p style={{width:'85%'}} className="card-text">
            {
              seeMore ? 
              desc.substr(0,105):
              desc
            }
          </p>
          {
            seeMore ? <button onClick={() => setSeeMore(false)} className="seeMore-btn">See more &#8594;</button>
            :
            <button onClick={() => setSeeMore(true)} className="seeMore-btn">See less &#8592;</button>
          }
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleService;