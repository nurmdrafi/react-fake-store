import useProducts from "../../hooks/useProducts";
import Product from "../Product/Product";

const AllProducts = (props) => {
  const [products, setProducts] = useProducts()
  return (
    <div className="container">
        <h1>All Products</h1>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {products.map((product) => (
          <Product key={product.id} product={product} counter={props.counter}></Product>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
