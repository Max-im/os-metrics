export interface IDataItem {
  name: string;
  value: string | number;
}

export interface IStaticData {
  osType: IDataItem;
  cpuModel: IDataItem;
  upTime: IDataItem;
  cpuSpeed: IDataItem;
  mac: IDataItem;
  totalMem: IDataItem;
}

export interface IDynamicData {
  freeMem: IDataItem;
  usedMem: IDataItem;
  memUsege: IDataItem;
}

export default interface IData {
  staticData: IStaticData;
  dynamicData: IDynamicData;
}
