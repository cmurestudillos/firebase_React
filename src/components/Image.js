import React from 'react';

const Image = (props) => {
    return props.completed
      ? <div className="w3-third w3-center"><i className="fa fa-anchor w3-padding-64 w3-text-red"></i></div> 
      : <div className="w3-third w3-center"><i className="fa fa-anchor w3-padding-64 w3-text-red"></i></div>
  }

  export default Image;