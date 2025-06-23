import React from 'react';

function Slider() {
  return (
    <div className="container">
      <div className="content">
        <h1 className="title">Your Food court<br />at home</h1>
        <div className="buttons">
          <a href="#" className="btn btn-delivery"><strong>Delivery</strong><br /><small>Order in</small></a>
          <a href="#" className="btn btn-takeout"><strong>Takeout</strong><br /><small>Grab and go</small></a>
        </div>
      </div>
      <div className="image-container">
        <img src="/asset/img/Slider/Photo.svg" alt="" />
      </div>
    </div>
  );
}

export default Slider;
