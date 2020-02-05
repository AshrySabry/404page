import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';

function App() {
  return (
    <div>
      <header className="App-header">
        <h1 className="small">404</h1>
        <h3>The requested page cannot be found</h3>
        <Button variant="contained" color="primary" disableElevation>
          Contact EDP
        </Button>
      </header>
    </div>
  );
}

export default App;