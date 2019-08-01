import React from 'react';
import './App.css';
import {route,MapRoute} from './routes'
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <MapRoute route={route}></MapRoute>
        </BrowserRouter>
    </div>
  );
}

export default App;
