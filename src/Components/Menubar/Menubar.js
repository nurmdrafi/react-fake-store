import "./Menubar.css";
import logo from "../../../src/logo.png";
import CustomLink from "../CustomLink/CustomLink";
const Menubar = () => {
  return (
    <div>
      <div className="container">
        <div className="d-flex mt-3">
          <div className="col-md-2">
            <img src={logo} alt="" style={{ width: "200px", height: "50px" }} />
          </div>
          <div className="col-md-10 menu-container">
            <nav>
              <CustomLink to="/home">Home</CustomLink>
              <CustomLink to="/order-review">Order Review</CustomLink>
              <button>Cart</button>
              <CustomLink to="/login">Login</CustomLink>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Menubar;
