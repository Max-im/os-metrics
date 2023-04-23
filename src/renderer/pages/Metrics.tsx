import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import DataContext from '../context/DataContext';
import IData from '../../interfaces/Data';

export default function Metrics() {
  const data = useContext<IData[]>(DataContext);
  // eslint-disable-next-line
  const lastData = data && data.length ? data[data.length - 1] : null;

  return (
    <div>
      {lastData && (
        <ul>
          {Object.entries(lastData).map(([key, value]) => (
            <li key={value.name}>
              <Link to={`metric/${key}`}>
                {value.name}: {value.value}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
