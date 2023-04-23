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
        <>
          <ul>
            {Object.entries(lastData.staticData).map(([key, value]) => (
              <li key={key} className="list__item list__static">
                <b>{value.name}</b>: {value.value}
              </li>
            ))}
          </ul>
          <ul>
            {Object.entries(lastData.dynamicData).map(([key, value]) => (
              <li key={key}>
                <Link to={`metric/${key}`}>
                  <p className="list__item list__dynamic">
                    <span className="list__label">{value.name}</span>{' '}
                    {value.value}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
