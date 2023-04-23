const os = require('os');

class OsData {
  constructor() {
    const cpus = os.cpus();
    const osType = process.platform === 'darvin' ? 'mac' : process.platform;
    const cpuModel = cpus[0].model;
    const cpuSpeed = cpus[0].speed;
    const mac = this.getMac();

    this.osType = osType;
    this.cpuModel = cpuModel;
    this.cpuSpeed = cpuSpeed;
    this.mac = mac;
    this.freeMem = os.freemem();
    this.totalMem = os.totalmem();
    this.usedMem = this.totalMem - this.freeMem;
    this.memUsege = Math.floor((this.usedMem / this.totalMem) * 100) / 100;
    this.upTime = os.uptime();
  }

  getMac() {
    const nI = os.networkInterfaces();
    for (const key in nI) {
      if (!nI[key][0].internal) {
        return nI[key][0].mac;
      }
    }
  }
}

module.exports = OsData;
