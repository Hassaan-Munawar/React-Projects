import React, { useEffect, useState } from 'react';
import Cards from '../../Components/Card/Card';

export const Products = () => {
  const [pro, setPro] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((data) => data.json())
      .then((data) => setPro(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container my-5">
      <div className="row">
        {pro.map((item) => (
          <div className="col-md-4 mb-4" key={item.id}>
            <Cards item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

