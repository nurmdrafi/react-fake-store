import "./Menubar.css";
import logo from '../../../src/logo.png'
const Menubar = (props) => {
  return (
    <div>
      <div className="container">
        <div className="d-flex mt-3">
        <div className="col-md-2"><img src={logo} alt="" style={{width: '200px', height: '50px'}} /></div>
        <div className="col-md-10 menu-container">
          <a href="">Home</a>
          <a href="">Contact</a>
          <a href="">Cart <sup>{props.count}</sup></a>
          <a href="">Login</a>
        </div>
        </div>
      </div>
    </div>
  );
};
export default Menubar;
