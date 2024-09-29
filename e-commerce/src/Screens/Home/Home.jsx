import React from "react";

export const Home = () => {
  return (
    <div style={{height:'90vh'}} className="container-fluid d-flex align-items-center justify-content-center">
      <div className="text-center">
        <h1 className="display-4 fw-bold">Welcome to Our Product Store</h1>
        <p className="lead fw-bold">Find the best products at amazing prices.</p>
        <button className="btn btn-dark btn-lg mt-3 fw-bold">Shop Now</button>
      </div>
    </div>
  );
};
