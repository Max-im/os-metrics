export interface IDataItem {
  name: string;
  value: string | number;
}

export default interface IData {
  osType: IDataItem;
  cpuModel: IDataItem;
  upTime: IDataItem;
  cpuSpeed: IDataItem;
  mac: IDataItem;
  totalMem: IDataItem;
  freeMem: IDataItem;
  usedMem: IDataItem;
  memUsege: IDataItem;
}
