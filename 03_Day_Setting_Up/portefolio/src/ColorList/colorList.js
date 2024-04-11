import React from 'react'

const Cell = (props) => {
  return <span key={ props.data } style = {{ backgroundColor: props.data }} className="app-header-cell">{props.data}</span>
};


const ColorList = (props) => {  
  return props.colors.map((line) => 
    <div key={line} className="app-header-line">{line.map(cell => <Cell data={cell} />)}</div>
  );
};

export default ColorList;