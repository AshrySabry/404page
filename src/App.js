import React from 'react';
import sad from './sad-face.png';
import './App.css';

function App() {
  return (
    <div className="App1">
      <div className="left">
      <img src={sad} className="sad"/>
      </div>
      <div className="right">
        <h1 className="small">404</h1>
        <h3>The requested page cannot be found</h3>
        <div>
          <button className="button">
            Contact EDP
          </button>
          <button className="button">
            Home
          </button>
        </div>
      </div>
    </div>
  );
}


export default App;