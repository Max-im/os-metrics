import * as os from 'os';
import { platform } from 'process';
import IData, { IDataItem } from '../interfaces/Data';

export default class OsData implements IData {
  osType: IDataItem;
  cpuModel: IDataItem;
  upTime: IDataItem;
  cpuSpeed: IDataItem;
  mac: IDataItem;
  totalMem: IDataItem;
  freeMem: IDataItem;
  usedMem: IDataItem;
  memUsege: IDataItem;

  constructor() {
    const cpus = os.cpus();
    const totalMem = os.totalmem();
    const freeMem = os.freemem();

    this.osType = {
      name: 'OS Type',
      value: platform,
    };

    this.cpuModel = {
      name: 'CPU',
      value: cpus[0].model,
    };

    this.upTime = {
      name: 'Computer Up Time',
      value: os.uptime(),
    };

    this.cpuSpeed = {
      name: 'CPU Speed',
      value: cpus[0].speed,
    };

    this.mac = {
      name: 'Mac Address',
      value: this.getMac(),
    };

    this.totalMem = {
      name: 'Total Memory',
      value: totalMem,
    };

    this.freeMem = {
      name: 'Free Memory',
      value: freeMem,
    };

    this.usedMem = {
      name: 'Used Memory',
      value: totalMem - freeMem,
    };

    this.memUsege = {
      name: 'Memory Usege',
      value: `${Math.floor(((totalMem - freeMem) / totalMem) * 100)}%`,
    };
  }

  getMac() {
    const nI = os.networkInterfaces();

    // eslint-disable-next-line
    for (const key in nI) {
      const objArr = nI[key];
      if (objArr) {
        const obj = objArr[0];

        if (obj && !obj.internal) {
          return obj.mac;
        }
      }
    }

    return '';
  }
}
