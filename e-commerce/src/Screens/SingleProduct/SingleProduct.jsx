import React from 'react';
import { useLocation } from 'react-router-dom';

function SingleProduct() {
  const location = useLocation();
  const { item } = location.state;
 

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6 mb-4">
          <img src={item.image} className="img-fluid" alt={item.title} />
        </div>
        <div className="col-md-6 my-auto text-center">
          <h1>{item.title}</h1>
          <p>{item.description}</p>
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;

