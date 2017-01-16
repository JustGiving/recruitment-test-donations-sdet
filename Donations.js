import React from 'react';
import uniqueId from 'lodash/uniqueId';

const Donations = ({ donations }) => (
  <ul>
  {
    donations.map(({ amount, donorDisplayName: name }) => (
      <li key={uniqueId()}>&pound;{ amount } - { name }</li>
    ))
  }
  </ul>
)

export default Donations;
