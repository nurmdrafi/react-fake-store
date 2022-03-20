import React from "react";
import "./Product.css";

const Product = (props) => {
  const { title, price, category, description, image } = props.product;
  const {plus, minus} = props.counter;
  return (
    <div className="col">
      <div className="card h-100">
        <img className="card-img-top" src={image} alt="Card image cap"></img>
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title}</h5>
          <h3>Price: {price}</h3>
          <h4>{category}</h4>
          <p className="card-text">{description.slice(0, 150) + "..."}</p>
          <div className="mt-auto">
            <div className="d-flex justify-content-around">
              <button className="btn btn-primary" onClick={plus}>
                Add to Cart
              </button>
              <button className="btn btn-danger" onClick={minus}>
                Delete
              </button>
              <button className="btn btn-success">
                Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
