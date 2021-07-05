/* eslint-disable react/prop-types */
import React from 'react';
import {
  Line, LineChart, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';

function MainChart({ countryName, chartData }) {
  return (
    <LineChart
      width={800}
      height={300}
      data={chartData}
      margin={{
        top: 5, right: 20, bottom: 5, left: 0,
      }}
    >
      <Line width="20px" type="monotone" dataKey="Mundo" stroke="#b53737" />
      <Line type="monotone" dataKey={`${countryName}`} stroke="green" />
      <CartesianGrid stroke="gray" />
      <XAxis dataKey="day" />
      <YAxis />
      <Tooltip />
    </LineChart>
  );
}

export default MainChart;
