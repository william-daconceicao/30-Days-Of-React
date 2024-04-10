import './weather.scss';
import React, { useEffect, useState } from 'react';

const Summer = () => {
  return <div>
    <div class="sky"></div>
    <div class="sand"></div>
    <div class="wet-sand"></div>
    <div class="sea">
      <div class="seafoam"></div>
    </div>
    <div class="tree">
      <div class="trunk"></div> 
      <div class="foliage">
        <div class="leave leave-1"></div>
        <div class="leave leave-2"></div>
        <div class="leave leave-3"></div>
      </div> 
    </div>
    <div class="sand-front"></div>
  </div>
};

const Fall = () => {
  return <div>
    <div class="trunk">
      <div class="hole"></div>
    </div>
    <div class="foliage"></div>
    {Array(30).fill(1).map((_, i) => <span class='leaf' key={i} />)}
  </div>
};

const Winter = () => {
  return <div>
    {Array(50).fill(1).map((_, i) => <span class='snowflake' key={i} />)}
    <div class="snow"></div>
    <div class="snowmanContainer">
      <div class="snowCap">
        <div class="blackRec"></div>
        <div class="greyRec"></div>
        <div class="blackRec"></div>
      </div>
      <div class="snowTop">
        <div class="eye"></div>
        <div class="glasses"></div>
        <div class="eye"></div>
      </div>
      <div class="snowScarf"></div>
      <div class="snowBottom"></div>
    </div>
  </div>
};

const Weather = (props) => {
  const getSeason = (date) => {
    const month = date.getMonth();
    const seasons = {
      '12': 'winter',
      '1': 'winter',
      '2': 'winter',
      '3': 'spring',
      '4': 'spring',
      '5': 'spring',
      '6': 'summer',
      '7': 'summer',
      '8': 'summer',
      '9': 'fall',
      '10': 'fall',
      '11': 'fall',
    };
    return seasons[month];
  }

  const [season, setSeason] = useState(getSeason(new Date()));
  
  useEffect(() => {
    if(props.season) {
      setSeason(props.season.toLowerCase());
    }
  });

  return <div className={season + ' weather-background'}>
    { season === 'winter' && <Winter/> }
    { season === 'spring' && Array(11).fill(1).map((_, i) => <div className={'flower flower-'+ i} key={i}><span></span></div>) }
    { season === 'summer' && <Summer/>  }
    { season === 'fall' && <Fall/>  }
  </div>
}

export default Weather;