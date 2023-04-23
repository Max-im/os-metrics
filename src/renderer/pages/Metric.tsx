import React, { useContext } from 'react';
import { LineChart, Line } from 'recharts';
import { useParams } from 'react-router-dom';
import DataContext from '../context/DataContext';
import IData, { IDynamicData } from '../../interfaces/Data';

export default function Metric() {
  const params = useParams();
  const id = params.id as keyof IDynamicData;
  const data = useContext<IData[]>(DataContext);
  const flowData = data.map((item) => item.dynamicData[id].value);

  const flow = [{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 }];
  return (
    <div>
      <LineChart width={400} height={400} data={flow}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      </LineChart>
    </div>
  );
}
