import React from 'react';
import './App.css';
import { AppBar, Tabs, Tab } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Tabs  aria-label="simple tabs example">
          <Tab label="Item One"  />
          <Tab label="Item Two"  />
          <Tab label="Item Three"  />
        </Tabs>
      </AppBar>
    </div>
  );
}

export default App;
