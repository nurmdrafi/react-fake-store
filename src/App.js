import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menubar from './Components/Menubar/Menubar';
import AllProducts from './Components/AllProducts/AllProducts';
import { useState } from 'react';

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
      <AllProducts counter={counter}></AllProducts>
    </div>
  );
}

export default App;
