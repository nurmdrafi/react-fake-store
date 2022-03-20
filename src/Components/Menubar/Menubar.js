import "./Menubar.css";

const Menubar = (props) => {
  return (
    <div>
      <div className="container">
        <div className="col-md-2">Logo</div>
        <div className="col-md-10 menu-container">
          <a href="">Home</a>
          <a href="">Contact</a>
          <a href="">Cart {props.count}</a>
          <a href="">Login</a>
        </div>
      </div>
    </div>
  );
};
export default Menubar;
