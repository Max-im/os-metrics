import React, { useContext } from 'react';
import DataContext from '../context/DataContext';

export default function Metrics() {
  const data = useContext(DataContext);
  console.log(data, '------------------');
  return <div>Metrics</div>;
}
