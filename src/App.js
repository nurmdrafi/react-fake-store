import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menubar from './Components/Menubar/Menubar';
import AllProducts from './Components/AllProducts/AllProducts';
import { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Routes, Route } from "react-router-dom";
import OrderReview from './Components/OrderReview/OrderReview';
import Login from './Components/Login/Login';

function App() {
  const [count, setCount] = useState(0);

  const counter = {
    plus: function () {
      let newCount = count + 1;
      setCount(newCount);
    },
    minus: function () {
      if (count <= 0) {
        return;
      }
      let newCount = count - 1;
      setCount(newCount);
    },
  };
  return (
    <div className="App">
      <Menubar count={count}></Menubar>
      <Routes>
        <Route path="/" element={<AllProducts counter={counter}></AllProducts>}></Route>
        <Route path="/home" element={<AllProducts counter={counter}></AllProducts>}></Route>
        <Route path="/order-review" element={<OrderReview></OrderReview>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
AOS.init()
