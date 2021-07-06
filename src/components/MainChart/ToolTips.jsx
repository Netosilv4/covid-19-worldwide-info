/* eslint-disable react/prop-types */
import React from 'react';

function ToolTips({ countryName }) {
  return (
    <div className="ToolTips">
      <div className="BrasilTooltip">
        <div className="ColorBoxGreen" />
        Deaths in
        {' '}
        {countryName}
      </div>
      <div className="WorldTooltip">
        <div className="ColorBoxRed" />
        World Deaths
      </div>
    </div>
  );
}

export default ToolTips;
