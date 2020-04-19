import React from 'react';

const catShow = (props) => {
  return (
    <div>
      <h1>This will be a cat.</h1>
      <div>
        <img className="small image cat" src="<%= cat_image(props.url) %>"/>
      </div>
    </div>
  )
}

export default catShow;
