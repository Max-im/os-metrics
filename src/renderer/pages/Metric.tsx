import React, { useContext } from 'react';
import { LineChart, Line, CartesianGrid } from 'recharts';
import { useParams } from 'react-router-dom';
import DataContext from '../context/DataContext';
import IData, { IDynamicData } from '../../interfaces/Data';
import '../styles/metric.css';

export default function Metric() {
  const params = useParams();
  const id = params.id as keyof IDynamicData;
  const OsData = useContext<IData[]>(DataContext);
  const flowData = OsData.map((item) => item.dynamicData[id]);
  const last = flowData[flowData.length - 1].value;
  let max = 0;
  let min = Number.MAX_VALUE;
  let sum = 0;

  for (const item of flowData) {
    sum += item.value;
    if (item.value > max) max = item.value;
    if (item.value < min) min = item.value;
  }
  const avg = sum / flowData.length;

  return (
    <div>
      <h2>{flowData[0].name} Metric</h2>

      <table>
        <tr>
          <th>Min</th>
          <th>Max</th>
          <th>Avg</th>
          <th>Last</th>
        </tr>
        <tr>
          <td>{min}</td>
          <td>{max}</td>
          <td>{avg.toFixed()}</td>
          <td>{last}</td>
        </tr>
      </table>
      <LineChart width={370} height={180} data={flowData}>
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
      </LineChart>
    </div>
  );
}
