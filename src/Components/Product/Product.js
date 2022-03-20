import React from "react";
import "./Product.css";

const Product = (props) => {
  const { title, price, category, description, image } = props.product;
  return (
    <div className="col">
      <div className="card h-100">
        <img className="card-img-top" src={image} alt="Card image cap"></img>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h3>Price: {price}</h3>
          <h4>{category}</h4>
          <p className="card-text">{description.slice(0,150) + "..."}</p>
          <a href="#" className="btn btn-primary">
            Add to Cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default Product;
