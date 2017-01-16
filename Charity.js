import React from 'react';

const Charity = ({ name, description, url }) => (
  <div>
    <h1><a href={ url }>{ name }</a></h1>
    <p>{ description }</p>
  </div>
)

export default Charity;
