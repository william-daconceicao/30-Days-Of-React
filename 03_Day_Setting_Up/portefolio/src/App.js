import logo from './logo.svg';
import './App.scss';
import React, { useState } from 'react';
import ColorList from './ColorList/colorList';
import Weather from './Weather/weather';


function App() {
  const randomColor = () => Math.floor(Math.random()*16777215).toString(16);
  const numcols = 5;
  const numrows = 4;

  const generateLine = (array) => {
    for (var i=0; i < numcols; i++) {
      array.push('#' + randomColor());
    }

    return array;
  }

  const generateColors = () => {
    const values = [];
    for (var i = 0; i < numrows; i++) {
      values[i] = generateLine([]);
    }

    return values;
  }

  const seasons = ['Winter', 'Spring', 'Summer', 'Fall'];
  const [season, setSeason] = useState();
  const [colors, setColors] = useState(generateColors());

  return (
    <div className="App">
      <Weather season={season}></Weather>
      <header className="App-header">
        <div class="seasons-selector">
          {seasons.map(el => <button class="season-button" onClick={() => setSeason(el)}>{el}</button>)}
        </div>

        {/* <button onClick={() => setColors(generateColors())}>
          Generate
        </button> 
        <div className="app-header-container">
          {season}
          <ColorList colors={colors}  />
        </div> */}

      </header>      
    </div>
  );
}

export default App;
