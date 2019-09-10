import React from 'react';

const Header = (props) => {
  return (
    <div>
      <h1>ToDo App</h1>
      <h4>{props.subtitle}</h4>
    </div>
  )
}

export default Header;