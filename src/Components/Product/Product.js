import React from "react";
import ReactModal from "../ReactModal/ReactModal";
import "./Product.css";

const Product = (props) => {
  const {title, price, image } = props.product;
  const {plus, minus} = props.counter;
  return (
    <div data-aos="flip-right" className="col">
      <div className="card h-100">
        <img className="card-img-top" src={image} alt="Card image cap"></img>
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title}</h5>
          <h3 className="mt-auto">Price: ${price}</h3>
            <div className="d-flex justify-content-around">
              <button className="btn btn-primary" onClick={plus}>
                Add to Cart
              </button>
              <button className="btn btn-danger" onClick={minus}>Delete</button>
              <ReactModal product={props.product}></ReactModal>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
