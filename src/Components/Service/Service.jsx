import React, { useState } from 'react';
import SingleService from '../SingleService/SingleService';
import serviceData from './serviceData'

const Service = () => {
  const [service] = useState(serviceData)
  
  return (
    <div>
      <div className="col-md-12 text-center pt-5">
        <h1>Why you choose us</h1>
        <p className="w-50 m-auto pt-3 pb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas aperiam consectetur distinctio eveniet repellat rem rerum minus nobis necessitatibus sint.</p>
      </div>
      <div className="d-flex ">
      {
        service.map(serviceItem => <SingleService serviceItem={serviceItem}key={serviceItem.key}></SingleService>)
      }
      </div>
    </div>
  );
};

export default Service;