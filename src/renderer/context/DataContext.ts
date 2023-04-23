import IData from 'interfaces/Data';
import { createContext } from 'react';

const DataContext = createContext([] as IData[]);

export default DataContext;
