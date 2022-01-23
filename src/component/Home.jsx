import React from 'react';
import Products from './Products';

const Home = () => {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img src="/assets/wp6904036.jpeg" class="card-img" alt="Background" height="550px" />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">New trends</h5>
            <p className="card-text lead fs-2">Have a look in our new products</p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
}

export default Home;