import * as os from 'os';
import { platform } from 'process';
import IData, { IDataItem } from '../interfaces/Data';

export default class OsData implements IData {
  staticData: {
    osType: IDataItem;
    cpuModel: IDataItem;
    upTime: IDataItem;
    cpuSpeed: IDataItem;
    mac: IDataItem;
    totalMem: IDataItem;
  };

  dynamicData: {
    freeMem: IDataItem;
    usedMem: IDataItem;
    memUsege: IDataItem;
  };

  constructor() {
    const cpus = os.cpus();
    const totalMem = os.totalmem();
    const freeMem = os.freemem();

    this.staticData = {
      osType: {
        name: 'OS Type',
        value: platform,
      },
      cpuModel: {
        name: 'CPU',
        value: cpus[0].model,
      },
      cpuSpeed: {
        name: 'CPU Speed',
        value: cpus[0].speed,
      },
      mac: {
        name: 'Mac Address',
        value: this.getMac(),
      },
      totalMem: {
        name: 'Total Memory',
        value: `${(totalMem / 1024 / 1024 / 1024).toFixed()}GB`,
      },
      upTime: {
        name: 'Computer Up Time',
        value: os.uptime(),
      },
    };

    this.dynamicData = {
      freeMem: {
        name: 'Free Memory',
        value: freeMem,
      },
      usedMem: {
        name: 'Used Memory',
        value: totalMem - freeMem,
      },
      memUsege: {
        name: 'Memory Usege',
        value: `${Math.floor(((totalMem - freeMem) / totalMem) * 100)}%`,
      },
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
