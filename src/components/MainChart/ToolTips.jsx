/* eslint-disable react/prop-types */
import React from 'react';

function ToolTips({ countryName }) {
  return (
    <div className="ToolTips">
      <div className="BrasilTooltip">
        <div className="ColorBoxGreen" />
        Mortes no(a)
        {' '}
        {countryName}
      </div>
      <div className="WorldTooltip">
        <div className="ColorBoxRed" />
        Mortes no mundo
      </div>
    </div>
  );
}

export default ToolTips;
