import React from 'react'

const ColorList = (props) => {  
  return props.colors.map((line) => 
    <div key={line} className="app-header-line">{
      line.map(cell =>
        <span key={ cell } style = {{ backgroundColor: cell }} className="app-header-cell">{cell}</span>
      )
    }</div>
  );
}

export default ColorList;