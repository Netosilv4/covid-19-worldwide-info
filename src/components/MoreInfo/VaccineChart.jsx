/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import {
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area,
} from 'recharts';

function VaccineChart({ chartData }) {
  const [data, setData] = useState([]);

  const makeChart = () => {
    const aux = [];
    for (let index = 0; index < chartData.length - 1; index += 1) {
      aux.push({
        day: `Dia ${index + 1}`,
        Daily: chartData[index].daily,
        amt: 2400,
        pv: 2400,
      });
    }
    setData(aux);
  };

  useEffect(() => {
    makeChart();
  }, []);

  return (
    <ResponsiveContainer width="80%" height={300}>
      <AreaChart
        data={data}
        margin={{
          top: 0, right: 0, bottom: 0, left: 0,
        }}
      >
        <Area width="20px" type="monotone" dataKey="Daily" stroke="#b53737" />
        <CartesianGrid stroke="gray" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default VaccineChart;
