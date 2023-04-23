import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import DataContext from '../context/DataContext';
import IData from '../../interfaces/Data';
import '../styles/metrics.css';

export default function Metrics() {
  const data = useContext<IData[]>(DataContext);
  // eslint-disable-next-line
  const lastData = data.length ? data[data.length - 1] : null;

  return (
    <div>
      {lastData && (
        <ul>
          {Object.entries(lastData).map(([key, value]) => (
            <li key={value.name}>
              <Link to={`metric/${key}`}>
                <p className="list__item">
                  <span className="list__label">{value.name}</span>{' '}
                  {value.value}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
