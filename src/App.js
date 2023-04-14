import React, { useState } from "react";
import "./App.css";
import Babel_Logo from "./babel-logo.png";
import Webpack_logo from "./webpack-logo.png";
import React_log from "./react-logo.png";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <div>
        <a href="https://babeljs.io/" target="_blank">
          <img src={Babel_Logo} className="logo" alt="babel logo" />
        </a>
        <a href="https://webpack.js.org/" target="_blank">
          <img src={Webpack_logo} className="logo webpack" alt="React logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={React_log} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Webpack + React + Babel</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)} class="ctnbtn">
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Webpack,Babel and React logos to learn more
      </p>
    </div>
  );
};

export default App;
