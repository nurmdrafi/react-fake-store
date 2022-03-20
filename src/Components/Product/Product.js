import React from "react";
import "./Product.css";

const Product = (props) => {
  const { title, price, category, description, image } = props.product;
  return (
    <div className="col">
      <div className="card h-100">
        <img className="card-img-top" src={image} alt="Card image cap"></img>
        <div className="card-body d-flex flex-column justify-content-end">
          <h5 className="card-title">{title}</h5>
          <h3>Price: {price}</h3>
          <h4>{category}</h4>
          <p className="card-text">{description.slice(0, 150) + "..."}</p>
          <div className="">
            <div className="d-flex justify-content-around">
              <a href="#" className="btn btn-primary">
                Add to Cart
              </a>
              <a href="" className="btn btn-success">
                Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
