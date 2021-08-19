;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define('cfxnes', [], function() {
      return factory({}).cfxnes;
    });
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory({}).cfxnes;
  } else {
    factory(root);
  }
}(this, function(root) {
  // Compiler output [start]
  // Input 0
'use strict';
var c = c || {};
c.scope = {};
c.arrayIteratorImpl = function(a) {
  var b = 0;
  return function() {
    return b < a.length ? {done:!1, value:a[b++]} : {done:!0};
  };
};
c.arrayIterator = function(a) {
  return {next:c.arrayIteratorImpl(a)};
};
c.makeIterator = function(a) {
  var b = 'undefined' != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
  return b ? b.call(a) : c.arrayIterator(a);
};
c.arrayFromIterator = function(a) {
  for (var b, d = []; !(b = a.next()).done;) {
    d.push(b.value);
  }
  return d;
};
c.arrayFromIterable = function(a) {
  return a instanceof Array ? a : c.arrayFromIterator(c.makeIterator(a));
};
c.ASSUME_ES5 = !1;
c.ASSUME_NO_NATIVE_MAP = !1;
c.ASSUME_NO_NATIVE_SET = !1;
c.SIMPLE_FROUND_POLYFILL = !1;
c.objectCreate = c.ASSUME_ES5 || 'function' == typeof Object.create ? Object.create : function(a) {
  function b() {
  }
  b.prototype = a;
  return new b;
};
c.underscoreProtoCanBeSet = function() {
  var a = {a:!0}, b = {};
  try {
    return b.__proto__ = a, b.a;
  } catch (d) {
  }
  return !1;
};
c.setPrototypeOf = 'function' == typeof Object.setPrototypeOf ? Object.setPrototypeOf : c.underscoreProtoCanBeSet() ? function(a, b) {
  a.__proto__ = b;
  if (a.__proto__ !== b) {
    throw new TypeError(a + ' is not extensible');
  }
  return a;
} : null;
c.inherits = function(a, b) {
  a.prototype = c.objectCreate(b.prototype);
  a.prototype.constructor = a;
  if (c.setPrototypeOf) {
    var d = c.setPrototypeOf;
    d(a, b);
  } else {
    for (d in b) {
      if ('prototype' != d) {
        if (Object.defineProperties) {
          var f = Object.getOwnPropertyDescriptor(b, d);
          f && Object.defineProperty(a, d, f);
        } else {
          a[d] = b[d];
        }
      }
    }
  }
  a.superClass_ = b.prototype;
};
// Input 1
function e(a) {
  if ('number' === typeof a) {
    return 1024 > Math.abs(a) ? a + ' B' : 1048576 > Math.abs(a) ? ~~(a / 1024 * 1000) / 1000 + ' KB' : ~~(a / 1048576 * 1000) / 1000 + ' MB';
  }
}
function h(a) {
  var b = typeof a;
  if ('string' === b) {
    return 80 < a.length ? '"' + a.substr(0, 80) + '..."' : '"' + a + '"';
  }
  if ('function' === b) {
    return b = aa(a.constructor), (a = aa(a)) ? b + '(' + a + ')' : b;
  }
  if (a && 'object' === b) {
    b = aa(a.constructor);
    if ('Object' === b) {
      return b;
    }
    a = a.length;
    return null != a ? b + '(' + a + ')' : b;
  }
  return String(a);
}
var ba = /function ([^(]+)/;
function aa(a) {
  return a.name ? a.name : (a = a.toString().match(ba)) && a[1] ? a[1] : '';
}
;
// Input 2
var ca = {}, da = (ca.S0 = [0, 0, 0, 0], ca.S1 = [1, 1, 1, 1], ca.S2 = [2, 2, 2, 2], ca.S3 = [3, 3, 3, 3], ca.H = [0, 0, 1, 1], ca.V = [0, 1, 0, 1], ca['4S'] = [0, 1, 2, 3], ca);
// Input 3
var fa = {framesPerSecond:60, cpuFrequency:1789773, ppuClipTopBottom:!0, frameCounterMax4:[7457, 7456, 7458, 7457, 1, 1], frameCounterMax5:[7457, 7456, 7458, 7458, 7452, 1], noiseChannelTimerPeriods:[4, 8, 16, 32, 64, 96, 128, 160, 202, 254, 380, 508, 762, 1016, 2034, 4068], dmcChannelTimerPeriods:[428, 380, 340, 320, 286, 254, 226, 214, 190, 160, 142, 128, 106, 84, 72, 54]}, ha = {framesPerSecond:50, cpuFrequency:1491477.5, ppuClipTopBottom:!1, frameCounterMax4:[8313, 8314, 8312, 8313, 1, 1], frameCounterMax5:[8313, 
8314, 8312, 8314, 8312, 1], noiseChannelTimerPeriods:[4, 8, 14, 30, 60, 88, 118, 148, 188, 236, 354, 472, 708, 944, 1890, 3778], dmcChannelTimerPeriods:[398, 354, 316, 298, 276, 236, 210, 198, 176, 148, 132, 118, 98, 78, 66, 50]};
function ia(a) {
  switch(a) {
    case 'NTSC':
      return fa;
    case 'PAL':
      return ha;
    default:
      throw Error('Invalid region: ' + h(a));
  }
}
;
// Input 4
// Input 5
// Input 6
var ja = {}, ka = (ja.off = 0, ja.error = 1, ja.warn = 2, ja.info = 3, ja);
function ma(a) {
  this.output = a;
  this.priority = 0;
  this.level = 'off';
}
ma.prototype.setLevel = function(a) {
  var b = ka[a];
  if (null == b) {
    throw Error('Invalid log level: ' + h(a));
  }
  this.priority = b;
  this.level = a;
};
ma.prototype.getLevel = function() {
  return this.level;
};
ma.prototype.error = function(a, b) {
  1 <= this.priority && this.output.error(a, b);
};
ma.prototype.warn = function(a) {
  2 <= this.priority && this.output.warn(a);
};
ma.prototype.info = function(a) {
  3 <= this.priority && this.output.info(a);
};
var k = new ma(console);
// Input 7
// Input 8
function m() {
  k.info('Initializing CPU memory');
  this.ram = new Uint8Array(2048);
  this.prgRAM = this.prgROM = null;
  this.prgROMMapping = new Uint32Array(4);
  this.prgRAMMapping = 0;
  this.inputDevices = [null, null, null];
  this.inputStrobe = 0;
  this.mapper = this.dma = this.apu = this.ppu = null;
}
m.prototype.connect = function(a) {
  k.info('Connecting CPU memory');
  this.ppu = a.ppu;
  this.apu = a.apu;
  this.dma = a.dma;
};
m.prototype.setMapper = function(a) {
  this.prgRAM = (this.mapper = a) && a.prgRAM;
  this.prgROM = a && a.prgROM;
};
m.prototype.reset = function() {
  k.info('Resetting CPU memory');
  this.resetRAM();
  this.resetRegisters();
  this.resetPRGRAM();
  this.resetPRGROM();
};
m.prototype.read = function(a) {
  return 32768 <= a ? this.readPRGROM(a) : 8192 > a ? this.readRAM(a) : 16416 > a ? this.readRegister(a) : 24576 <= a ? this.readPRGRAM(a) : this.readEXROM(a);
};
m.prototype.write = function(a, b) {
  32768 <= a ? this.writePRGROM(a, b) : 8192 > a ? this.writeRAM(a, b) : 16416 > a ? this.writeRegister(a, b) : 24576 <= a ? this.writePRGRAM(a, b) : this.writeEXROM(a, b);
};
m.prototype.resetRAM = function() {
  this.ram.fill(0);
};
m.prototype.readRAM = function(a) {
  return this.ram[this.mapRAMAddress(a)];
};
m.prototype.writeRAM = function(a, b) {
  this.ram[this.mapRAMAddress(a)] = b;
};
m.prototype.mapRAMAddress = function(a) {
  return a & 2047;
};
m.prototype.resetRegisters = function() {
  this.inputStrobe = 0;
};
m.prototype.readRegister = function(a) {
  switch(this.mapRegisterAddress(a)) {
    case 8194:
      return this.ppu.readStatus();
    case 8196:
      return this.ppu.readOAMData();
    case 8199:
      return this.ppu.readData();
    case 16405:
      return this.apu.readStatus();
    case 16406:
      return this.readInputDevice(1);
    case 16407:
      return this.readInputDevice(2);
    default:
      return 0;
  }
};
m.prototype.writeRegister = function(a, b) {
  switch(this.mapRegisterAddress(a)) {
    case 8192:
      this.ppu.writeControl(b);
      break;
    case 8193:
      this.ppu.writeMask(b);
      break;
    case 8195:
      this.ppu.writeOAMAddress(b);
      break;
    case 8196:
      this.ppu.writeOAMData(b);
      break;
    case 8197:
      this.ppu.writeScroll(b);
      break;
    case 8198:
      this.ppu.writeAddress(b);
      break;
    case 8199:
      this.ppu.writeData(b);
      break;
    case 16404:
      this.dma.writeAddress(b);
      break;
    case 16406:
      this.writeInputDevice(b);
      break;
    case 16384:
      this.apu.writePulseDutyEnvelope(1, b);
      break;
    case 16385:
      this.apu.writePulseSweep(1, b);
      break;
    case 16386:
      this.apu.writePulseTimer(1, b);
      break;
    case 16387:
      this.apu.writePulseLengthCounter(1, b);
      break;
    case 16388:
      this.apu.writePulseDutyEnvelope(2, b);
      break;
    case 16389:
      this.apu.writePulseSweep(2, b);
      break;
    case 16390:
      this.apu.writePulseTimer(2, b);
      break;
    case 16391:
      this.apu.writePulseLengthCounter(2, b);
      break;
    case 16392:
      this.apu.writeTriangleLinearCounter(b);
      break;
    case 16394:
      this.apu.writeTriangleTimer(b);
      break;
    case 16395:
      this.apu.writeTriangleLengthCounter(b);
      break;
    case 16396:
      this.apu.writeNoiseEnvelope(b);
      break;
    case 16398:
      this.apu.writeNoiseTimer(b);
      break;
    case 16399:
      this.apu.writeNoiseLengthCounter(b);
      break;
    case 16400:
      this.apu.writeDMCFlagsTimer(b);
      break;
    case 16401:
      this.apu.writeDMCOutputLevel(b);
      break;
    case 16402:
      this.apu.writeDMCSampleAddress(b);
      break;
    case 16403:
      this.apu.writeDMCSampleLength(b);
      break;
    case 16405:
      this.apu.writeStatus(b);
      break;
    case 16407:
      this.apu.writeFrameCounter(b), this.writeInputDevice(b);
  }
};
m.prototype.mapRegisterAddress = function(a) {
  return 16384 > a ? a & 8199 : a;
};
m.prototype.setInputDevice = function(a, b) {
  k.info((null != b ? 'Setting' : 'Clearing') + ' device connected to CPU memory on port #' + a);
  this.inputDevices[a] = b;
};
m.prototype.getInputDevice = function(a) {
  return this.inputDevices[a];
};
m.prototype.readInputDevice = function(a) {
  return (a = this.inputDevices[a]) ? a.read() : 0;
};
m.prototype.writeInputDevice = function(a) {
  (a &= 1) && !this.inputStrobe && (this.strobeInputDevice(1), this.strobeInputDevice(2));
  this.inputStrobe = a;
};
m.prototype.strobeInputDevice = function(a) {
  (a = this.inputDevices[a]) && a.strobe();
};
m.prototype.readEXROM = function() {
  return 0;
};
m.prototype.writeEXROM = function() {
};
m.prototype.resetPRGRAM = function() {
  this.prgRAMMapping = 0;
};
m.prototype.readPRGRAM = function(a) {
  return this.prgRAM && this.mapper.canReadPRGRAM ? this.prgRAM[this.mapPRGRAMAddress(a)] : 0;
};
m.prototype.writePRGRAM = function(a, b) {
  this.prgRAM && this.mapper.canWritePRGRAM && (this.prgRAM[this.mapPRGRAMAddress(a)] = b, this.mapper.hasPRGRAMRegisters && this.mapper.write(a, b));
};
m.prototype.mapPRGRAMAddress = function(a) {
  return this.prgRAMMapping | a & 8191;
};
m.prototype.mapPRGRAMBank = function(a, b) {
  this.prgRAMMapping = 8192 * b;
};
m.prototype.resetPRGROM = function() {
  this.prgROMMapping.fill(0);
};
m.prototype.readPRGROM = function(a) {
  return this.prgROM[this.mapPRGROMAddress(a)];
};
m.prototype.writePRGROM = function(a, b) {
  this.mapper.write(a, b);
};
m.prototype.mapPRGROMAddress = function(a) {
  return this.prgROMMapping[(a & 24576) >>> 13] | a & 8191;
};
m.prototype.mapPRGROMBank = function(a, b) {
  this.prgROMMapping[a] = 8192 * b;
};
// Input 9
var na = [9, 1, 0, 1, 0, 2, 2, 13, 8, 16, 8, 36, 0, 0, 4, 44, 9, 1, 52, 3, 0, 4, 0, 20, 8, 58, 0, 2, 0, 32, 44, 8];
function p() {
  k.info('Initializing PPU memory');
  this.patterns = null;
  this.patternsMapping = new Uint32Array(8);
  this.canWritePattern = !1;
  this.nametables = new Uint8Array(4096);
  this.nametablesMapping = new Uint32Array(4);
  this.palettes = new Uint8Array(32);
  this.mapper = null;
}
p.prototype.setMapper = function(a) {
  this.patterns = (this.mapper = a) && (a.chrRAM || a.chrROM);
  this.canWritePattern = null != a && null != a.chrRAM;
};
p.prototype.reset = function() {
  k.info('Resetting PPU memory');
  this.resetPatterns();
  this.resetNametables();
  this.resetPalettes();
};
p.prototype.read = function(a) {
  a = this.mapAddress(a);
  return 8192 > a ? this.readPattern(a) : 16128 > a ? this.readNametable(a) : this.readPalette(a);
};
p.prototype.write = function(a, b) {
  a = this.mapAddress(a);
  8192 > a ? this.writePattern(a, b) : 16128 > a ? this.writeNametable(a, b) : this.writePalette(a, b);
};
p.prototype.mapAddress = function(a) {
  return a & 16383;
};
p.prototype.resetPatterns = function() {
  this.patternsMapping.fill(0);
};
p.prototype.readPattern = function(a) {
  return this.patterns[this.mapPatternAddress(a)];
};
p.prototype.writePattern = function(a, b) {
  this.canWritePattern && (this.patterns[this.mapPatternAddress(a)] = b);
};
p.prototype.mapPatternAddress = function(a) {
  return this.patternsMapping[(a & 7168) >>> 10] | a & 1023;
};
p.prototype.mapPatternsBank = function(a, b) {
  this.patternsMapping[a] = 1024 * b;
};
p.prototype.resetNametables = function() {
  this.nametables.fill(0);
  this.setNametablesMirroring(this.mapper && this.mapper.mirroring || 'S0');
};
p.prototype.readNametable = function(a) {
  return this.nametables[this.mapNametableAddress(a)];
};
p.prototype.writeNametable = function(a, b) {
  this.nametables[this.mapNametableAddress(a)] = b;
};
p.prototype.mapNametableAddress = function(a) {
  return this.nametablesMapping[(a & 3072) >>> 10] | a & 1023;
};
p.prototype.setNametablesMirroring = function(a) {
  var b = da[a];
  if (!b) {
    throw Error('Invalid mirroring: ' + h(a));
  }
  a = b;
  for (b = 0; 4 > b; b++) {
    this.nametablesMapping[b] = 1024 * a[b];
  }
};
p.prototype.resetPalettes = function() {
  this.palettes.set(na);
};
p.prototype.readPalette = function(a) {
  return this.palettes[this.mapPaletteAddress(a)];
};
p.prototype.writePalette = function(a, b) {
  this.palettes[this.mapPaletteAddress(a)] = b;
};
p.prototype.mapPaletteAddress = function(a) {
  return a & 3 ? a & 31 : a & 15;
};
// Input 10
function oa() {
  k.info('Initializing DMA');
  this.baseAddress = this.cycle = 0;
  this.cpuMemory = null;
}
oa.prototype.connect = function(a) {
  k.info('Connecting DMA');
  this.cpuMemory = a.cpuMemory;
};
oa.prototype.reset = function() {
  k.info('Resetting DMA');
  this.cycle = 512;
};
oa.prototype.writeAddress = function(a) {
  this.cycle = 0;
  this.baseAddress = a << 8;
};
oa.prototype.tick = function() {
  this.isBlockingCPU() && (this.cycle++, this.cycle & 1 && this.transferData());
};
oa.prototype.isBlockingCPU = function() {
  return 512 > this.cycle;
};
oa.prototype.transferData = function() {
  var a = this.cpuMemory.read(this.baseAddress + (this.cycle >> 1));
  this.cpuMemory.write(8196, a);
};
// Input 11
function q(a) {
  k.info('Initializing mapper');
  this.mirroring = a.mirroring;
  this.prgROM = a.prgROM;
  this.chrROM = a.chrROM;
  this.prgROMSize = a.prgROMSize;
  this.chrROMSize = a.chrROMSize;
  var b = a.prgRAMSize, d = a.prgRAMSizeBattery;
  this.prgRAM = b ? new Uint8Array(b) : null;
  this.prgRAMSize = b;
  this.prgRAMSizeBattery = d;
  this.canReadPRGRAM = 0 < b;
  this.canWritePRGRAM = 0 < b;
  this.hasPRGRAMRegisters = !1;
  b = a.chrRAMSize;
  a = a.chrRAMSizeBattery;
  this.chrRAM = b ? new Uint8Array(b) : null;
  this.chrRAMSize = b;
  this.chrRAMSizeBattery = a;
  this.nvram = d ? this.prgRAM.subarray(0, d) : a ? this.chrRAM.subarray(0, a) : null;
  this.ppuMemory = this.cpuMemory = this.ppu = this.cpu = null;
}
q.prototype.connect = function(a) {
  k.info('Connecting mapper');
  this.cpu = a.cpu;
  this.ppu = a.ppu;
  this.cpuMemory = a.cpuMemory;
  this.ppuMemory = a.ppuMemory;
  this.cpu.setMapper(this);
  this.cpuMemory.setMapper(this);
  this.ppuMemory.setMapper(this);
};
q.prototype.disconnect = function() {
  k.info('Disconnecting mapper');
  this.ppuMemory.setMapper(null);
  this.cpuMemory.setMapper(null);
  this.cpu.setMapper(null);
  this.cpu = this.ppu = this.cpuMemory = this.ppuMemory = null;
};
q.prototype.reset = function() {
  k.info('Resetting mapper');
  this.resetPRGRAM();
  this.resetCHRRAM();
  this.resetState();
};
q.prototype.resetState = function() {
};
q.prototype.write = function() {
};
q.prototype.tick = function() {
};
q.prototype.mapPRGROMBank32K = function(a, b) {
  this.mapPRGROMBank8K(4 * a, 4 * b, 4);
};
q.prototype.mapPRGROMBank16K = function(a, b) {
  this.mapPRGROMBank8K(2 * a, 2 * b, 2);
};
q.prototype.mapPRGROMBank8K = function(a, b, d) {
  d = void 0 === d ? 1 : d;
  for (var f = this.prgROMSize - 1 >> 13, g = 0; g < d; g++) {
    this.cpuMemory.mapPRGROMBank(a + g, b + g & f);
  }
};
q.prototype.resetPRGRAM = function() {
  this.prgRAM && this.prgRAM.fill(0, this.prgRAMSizeBattery);
};
q.prototype.mapPRGRAMBank8K = function(a, b) {
  this.cpuMemory.mapPRGRAMBank(a, b & this.prgRAMSize - 1 >> 13);
};
q.prototype.resetCHRRAM = function() {
  this.chrRAM && this.chrRAM.fill(0, this.chrRAMSizeBattery);
};
q.prototype.mapCHRBank8K = function(a, b) {
  this.mapCHRBank1K(8 * a, 8 * b, 8);
};
q.prototype.mapCHRBank4K = function(a, b) {
  this.mapCHRBank1K(4 * a, 4 * b, 4);
};
q.prototype.mapCHRBank2K = function(a, b) {
  this.mapCHRBank1K(2 * a, 2 * b, 2);
};
q.prototype.mapCHRBank1K = function(a, b, d) {
  d = void 0 === d ? 1 : d;
  for (var f = (this.chrROMSize || this.chrRAMSize) - 1 >> 10, g = 0; g < d; g++) {
    this.ppuMemory.mapPatternsBank(a + g, b + g & f);
  }
};
q.prototype.getNVRAM = function() {
  return this.nvram;
};
q.prototype.setSingleScreenMirroring = function(a) {
  this.ppuMemory.setNametablesMirroring('S' + (void 0 === a ? 0 : a));
};
q.prototype.setVerticalMirroring = function() {
  this.ppuMemory.setNametablesMirroring('V');
};
q.prototype.setHorizontalMirroring = function() {
  this.ppuMemory.setNametablesMirroring('H');
};
q.prototype.setFourScreenMirroring = function() {
  this.ppuMemory.setNametablesMirroring('4S');
};
// Input 12
function pa() {
  q.apply(this, arguments);
}
c.inherits(pa, q);
pa.prototype.resetState = function() {
  this.mapPRGROMBank32K(0, 0);
  this.mapCHRBank8K(0, 0);
};
pa.prototype.write = function(a, b) {
  this.mapPRGROMBank32K(0, b);
  this.setSingleScreenMirroring((b & 16) >>> 4);
};
// Input 13
function qa() {
  q.apply(this, arguments);
}
c.inherits(qa, q);
qa.prototype.resetState = function() {
  this.mapPRGROMBank32K(0, 0);
  this.mapCHRBank8K(0, 0);
};
qa.prototype.write = function(a, b) {
  this.mapPRGROMBank32K(0, b);
};
// Input 14
function ra() {
  q.apply(this, arguments);
}
c.inherits(ra, q);
ra.prototype.resetState = function() {
  this.mapPRGROMBank16K(0, 0);
  this.mapPRGROMBank16K(1, -1);
  this.mapCHRBank8K(0, 0);
};
ra.prototype.write = function(a, b) {
  this.mapCHRBank8K(0, b);
};
// Input 15
function sa() {
  q.apply(this, arguments);
}
c.inherits(sa, q);
sa.prototype.resetState = function() {
  this.mapPRGROMBank32K(0, 0);
  this.mapCHRBank8K(0, 0);
};
sa.prototype.write = function(a, b) {
  this.mapPRGROMBank32K(0, b);
  this.mapCHRBank8K(0, b >>> 4);
};
// Input 16
function ta(a) {
  q.call(this, a);
  this.chrBankRegister2 = this.chrBankRegister1 = this.prgBankRegister = this.controlRegister = this.writesCount = this.shiftRegister = 0;
  this.snrom = (131072 === this.prgROMSize || 262144 === this.prgROMSize) && 8192 === this.prgRAMSize && (8192 === this.chrROMSize || 8192 === this.chrRAMSize);
}
c.inherits(ta, q);
ta.prototype.resetState = function() {
  this.resetShiftRegister();
  this.resetBankRegisters();
  this.synchronizeMapping();
};
ta.prototype.resetShiftRegister = function() {
  this.writesCount = this.shiftRegister = 0;
};
ta.prototype.resetBankRegisters = function() {
  this.controlRegister = 12;
  this.chrBankRegister2 = this.chrBankRegister1 = this.prgBankRegister = 0;
};
ta.prototype.write = function(a, b) {
  b & 128 ? (this.resetShiftRegister(), this.controlRegister |= 12) : (this.shiftRegister |= (b & 1) << this.writesCount, 5 <= ++this.writesCount && (this.copyShiftRegister(a), this.resetShiftRegister(), this.synchronizeMapping()));
};
ta.prototype.copyShiftRegister = function(a) {
  switch(a & 57344) {
    case 32768:
      this.controlRegister = this.shiftRegister;
      break;
    case 40960:
      this.chrBankRegister1 = this.shiftRegister;
      break;
    case 49152:
      this.chrBankRegister2 = this.shiftRegister;
      break;
    case 57344:
      this.prgBankRegister = this.shiftRegister;
  }
};
ta.prototype.synchronizeMapping = function() {
  this.switchMirroring();
  this.switchPRGROMBanks();
  this.switchPRGRAMBank();
  this.switchCHRBanks();
};
ta.prototype.switchMirroring = function() {
  switch(this.controlRegister & 3) {
    case 0:
      this.setSingleScreenMirroring(0);
      break;
    case 1:
      this.setSingleScreenMirroring(1);
      break;
    case 2:
      this.setVerticalMirroring();
      break;
    case 3:
      this.setHorizontalMirroring();
  }
};
ta.prototype.switchPRGROMBanks = function() {
  var a = this.chrRAM ? this.chrBankRegister1 & 16 : 0, b = this.prgBankRegister & 15;
  switch(this.controlRegister & 12) {
    case 12:
      this.mapPRGROMBank16K(0, a | b);
      this.mapPRGROMBank16K(1, a | 15);
      break;
    case 8:
      this.mapPRGROMBank16K(0, a);
      this.mapPRGROMBank16K(1, a | b);
      break;
    default:
      this.mapPRGROMBank32K(0, (a | b) >>> 1);
  }
};
ta.prototype.switchPRGRAMBank = function() {
  var a = 0 === (this.chrBankRegister1 & 16);
  a = 0 === (this.prgBankRegister & 16) && (!this.snrom || a);
  this.mapPRGRAMBank8K(0, this.chrRAM ? this.chrBankRegister1 >>> 2 : 0);
  this.canWritePRGRAM = this.canReadPRGRAM = a;
};
ta.prototype.switchCHRBanks = function() {
  this.controlRegister & 16 ? (this.mapCHRBank4K(0, this.chrBankRegister1), this.mapCHRBank4K(1, this.chrBankRegister2)) : this.mapCHRBank8K(0, this.chrBankRegister1 >>> 1);
};
// Input 17
// Input 18
function z(a) {
  q.call(this, a);
  this.irqDelay = this.irqEnabled = this.irqReload = this.irqLatch = this.irqCounter = this.bankSelect = 0;
  this.alternateMode = !1;
}
c.inherits(z, q);
z.prototype.resetState = function() {
  this.resetMapping();
  this.resetRegisters();
};
z.prototype.resetMapping = function() {
  this.mapPRGROMBank16K(0, 0);
  this.mapPRGROMBank16K(1, -1);
  this.mapPRGRAMBank8K(0, 0);
  this.mapCHRBank8K(0, 0);
};
z.prototype.resetRegisters = function() {
  this.irqDelay = this.irqEnabled = this.irqReload = this.irqLatch = this.irqCounter = this.bankSelect = 0;
};
z.prototype.write = function(a, b) {
  switch(a & 57345) {
    case 32768:
      this.bankSelect = b;
      break;
    case 32769:
      this.writeBankData(b);
      break;
    case 40960:
      this.writeMirroring(b);
      break;
    case 40961:
      this.writePRGRAMEnable(b);
      break;
    case 49152:
      this.irqLatch = b;
      break;
    case 49153:
      this.writeIRQReload();
      break;
    case 57344:
      this.writeIRQEnable(!1);
      break;
    case 57345:
      this.writeIRQEnable(!0);
  }
};
z.prototype.writeBankData = function(a) {
  switch(this.bankSelect & 7) {
    case 0:
    case 1:
      this.switchDoubleCHRROMBanks(a);
      break;
    case 2:
    case 3:
    case 4:
    case 5:
      this.switchSingleCHRROMBanks(a);
      break;
    case 6:
      this.switchPRGROMBanks0And2(a);
      break;
    case 7:
      this.switchPRGROMBank1(a);
  }
};
z.prototype.writeMirroring = function(a) {
  '4S' !== this.mirroring && this.switchMirroring(a);
};
z.prototype.writePRGRAMEnable = function(a) {
  this.canReadPRGRAM = 128 === (a & 128);
  this.canWritePRGRAM = 128 === (a & 192);
};
z.prototype.writeIRQReload = function() {
  this.alternateMode && (this.irqReload = !0);
  this.irqCounter = 0;
};
z.prototype.writeIRQEnable = function(a) {
  (this.irqEnabled = a) || this.cpu.clearInterrupt(16);
};
z.prototype.switchDoubleCHRROMBanks = function(a) {
  this.mapCHRBank2K((this.bankSelect & 128) >>> 6 | this.bankSelect & 1, a >>> 1);
};
z.prototype.switchSingleCHRROMBanks = function(a) {
  this.mapCHRBank1K((~this.bankSelect & 128) >>> 5 | this.bankSelect - 2 & 3, a);
};
z.prototype.switchPRGROMBanks0And2 = function(a) {
  var b = (~this.bankSelect & 64) >>> 5;
  this.mapPRGROMBank8K((this.bankSelect & 64) >>> 5, a);
  this.mapPRGROMBank8K(b, -2);
};
z.prototype.switchPRGROMBank1 = function(a) {
  this.mapPRGROMBank8K(1, a);
};
z.prototype.switchMirroring = function(a) {
  a & 1 ? this.setHorizontalMirroring() : this.setVerticalMirroring();
};
z.prototype.tick = function() {
  this.ppu.addressBus & 4096 ? (this.irqDelay || this.updateIRQCounter(), this.irqDelay = 7) : this.irqDelay && this.irqDelay--;
};
z.prototype.updateIRQCounter = function() {
  var a = this.irqCounter;
  !this.irqCounter || this.irqReload ? this.irqCounter = this.irqLatch : this.irqCounter--;
  !this.irqEnabled || this.irqCounter || this.alternateMode && !a && !this.irqReload || this.cpu.activateInterrupt(16);
  this.irqReload = !1;
};
// Input 19
function ua(a) {
  q.call(this, a);
  this.hasPRGRAMRegisters = !0;
}
c.inherits(ua, q);
ua.prototype.resetState = function() {
  this.mapPRGROMBank32K(0, 0);
  this.mapPRGRAMBank8K(0, 0);
  this.mapCHRBank8K(0, 0);
};
ua.prototype.write = function(a, b) {
  switch(a) {
    case 32765:
      this.mapPRGROMBank32K(0, b);
      break;
    case 32766:
      this.mapCHRBank4K(0, b);
      break;
    case 32767:
      this.mapCHRBank4K(1, b);
  }
};
// Input 20
function va() {
  q.apply(this, arguments);
}
c.inherits(va, q);
va.prototype.resetState = function() {
  this.mapPRGROMBank16K(0, 0);
  this.mapPRGROMBank16K(1, -1);
  this.mapCHRBank8K(0, 0);
};
// Input 21
function wa() {
  q.apply(this, arguments);
}
c.inherits(wa, q);
wa.prototype.resetState = function() {
  this.mapPRGROMBank16K(0, 0);
  this.mapPRGROMBank16K(1, -1);
  this.mapCHRBank8K(0, 0);
};
wa.prototype.write = function(a, b) {
  this.mapPRGROMBank16K(0, b);
};
// Input 22
var xa = {}, ya = (xa.AOROM = pa, xa.BNROM = qa, xa.CNROM = ra, xa.COLOR_DREAMS = sa, xa.MMC1 = ta, xa.MMC3 = z, xa.NINA_001 = ua, xa.NROM = va, xa.UNROM = wa, xa);
// Input 23
// Input 24
// Input 25
var za = new Uint16Array([4660]), Aa = 'LE' === (52 === (new Uint8Array(za.buffer))[0] ? 'LE' : 'BE'), Da = Aa ? Ba : Ca, Ga = Aa ? Ea : Fa, Ha = Da(0, 0, 0);
function Ba(a, b, d, f) {
  return ((void 0 === f ? 255 : f) << 24 | d << 16 | b << 8 | a) >>> 0;
}
function Ca(a, b, d, f) {
  return (a << 24 | b << 16 | d << 8 | (void 0 === f ? 255 : f)) >>> 0;
}
function Ea(a) {
  return [a & 255, a >>> 8 & 255, a >>> 16 & 255, a >>> 24 & 255];
}
function Fa(a) {
  return [a >>> 24 & 255, a >>> 16 & 255, a >>> 8 & 255, a & 255];
}
;
// Input 26
// Input 27
// Input 28
// Input 29
// Input 30
// Input 31
// Input 32
// Input 33
// Input 34
// Input 35
// Input 36
// Input 37
var Ia = {'asq-real-a':'YGBgACF7AACcMQCLWQBvbwAxZAAATxEALxkAJykAAEQAADk3ADlPAAAADAwMDAwMrq6uEFbOGyz/YCDsqQC/yhZUyhoInjoEZ1EAQ2EAAHwAAHFTAHGHDAwMDAwMDAwM////RJ7+XGz/mWb/12D//2KV/2RT9JQwwqwAkMQUUtIoIMaSGLrSTExMDAwMDAwM////o8z/pLT/wbb/4Lf//8DF/7yr/9Cf/OCQ4uqYyvKgoOrioOL6tra2DAwMDAwM', 'asq-real-b':'bGxsACCUAACoPACYcABwfAA8cAAAaBAARhoAPCwAAFAAADxMADpmAAAAEBAQEBAQurq6KljWPDL/gCDwwADA0BR00hokpjweflIAWGQAAIgAAHRoAHKeEBAQEBAQEBAQ////XqD/jIL/xHD//1z//2i8/3J8/JZK2a0AmMYuTtROOsiaLr7cWFhYEBAQEBAQ////xtj/1Mr/8MT//7z//8Tw/8rU/9i+/+am6uyyxvTGuuzqtub/wsLCEBAQEBAQ', 
'bmf-fin-r2':'UlJSAACACACKLAB+SgBOUAAGRAAAJggACiAAAC4AADIAACYKABxIAAAAAAAAAAAApKSkADjONBbsXgTcjACwmgBMkBgAcDYATFQADmwAAHQAAGwsAF6EAAAAAAAAAAAA////TJz/fHj/pmT/2lr/8FTA8GpW1oYQuqQAdsAARswaLshmNMK+Ojo6AAAAAAAA////ttr/yMr/2sL/8L7//Lzu+sLA8syi5tqSzOaOuO6iruq+rujisLCwAAAAAAAA', 'bmf-fin-r3':'aGhoABKZGgiqUQKafgBpjgAcfgMBURgAHzcAAU4AAFoAAFAcAEBhAAAAAAAAAAAAubm5DFzXUDXwiRnguwyzzgxhwCsOlU0BYW8AH4sAAZgMAJNLAIGbAAAAAAAAAAAA////Y7T/m5H/03f/72r/+WjA+X1s7Zstvb0WfNocS+hHNeWRP9ndYGBgAAAAAAAA////rOf/1c3/7br/+LD//rDs/b21+dKO6Ot8u/OCmfeiivXQkvTxvr6+AAAAAAAA', 
'fceu-13':'YGBgAAB4FACALABuSgBObAAYWgMCURgANCQAADQAADIAADQgACx4AAAAAgICAgICxMTEAFjeMB/8fxTgqACwwAZcwCsOpkAQb2EAMIAAAHwAAHw8AG6EFBQUBAQEBAQE8PDwTKr/b3P1sHD/2lr/8GDA+INt0JAw1MAwZtAAJt0aLshmNMK+VFRUBgYGBgYG////ttr/yMr/2sL/8L7//Lzu/9C0/9qQ7OyS3PaeuP+iruq+nu/vvr6+CAgICAgI', 'fceu-15':'YGBgAABwFACALABuSgBObAAYWgMCURgANCQAADQAADIAADQgACx4AAAAAgICAgICxMTEAFjeMB/8fxTgqACwwAZcwCsOpkAQb2EAMIAAAHwAAHw8AG6EFBQUBAQEBAQE8PDwTKr/b3P1sHD/2lr/8GDA+INt0JAw1MAwZtAAJt0aLshmNMK+VFRUBgYGBgYG////ttr/yMr/2sL/8L7//Lzu/9C0/9qQ7OyS3PaeuP+iruq+nu/vvr6+CAgICAgI', 
fceux:'dHR0JBiMAACoRACcjAB0qAAQpAAAfAgAQCwAAEQAAFAAADwUGDxcAAAAAAAAAAAAvLy8AHDsIDjsgADwvAC85ABY2CgAyEwMiHAAAJQAAKgAAJA4AICIAAAAAAAAAAAA/Pz8PLz8XJT8zIj89Hj8/HS0/HRg/Jg48Lw8gNAQTNxIWPiYAOjYeHh4AAAAAAAA/Pz8qOT8xNT81Mj8/MT8/MTY/Lyw/Nio/OSg4PygqPC8sPzMnPzwxMTEAAAAAAAA', 'nestopia-rgb':'bW1tACSSAADbbUnbkgBttgBttiQAkkkAbUkAJEkAAG0kAJIAAElJAAAAAAAAAAAAtra2AG3bAEn/kgD/tgD//wCS/wAA220Akm0AJJIAAJIAALZtAJKSJCQkAAAAAAAA////bbb/kpL/223//wD//23//5IA/7YA29sAbdsAAP8ASf/bAP//SUlJAAAAAAAA////ttv/27b//7b//5L//7a2/9uS//9J//9ttv9Jkv9tSf/bktv/kpKSAAAAAAAA', 
'nestopia-yuv':'ZmZmACqIFBKnOwCkXAB+bgBAbAcAVh0AMzUADEgAAFIAAE8IAEBNAAAAAAAAAAAAra2tFV/ZQkD/dSf+oBrMtx57tTEgmU4Aa20AOIcADZMAAI8yAHyNAAAAAAAAAAAA////ZLD/kpD/xnb/8mr//27M/4Fw6p4ivL4AiNgAXOQwReCCSM3eT09PAAAAAAAA////wN//09L/6Mj/+sL//8Tq/8zF99il5OWUz++WvfSrs/PMtevyuLi4AAAAAAAA', 'sony-cxa2025as':'WFhYACOMABObLQWFXQBSegAXeggAXxgANSoACTkAAD8AADwiADJdAAAAAAAAAAAAoaGhAFPuFTz+YCjkqR2Y1B5B0iwAqkQAbF4ALXMAAH0GAHhSAGmpAAAAAAAAAAAA////H6X+Xon+tXL+/mX2/meQ/nc8/pMIxLIAecoQOtVKEdGkBr/+QkJCAAAAAAAA////oNn+vcz+4cL+/rz7/r3Q/sWp/tGO6d6Gx+mSqO6wlezZkeT+rKysAAAAAAAA', 
'unsaturated-v6':'a2trAB6HHwuWOwyHWQ1hXgUoVREARhsAMDIACkgAAE4AAEYZADpYAAAAAAAAAAAAsrKyGlPRSDXucSPsmh63pR5ipS0Zh0sAZ2kAKYQAA4sAAIJAAHiRAAAAAAAAAAAA////Y639kIr+uXf853H+92/J9YNq3ZwpvbgHhNEHW9w7SNd9SMzOVVVVAAAAAAAA////xOP+19X+5s3++cr+/snw/tHH99ys6Oic0fKdv/Sxt/XNt/Duvr6+AAAAAAAA'};
function Ja(a) {
  a = void 0 === a ? 'fceux' : a;
  var b = Ia[a];
  if (b) {
    k.info('Creating "' + a + '" palette');
    if ('undefined' !== typeof window && 'function' === typeof window.atob) {
      a = window.atob(b);
    } else {
      if ('function' === typeof Buffer) {
        a = Buffer.from(b, 'base64').toString('binary');
      } else {
        throw Error('Unable to decode base64 string');
      }
    }
    if (192 !== a.length) {
      throw Error('Palette data does not contain 64 entries');
    }
    b = new Uint32Array(64);
    for (var d = 0; 64 > d; d++) {
      var f = 3 * d, g = a.charCodeAt(f), l = a.charCodeAt(f + 1);
      f = a.charCodeAt(f + 2);
      b[d] = Da(g, l, f);
    }
    return b;
  }
  throw Error('Invalid palette: ' + h(a));
}
;
// Input 38
for (var A = new Uint32Array(262), C = 0; C < A.length; C++) {
  239 >= C && (A[C] |= 2, A[C] |= 512, A[C] |= 2048, A[C] |= 1024);
  if (239 >= C || 261 === C) {
    A[C] |= 4, A[C] |= 8, A[C] |= 16, A[C] |= 32, A[C] |= 64, A[C] |= 128, A[C] |= 256, A[C] |= 8192, A[C] |= 16384, A[C] |= 32768;
  }
  if (7 >= C || 232 <= C && 239 >= C) {
    A[C] |= 4096;
  }
}
A[241] |= 131072;
A[241] |= 262144;
A[261] |= 65536;
A[261] |= 524288;
A[261] |= 1048576;
for (var D = new Uint32Array(341), E = 0; E < D.length; E++) {
  1 <= E && 256 >= E && (D[E] |= 2, D[E] |= 4096);
  if (1 === (E & 7) || 339 === E) {
    D[E] |= 4;
  }
  3 === (E & 7) && 339 !== E && (D[E] |= 8);
  5 === (E & 7) && (D[E] |= 256 >= E || 321 <= E ? 16 : 64);
  7 === (E & 7) && (D[E] |= 256 >= E || 321 <= E ? 32 : 128);
  if (0 === (E & 7) && 8 <= E && 256 >= E || 328 === E || 336 === E) {
    D[E] |= 8192;
  }
  if (1 === (E & 7) && 9 <= E && 257 >= E || 329 === E || 337 === E) {
    D[E] |= 256;
  }
  if (1 <= E && 256 >= E || 321 <= E && 336 >= E) {
    D[E] |= 512;
  }
  280 <= E && 304 >= E && (D[E] |= 65536);
  1 <= E && 8 >= E && (D[E] |= 2048);
  1 <= E && 3 >= E && (D[E] |= 262144);
}
D[1] |= 131072;
D[1] |= 524288;
D[65] |= 1024;
D[256] |= 16384;
D[257] |= 32768;
D[338] |= 1048576;
// Input 39
function Ka() {
  this.x = 0;
  this.horizontalFlip = this.zeroSprite = !1;
  this.paletteNumber = 0;
  this.inFront = !1;
  this.patternRow1 = this.patternRow0 = this.patternRowAddress = 0;
}
;
// Input 40
function H() {
  k.info('Initializing PPU');
  this.scanline = 261;
  this.cycleFlags = this.cycle = 0;
  this.oddFrame = !1;
  this.addressBus = 0;
  this.nmiSuppressed = this.vblankSuppressed = this.vblankActive = this.clipTopBottom = !1;
  this.nmiDelay = 0;
  this.frameBuffer = null;
  this.frameAvailable = !1;
  this.framePosition = 0;
  this.basePalette = null;
  this.paletteVariants = Array(8);
  this.palette = null;
  this.spriteNumber = this.spriteCount = 0;
  this.spriteCache = Array(261);
  this.spritePixelCache = new Uint8Array(261);
  this.primaryOAM = new Uint8Array(256);
  this.secondaryOAM = Array(8);
  this.vramReadBuffer = this.vramAddress = this.tempAddress = this.oamAddress = 0;
  this.writeToggle = !1;
  this.vblankFlag = this.spriteZeroHit = this.spriteOverflow = this.colorEmphasis = this.spritesVisible = this.backgroundVisible = this.spriteClipping = this.backgroundClipping = this.monochromeMode = this.nmiEnabled = this.bigSprites = this.bgPatternTableAddress = this.spPatternTableAddress = this.bigAddressIncrement = this.patternRowAddress = this.paletteLatchNext1 = this.paletteLatchNext0 = this.patternBufferNext1 = this.patternBufferNext0 = this.paletteLatch1 = this.paletteLatch0 = this.paletteBuffer1 = 
  this.paletteBuffer0 = this.patternBuffer1 = this.patternBuffer0 = this.fineXScroll = 0;
  this.ppuMemory = this.cpu = null;
}
H.prototype.connect = function(a) {
  k.info('Connecting PPU');
  this.cpu = a.cpu;
  this.ppuMemory = a.ppuMemory;
};
H.prototype.reset = function() {
  k.info('Resetting PPU');
  this.resetOAM();
  this.resetRegisters();
  this.resetState();
};
H.prototype.resetOAM = function() {
  this.primaryOAM.fill(0);
  for (var a = 0; a < this.secondaryOAM.length; a++) {
    this.secondaryOAM[a] = new Ka;
  }
};
H.prototype.resetRegisters = function() {
  this.setControl(0);
  this.setMask(0);
  this.setStatus(0);
  this.vramReadBuffer = this.vramAddress = this.tempAddress = this.oamAddress = 0;
  this.writeToggle = !1;
  this.paletteLatchNext1 = this.paletteLatchNext0 = this.patternBufferNext1 = this.patternBufferNext0 = this.paletteLatch1 = this.paletteLatch0 = this.paletteBuffer1 = this.paletteBuffer0 = this.patternBuffer1 = this.patternBuffer0 = this.fineXScroll = 0;
};
H.prototype.resetState = function() {
  this.scanline = 261;
  this.cycleFlags = this.cycle = 0;
  this.nmiSuppressed = this.vblankSuppressed = !1;
  this.nmiDelay = 0;
  this.oddFrame = !1;
  this.spriteNumber = this.spriteCount = 0;
  this.clearSprites();
};
H.prototype.setRegionParams = function(a) {
  k.info('Setting PPU region parameters');
  this.clipTopBottom = a.ppuClipTopBottom;
};
H.prototype.setBasePalette = function(a) {
  k.info('Setting PPU base palette');
  this.basePalette = a;
  this.createPaletteVariants();
  this.updatePalette();
};
H.prototype.getBasePalette = function() {
  return this.basePalette;
};
H.prototype.createPaletteVariants = function() {
  for (var a = 0; a < this.paletteVariants.length; a++) {
    var b = this.paletteVariants, d = a, f = this.basePalette, g = a & 6 ? 0.75 : 1.0, l = a & 5 ? 0.75 : 1.0, n = a & 3 ? 0.75 : 1.0;
    k.info('Creating palette variant (' + g + ', ' + l + ', ' + n + ')');
    for (var y = new Uint32Array(64), F = 0; 64 > F; F++) {
      var r = c.makeIterator(Ga(f[F])), Y = r.next().value, la = r.next().value;
      r = r.next().value;
      Y = Math.floor(g * Y);
      la = Math.floor(l * la);
      r = Math.floor(n * r);
      y[F] = Da(Y, la, r);
    }
    b[d] = y;
  }
};
H.prototype.updatePalette = function() {
  this.palette = this.paletteVariants[this.colorEmphasis];
};
H.prototype.writeControl = function(a) {
  var b = this.nmiEnabled;
  this.setControl(a);
  this.tempAddress = this.tempAddress & 62463 | (a & 3) << 10;
  !this.vblankFlag || b || !this.nmiEnabled || this.cycleFlags & 524288 || (this.nmiDelay = 1);
};
H.prototype.setControl = function(a) {
  this.bigAddressIncrement = a >>> 2 & 1;
  this.spPatternTableAddress = a << 9 & 4096;
  this.bgPatternTableAddress = a << 8 & 4096;
  this.bigSprites = a >>> 5 & 1;
  this.nmiEnabled = a >>> 7;
};
H.prototype.writeMask = function(a) {
  this.setMask(a);
  this.updatePalette();
};
H.prototype.setMask = function(a) {
  this.monochromeMode = a & 1;
  this.backgroundClipping = ~a >>> 1 & 1;
  this.spriteClipping = ~a >>> 2 & 1;
  this.backgroundVisible = a >>> 3 & 1;
  this.spritesVisible = a >>> 4 & 1;
  this.colorEmphasis = a >>> 5 & 7;
};
H.prototype.readStatus = function() {
  var a = this.getStatus();
  this.vblankFlag = 0;
  this.writeToggle = !1;
  this.cycleFlags & 131072 && (this.vblankSuppressed = !0);
  this.cycleFlags & 262144 && (this.nmiSuppressed = !0);
  return a;
};
H.prototype.getStatus = function() {
  return this.spriteOverflow << 5 | this.spriteZeroHit << 6 | this.vblankFlag << 7;
};
H.prototype.setStatus = function(a) {
  this.spriteOverflow = a >>> 5 & 1;
  this.spriteZeroHit = a >>> 6 & 1;
  this.vblankFlag = a >>> 7;
};
H.prototype.writeOAMAddress = function(a) {
  this.oamAddress = a;
};
H.prototype.readOAMData = function() {
  var a = this.primaryOAM[this.oamAddress];
  2 === (this.oamAddress & 3) && (a &= 227);
  return a;
};
H.prototype.writeOAMData = function(a) {
  this.isRenderingActive() || (this.primaryOAM[this.oamAddress] = a);
  this.oamAddress = this.oamAddress + 1 & 255;
};
H.prototype.writeAddress = function(a) {
  (this.writeToggle = !this.writeToggle) ? this.tempAddress = this.tempAddress & 255 | (a & 63) << 8 : this.vramAddress = this.tempAddress = this.tempAddress & 65280 | a;
};
H.prototype.readData = function() {
  if (16128 === (this.vramAddress & 16128)) {
    var a = this.ppuMemory.read(this.vramAddress);
    this.vramReadBuffer = this.ppuMemory.read(this.vramAddress & 12287);
    this.incrementAddress();
    return a;
  }
  a = this.vramReadBuffer;
  this.vramReadBuffer = this.ppuMemory.read(this.vramAddress);
  this.incrementAddress();
  return a;
};
H.prototype.writeData = function(a) {
  this.isRenderingActive() || this.ppuMemory.write(this.vramAddress, a);
  this.incrementAddress();
};
H.prototype.incrementAddress = function() {
  this.vramAddress = this.vramAddress + (this.bigAddressIncrement ? 32 : 1) & 65535;
};
H.prototype.writeScroll = function(a) {
  (this.writeToggle = !this.writeToggle) ? (this.fineXScroll = a & 7, this.tempAddress = this.tempAddress & 65504 | a >>> 3) : this.tempAddress = this.tempAddress & 3103 | (a & 248) << 2 | (a & 7) << 12;
};
H.prototype.updateScrolling = function() {
  this.cycleFlags & 8192 && this.incrementCoarseXScroll();
  this.cycleFlags & 16384 && this.incrementFineYScroll();
  this.cycleFlags & 32768 && this.copyHorizontalScrollBits();
  this.cycleFlags & 65536 && this.copyVerticalScrollBits();
};
H.prototype.copyHorizontalScrollBits = function() {
  this.vramAddress = this.vramAddress & 31712 | this.tempAddress & 1055;
};
H.prototype.copyVerticalScrollBits = function() {
  this.vramAddress = this.vramAddress & 1055 | this.tempAddress & 31712;
};
H.prototype.incrementCoarseXScroll = function() {
  31 === (this.vramAddress & 31) ? (this.vramAddress &= 65504, this.vramAddress ^= 1024) : this.vramAddress += 1;
};
H.prototype.incrementFineYScroll = function() {
  28672 === (this.vramAddress & 28672) ? (this.vramAddress &= 4095, this.incrementCoarseYScroll()) : this.vramAddress += 4096;
};
H.prototype.incrementCoarseYScroll = function() {
  992 === (this.vramAddress & 992) ? this.vramAddress &= 64543 : 928 === (this.vramAddress & 992) ? (this.vramAddress &= 64543, this.vramAddress ^= 2048) : this.vramAddress += 32;
};
H.prototype.setFrameBuffer = function(a) {
  this.frameBuffer = a;
  this.framePosition = 0;
  this.frameAvailable = !1;
};
H.prototype.isFrameAvailable = function() {
  return this.frameAvailable;
};
H.prototype.isBrightFramePixel = function(a, b) {
  if (b < this.scanline - 5 || b >= this.scanline) {
    return !1;
  }
  var d = c.makeIterator(Ga(this.frameBuffer[256 * b + a]));
  a = d.next().value;
  b = d.next().value;
  d = d.next().value;
  return 18 < a || 18 < b || 18 < d;
};
H.prototype.setFramePixel = function(a) {
  this.frameBuffer[this.framePosition++] = this.palette[a & 63];
};
H.prototype.setFramePixelOnPosition = function(a, b, d) {
  this.frameBuffer[256 * b + a] = this.palette[d & 63];
};
H.prototype.clearFramePixel = function() {
  this.frameBuffer[this.framePosition++] = Ha;
};
H.prototype.updateVBlank = function() {
  this.nmiDelay && (this.nmiEnabled ? --this.nmiDelay || this.nmiSuppressed || this.cpu.activateInterrupt(2) : this.nmiDelay = 0);
  this.cycleFlags & 131072 ? this.enterVBlank() : this.cycleFlags & 524288 && this.leaveVBlank();
};
H.prototype.enterVBlank = function() {
  this.vblankSuppressed || (this.vblankFlag = 1);
  this.frameAvailable = this.vblankActive = !0;
  this.nmiDelay = 2;
};
H.prototype.leaveVBlank = function() {
  this.vblankActive = !1;
  this.vblankFlag = 0;
  this.nmiSuppressed = this.vblankSuppressed = !1;
  this.spriteOverflow = this.spriteZeroHit = 0;
};
H.prototype.incrementCycle = function() {
  this.cycleFlags & 1048576 && this.oddFrame && this.isRenderingEnabled() && this.cycle++;
  this.cycle++;
  340 < this.cycle && this.incrementScanline();
  this.cycleFlags = A[this.scanline] & D[this.cycle];
};
H.prototype.incrementScanline = function() {
  this.cycle = 0;
  this.scanline++;
  261 < this.scanline && this.incrementFrame();
  239 >= this.scanline && (this.clearSprites(), 0 < this.scanline && this.preRenderSprites());
};
H.prototype.incrementFrame = function() {
  this.scanline = 0;
  this.oddFrame = !this.oddFrame;
  this.framePosition = 0;
};
H.prototype.tick = function() {
  this.isRenderingEnabled() ? (this.fetchData(), this.doRendering(), this.updateScrolling()) : (this.skipRendering(), this.addressBus = this.vramAddress);
  this.updateVBlank();
  this.incrementCycle();
};
H.prototype.fetchData = function() {
  this.cycleFlags & 4 ? this.fetchNametable() : this.cycleFlags & 8 ? this.fetchAttribute() : this.cycleFlags & 16 ? this.fetchBackgroundLow() : this.cycleFlags & 32 ? this.fetchBackgroundHigh() : this.cycleFlags & 64 ? this.fetchSpriteLow() : this.cycleFlags & 128 && this.fetchSpriteHigh();
};
H.prototype.doRendering = function() {
  this.cycleFlags & 1024 && this.evaluateSprites();
  this.cycleFlags & 256 && this.copyBackground();
  this.cycleFlags & 2 && this.updateFramePixel();
  this.cycleFlags & 512 && this.shiftBackground();
};
H.prototype.skipRendering = function() {
  this.cycleFlags & 2 && this.clearFramePixel();
};
H.prototype.isRenderingActive = function() {
  return !this.vblankActive && this.isRenderingEnabled();
};
H.prototype.isRenderingEnabled = function() {
  return this.spritesVisible || this.backgroundVisible;
};
H.prototype.updateFramePixel = function() {
  var a = this.renderFramePixel();
  this.clipTopBottom && this.cycleFlags & 4096 ? this.clearFramePixel() : (a = this.ppuMemory.readPalette(a), this.setFramePixel(a));
};
H.prototype.renderFramePixel = function() {
  var a = this.renderBackgroundPixel(), b = this.renderSpritePixel();
  if (a & 3) {
    if (b & 3) {
      var d = this.getRenderedSprite();
      d.zeroSprite && 256 !== this.cycle && (this.spriteZeroHit = 1);
      if (d.inFront) {
        return b;
      }
    }
    return a;
  }
  return b & 3 ? b : 0;
};
H.prototype.fetchNametable = function() {
  this.addressBus = 8192 | this.vramAddress & 4095;
  var a = this.ppuMemory.readNametable(this.addressBus);
  this.patternRowAddress = this.bgPatternTableAddress + (a << 4) + (this.vramAddress >>> 12 & 7);
};
H.prototype.fetchAttribute = function() {
  this.addressBus = (9152 | this.vramAddress & 3072) + (this.vramAddress >>> 4 & 56 | this.vramAddress >>> 2 & 7);
  var a = this.ppuMemory.readNametable(this.addressBus) >>> (this.vramAddress >>> 4 & 4 | this.vramAddress & 2) & 3;
  this.paletteLatchNext0 = a & 1;
  this.paletteLatchNext1 = a >>> 1 & 1;
};
H.prototype.fetchBackgroundLow = function() {
  this.addressBus = this.patternRowAddress;
  this.patternBufferNext0 = this.ppuMemory.readPattern(this.addressBus);
};
H.prototype.fetchBackgroundHigh = function() {
  this.addressBus = this.patternRowAddress + 8;
  this.patternBufferNext1 = this.ppuMemory.readPattern(this.addressBus);
};
H.prototype.copyBackground = function() {
  this.patternBuffer0 |= this.patternBufferNext0;
  this.patternBuffer1 |= this.patternBufferNext1;
  this.paletteLatch0 = this.paletteLatchNext0;
  this.paletteLatch1 = this.paletteLatchNext1;
};
H.prototype.shiftBackground = function() {
  this.patternBuffer0 <<= 1;
  this.patternBuffer1 <<= 1;
  this.paletteBuffer0 = this.paletteBuffer0 << 1 | this.paletteLatch0;
  this.paletteBuffer1 = this.paletteBuffer1 << 1 | this.paletteLatch1;
};
H.prototype.renderBackgroundPixel = function() {
  return this.isBackgroundPixelVisible() ? this.paletteBuffer1 << this.fineXScroll >> 4 & 8 | this.paletteBuffer0 << this.fineXScroll >> 5 & 4 | this.patternBuffer1 << this.fineXScroll >> 14 & 2 | this.patternBuffer0 << this.fineXScroll >> 15 & 1 : 0;
};
H.prototype.isBackgroundPixelVisible = function() {
  return this.backgroundVisible && !(this.backgroundClipping && this.cycleFlags & 2048);
};
H.prototype.evaluateSprites = function() {
  this.spriteCount = this.spriteNumber = 0;
  for (var a = this.bigSprites ? 16 : 8, b = this.scanline + 1, d = b - a + 1, f = 0; f < this.primaryOAM.length; f += 4) {
    var g = this.primaryOAM[f] + 1;
    if (!(g < d || g > b)) {
      if (8 <= this.spriteCount) {
        this.spriteOverflow = 1;
        break;
      }
      var l = this.spPatternTableAddress, n = this.primaryOAM[f + 1];
      this.bigSprites && (l = (n & 1) << 12, n &= 254);
      var y = this.primaryOAM[f + 2];
      g = b - g;
      y & 128 && (g = a - g - 1);
      8 <= g && (g -= 8, n++);
      var F = this.secondaryOAM[this.spriteCount];
      F.x = this.primaryOAM[f + 3];
      F.zeroSprite = 0 === f;
      F.horizontalFlip = y & 64;
      F.paletteNumber = 16 | (y & 3) << 2;
      F.inFront = 0 === (y & 32);
      F.patternRowAddress = l + (n << 4) + g;
      this.spriteCount++;
    }
  }
};
H.prototype.fetchSpriteLow = function() {
  if (this.spriteNumber < this.spriteCount) {
    var a = this.secondaryOAM[this.spriteNumber];
    this.addressBus = a.patternRowAddress;
    a.patternRow0 = this.ppuMemory.readPattern(this.addressBus);
  } else {
    this.addressBus = this.spPatternTableAddress | 4080;
  }
};
H.prototype.fetchSpriteHigh = function() {
  if (this.spriteNumber < this.spriteCount) {
    var a = this.secondaryOAM[this.spriteNumber++];
    this.addressBus = a.patternRowAddress + 8;
    a.patternRow1 = this.ppuMemory.readPattern(this.addressBus);
  } else {
    this.addressBus = this.spPatternTableAddress | 4080;
  }
};
H.prototype.clearSprites = function() {
  this.spriteCache.fill(null);
  this.spritePixelCache.fill(0);
};
H.prototype.preRenderSprites = function() {
  for (var a = 0; a < this.spriteCount; a++) {
    for (var b = this.secondaryOAM[a], d = 0; 8 > d; d++) {
      var f = b.x + d + 1;
      if (256 < f) {
        break;
      }
      if (!this.spriteCache[f]) {
        var g = b.horizontalFlip ? d : d ^ 7;
        if (g = (b.patternRow1 >>> g & 1) << 1 | b.patternRow0 >>> g & 1) {
          this.spriteCache[f] = b, this.spritePixelCache[f] = b.paletteNumber | g;
        }
      }
    }
  }
};
H.prototype.renderSpritePixel = function() {
  return this.isSpritePixelVisible() ? this.spritePixelCache[this.cycle] : 0;
};
H.prototype.isSpritePixelVisible = function() {
  return this.spritesVisible && !(this.spriteClipping && this.cycleFlags & 2048);
};
H.prototype.getRenderedSprite = function() {
  return this.spriteCache[this.cycle];
};
H.prototype.renderDebugFrame = function() {
  this.renderPatterns();
  this.renderPalettes();
};
H.prototype.renderPatterns = function() {
  for (var a = 0; 16 > a; a++) {
    for (var b = a << 3, d = 0; 32 > d; d++) {
      this.renderPatternTile(d << 3, b, ((d & 16) << 4 | a << 4 | d & 15) << 4);
    }
  }
};
H.prototype.renderPatternTile = function(a, b, d) {
  for (var f = 0; 8 > f; f++) {
    for (var g = b + f, l = this.ppuMemory.readPattern(d + f), n = this.ppuMemory.readPattern(d + f + 8), y = 0; 8 > y; y++) {
      var F = a + y, r = y ^ 7;
      r = this.ppuMemory.readPalette((n >> r & 1) << 1 | l >> r & 1);
      this.setFramePixelOnPosition(F, g, r);
    }
  }
};
H.prototype.renderPalettes = function() {
  for (var a = 0; 4 > a; a++) {
    for (var b = 28 * a + 128, d = 0; 8 > d; d++) {
      var f = d << 5, g = this.ppuMemory.readPalette(a << 3 | d);
      this.renderPaletteTile(f, b, g);
    }
  }
};
H.prototype.renderPaletteTile = function(a, b, d) {
  for (var f = b; f < b + 28; f++) {
    for (var g = a; g < a + 32; g++) {
      this.setFramePixelOnPosition(g, f, d);
    }
  }
};
// Input 41
// Input 42
var I = Array(255);
function J() {
  k.info('Initializing CPU');
  this.halted = !1;
  this.negativeFlag = this.overflowFlag = this.decimalFlag = this.interruptFlag = this.zeroFlag = this.carryFlag = this.registerY = this.registerX = this.accumulator = this.stackPointer = this.programCounter = this.pageCrossed = this.irqDisabled = this.activeInterrupts = this.operationFlags = 0;
  this.apu = this.ppu = this.dma = this.cpuMemory = this.mapper = null;
}
J.prototype.connect = function(a) {
  k.info('Connecting CPU');
  this.cpuMemory = a.cpuMemory;
  this.ppu = a.ppu;
  this.apu = a.apu;
  this.dma = a.dma;
};
J.prototype.setMapper = function(a) {
  this.mapper = a;
};
J.prototype.reset = function() {
  k.info('Resetting CPU');
  this.resetState();
  this.resetMemory();
  this.handleReset();
};
J.prototype.resetState = function() {
  this.activeInterrupts = 0;
  this.halted = !1;
  this.registerY = this.registerX = this.accumulator = this.stackPointer = 0;
  this.setStatus(0);
};
J.prototype.resetMemory = function() {
  for (var a = 0; 8 > a; a++) {
    this.cpuMemory.write(a, 255);
  }
  this.cpuMemory.write(8, 247);
  this.cpuMemory.write(9, 239);
  this.cpuMemory.write(10, 223);
  this.cpuMemory.write(15, 191);
  for (a = 16; 2048 > a; a++) {
    this.cpuMemory.write(a, 255);
  }
  for (a = 16384; 16400 > a; a++) {
    this.cpuMemory.write(a, 0);
  }
};
J.prototype.step = function() {
  var a = this.dma.isBlockingCPU() || this.apu.isBlockingCPU();
  this.activeInterrupts && !a && this.resolveInterrupt();
  this.halted || a ? this.tick() : this.readAndExecuteOperation();
};
J.prototype.resolveInterrupt = function() {
  if (this.activeInterrupts & 1) {
    this.handleReset();
  } else {
    if (this.activeInterrupts & 2) {
      this.handleNMI();
    } else {
      if (this.irqDisabled) {
        return;
      }
      this.handleIRQ();
    }
  }
  this.tick();
  this.tick();
};
J.prototype.handleReset = function() {
  this.writeByte(16405, 0);
  this.writeByte(16407, this.apu.frameCounterLast);
  this.stackPointer = this.stackPointer - 3 & 255;
  this.enterInterruptHandler(65532);
  this.clearInterrupt(1);
  this.tick();
  this.halted = !1;
};
J.prototype.handleNMI = function() {
  this.saveStateBeforeInterrupt();
  this.enterInterruptHandler(65530);
  this.clearInterrupt(2);
};
J.prototype.handleIRQ = function() {
  this.saveStateBeforeInterrupt();
  this.enterInterruptHandler(65534);
};
J.prototype.saveStateBeforeInterrupt = function() {
  this.pushWord(this.programCounter);
  this.pushByte(this.getStatus());
};
J.prototype.enterInterruptHandler = function(a) {
  this.interruptFlag = 1;
  this.programCounter = this.readWord(a);
};
J.prototype.readAndExecuteOperation = function() {
  var a = this.readOperation();
  a ? (this.beforeOperation(a), this.executeOperation(a)) : (k.warn('CPU halted!'), this.halted = !0);
};
J.prototype.beforeOperation = function(a) {
  this.irqDisabled = this.interruptFlag;
  this.operationFlags = a[2];
};
J.prototype.executeOperation = function(a) {
  var b = c.makeIterator(a);
  a = b.next().value;
  b = b.next().value.call(this);
  a.call(this, b);
};
J.prototype.readOperation = function() {
  return I[this.readNextProgramByte()];
};
J.prototype.readNextProgramByte = function() {
  return this.readByte(this.moveProgramCounter(1));
};
J.prototype.readNextProgramWord = function() {
  return this.readWord(this.moveProgramCounter(2));
};
J.prototype.moveProgramCounter = function(a) {
  var b = this.programCounter;
  this.programCounter = this.programCounter + a & 65535;
  return b;
};
J.prototype.readByte = function(a) {
  this.tick();
  return this.cpuMemory.read(a);
};
J.prototype.readWord = function(a) {
  var b = a + 1 & 65535;
  a = this.readByte(a);
  return this.readByte(b) << 8 | a;
};
J.prototype.readWordFromSamePage = function(a) {
  var b = a & 65280 | a + 1 & 255;
  a = this.readByte(a);
  return this.readByte(b) << 8 | a;
};
J.prototype.writeByte = function(a, b) {
  this.tick();
  this.cpuMemory.write(a, b);
  return b;
};
J.prototype.writeWord = function(a, b) {
  this.writeByte(a, b & 255);
  return this.writeByte(a + 1 & 65535, b >>> 8);
};
J.prototype.readWriteByte = function(a) {
  var b = this.readByte(a);
  return this.writeByte(a, b);
};
J.prototype.pushByte = function(a) {
  this.writeByte(256 + this.stackPointer, a);
  this.stackPointer = this.stackPointer - 1 & 255;
};
J.prototype.pushWord = function(a) {
  this.pushByte(a >>> 8);
  this.pushByte(a & 255);
};
J.prototype.popByte = function() {
  this.stackPointer = this.stackPointer + 1 & 255;
  return this.readByte(256 + this.stackPointer);
};
J.prototype.popWord = function() {
  return this.popByte() | this.popByte() << 8;
};
J.prototype.getStatus = function() {
  return this.carryFlag | this.zeroFlag << 1 | this.interruptFlag << 2 | this.decimalFlag << 3 | 32 | this.overflowFlag << 6 | this.negativeFlag << 7;
};
J.prototype.setStatus = function(a) {
  this.carryFlag = a & 1;
  this.zeroFlag = a >>> 1 & 1;
  this.interruptFlag = a >>> 2 & 1;
  this.decimalFlag = a >>> 3 & 1;
  this.overflowFlag = a >>> 6 & 1;
  this.negativeFlag = a >>> 7;
};
J.prototype.activateInterrupt = function(a) {
  this.activeInterrupts |= a;
};
J.prototype.clearInterrupt = function(a) {
  this.activeInterrupts &= ~a;
};
J.prototype.tick = function() {
  this.apu.isBlockingDMA() || (this.dma.tick(), this.mapper.tick());
  this.ppu.tick();
  this.ppu.tick();
  this.ppu.tick();
  this.apu.tick();
};
J.prototype.impliedMode = function() {
  this.tick();
};
J.prototype.accumulatorMode = function() {
  this.tick();
};
J.prototype.immediateMode = function() {
  return this.moveProgramCounter(1);
};
J.prototype.zeroPageMode = function() {
  return this.readNextProgramByte();
};
J.prototype.zeroPageXMode = function() {
  return this.computeZeroPageAddress(this.readNextProgramByte(), this.registerX);
};
J.prototype.zeroPageYMode = function() {
  return this.computeZeroPageAddress(this.readNextProgramByte(), this.registerY);
};
J.prototype.absoluteMode = function() {
  return this.readNextProgramWord();
};
J.prototype.absoluteXMode = function() {
  return this.computeAbsoluteAddress(this.readNextProgramWord(), this.registerX);
};
J.prototype.absoluteYMode = function() {
  return this.computeAbsoluteAddress(this.readNextProgramWord(), this.registerY);
};
J.prototype.relativeMode = function() {
  var a = this.readNextProgramByte();
  return this.programCounter + (a & 128 ? a - 256 : a) & 65535;
};
J.prototype.indirectMode = function() {
  return this.readWordFromSamePage(this.readNextProgramWord());
};
J.prototype.indirectXMode = function() {
  return this.readWordFromSamePage(this.zeroPageXMode());
};
J.prototype.indirectYMode = function() {
  var a = this.readWordFromSamePage(this.readNextProgramByte());
  return this.computeAbsoluteAddress(a, this.registerY);
};
J.prototype.computeZeroPageAddress = function(a, b) {
  this.readByte(a);
  return a + b & 255;
};
J.prototype.computeAbsoluteAddress = function(a, b) {
  b = a + b & 65535;
  this.pageCrossed = (a & 65280) !== (b & 65280);
  (this.operationFlags & 2 || this.pageCrossed) && this.readByte(a & 65280 | b & 255);
  return b;
};
J.prototype.NOP = function() {
  this.operationFlags & 1 && this.tick();
};
J.prototype.CLC = function() {
  this.carryFlag = 0;
};
J.prototype.CLI = function() {
  this.irqDisabled = this.interruptFlag;
  this.interruptFlag = 0;
};
J.prototype.CLD = function() {
  this.decimalFlag = 0;
};
J.prototype.CLV = function() {
  this.overflowFlag = 0;
};
J.prototype.SEC = function() {
  this.carryFlag = 1;
};
J.prototype.SEI = function() {
  this.irqDisabled = this.interruptFlag;
  this.interruptFlag = 1;
};
J.prototype.SED = function() {
  this.decimalFlag = 1;
};
J.prototype.STA = function(a) {
  this.writeByte(a, this.accumulator);
};
J.prototype.STX = function(a) {
  this.writeByte(a, this.registerX);
};
J.prototype.SAX = function(a) {
  this.writeByte(a, this.accumulator & this.registerX);
};
J.prototype.STY = function(a) {
  this.writeByte(a, this.registerY);
};
J.prototype.SHA = function(a) {
  this.storeHighAddressIntoMemory(a, this.accumulator & this.registerX);
};
J.prototype.SHX = function(a) {
  this.storeHighAddressIntoMemory(a, this.registerX);
};
J.prototype.SHY = function(a) {
  this.storeHighAddressIntoMemory(a, this.registerY);
};
J.prototype.LDA = function(a) {
  this.storeValueIntoAccumulator(this.readByte(a));
};
J.prototype.LDX = function(a) {
  this.storeValueIntoRegisterX(this.readByte(a));
};
J.prototype.LDY = function(a) {
  this.storeValueIntoRegisterY(this.readByte(a));
};
J.prototype.LAX = function(a) {
  a = this.readByte(a);
  this.storeValueIntoAccumulator(a);
  this.storeValueIntoRegisterX(a);
};
J.prototype.LAS = function(a) {
  this.stackPointer &= this.readByte(a);
  this.storeValueIntoAccumulator(this.stackPointer);
  this.storeValueIntoRegisterX(this.stackPointer);
};
J.prototype.TAX = function() {
  this.storeValueIntoRegisterX(this.accumulator);
};
J.prototype.TAY = function() {
  this.storeValueIntoRegisterY(this.accumulator);
};
J.prototype.TXA = function() {
  this.storeValueIntoAccumulator(this.registerX);
};
J.prototype.TYA = function() {
  this.storeValueIntoAccumulator(this.registerY);
};
J.prototype.TSX = function() {
  this.storeValueIntoRegisterX(this.stackPointer);
};
J.prototype.TXS = function() {
  this.stackPointer = this.registerX;
};
J.prototype.PHA = function() {
  this.pushByte(this.accumulator);
};
J.prototype.PHP = function() {
  this.pushByte(this.getStatus() | 16);
};
J.prototype.PLA = function() {
  this.tick();
  this.storeValueIntoAccumulator(this.popByte());
};
J.prototype.PLP = function() {
  this.tick();
  this.irqDisabled = this.interruptFlag;
  this.setStatus(this.popByte());
};
J.prototype.AND = function(a) {
  return this.storeValueIntoAccumulator(this.accumulator & this.readByte(a));
};
J.prototype.ORA = function(a) {
  this.storeValueIntoAccumulator(this.accumulator | this.readByte(a));
};
J.prototype.EOR = function(a) {
  this.storeValueIntoAccumulator(this.accumulator ^ this.readByte(a));
};
J.prototype.BIT = function(a) {
  a = this.readByte(a);
  this.zeroFlag = !(this.accumulator & a) | 0;
  this.overflowFlag = a >>> 6 & 1;
  this.negativeFlag = a >>> 7;
};
J.prototype.INC = function(a) {
  return this.storeValueIntoMemory(a, this.readWriteByte(a) + 1 & 255);
};
J.prototype.INX = function() {
  this.storeValueIntoRegisterX(this.registerX + 1 & 255);
};
J.prototype.INY = function() {
  this.storeValueIntoRegisterY(this.registerY + 1 & 255);
};
J.prototype.DEC = function(a) {
  return this.storeValueIntoMemory(a, this.readWriteByte(a) - 1 & 255);
};
J.prototype.DEX = function() {
  this.storeValueIntoRegisterX(this.registerX - 1 & 255);
};
J.prototype.DEY = function() {
  this.storeValueIntoRegisterY(this.registerY - 1 & 255);
};
J.prototype.CMP = function(a) {
  this.compareRegisterAndMemory(this.accumulator, a);
};
J.prototype.CPX = function(a) {
  this.compareRegisterAndMemory(this.registerX, a);
};
J.prototype.CPY = function(a) {
  this.compareRegisterAndMemory(this.registerY, a);
};
J.prototype.BCC = function(a) {
  this.branchIf(!this.carryFlag, a);
};
J.prototype.BCS = function(a) {
  this.branchIf(this.carryFlag, a);
};
J.prototype.BNE = function(a) {
  this.branchIf(!this.zeroFlag, a);
};
J.prototype.BEQ = function(a) {
  this.branchIf(this.zeroFlag, a);
};
J.prototype.BVC = function(a) {
  this.branchIf(!this.overflowFlag, a);
};
J.prototype.BVS = function(a) {
  this.branchIf(this.overflowFlag, a);
};
J.prototype.BPL = function(a) {
  this.branchIf(!this.negativeFlag, a);
};
J.prototype.BMI = function(a) {
  this.branchIf(this.negativeFlag, a);
};
J.prototype.JMP = function(a) {
  this.programCounter = a;
};
J.prototype.JSR = function(a) {
  this.tick();
  this.pushWord(this.programCounter - 1 & 65535);
  this.programCounter = a;
};
J.prototype.RTS = function() {
  this.tick();
  this.tick();
  this.programCounter = this.popWord() + 1 & 65535;
};
J.prototype.BRK = function() {
  this.moveProgramCounter(1);
  this.pushWord(this.programCounter);
  this.pushByte(this.getStatus() | 16);
  this.interruptFlag = this.irqDisabled = 1;
  this.programCounter = this.readWord(this.activeInterrupts & 2 ? 65530 : 65534);
};
J.prototype.RTI = function() {
  this.tick();
  this.setStatus(this.popByte());
  this.irqDisabled = this.interruptFlag;
  this.programCounter = this.popWord();
};
J.prototype.ADC = function(a) {
  this.addValueToAccumulator(this.readByte(a));
};
J.prototype.SBC = function(a) {
  this.addValueToAccumulator(this.readByte(a) ^ 255);
};
J.prototype.ASL = function(a) {
  return this.rotateAccumulatorOrMemory(a, this.rotateLeft, !1);
};
J.prototype.LSR = function(a) {
  return this.rotateAccumulatorOrMemory(a, this.rotateRight, !1);
};
J.prototype.ROL = function(a) {
  return this.rotateAccumulatorOrMemory(a, this.rotateLeft, !0);
};
J.prototype.ROR = function(a) {
  return this.rotateAccumulatorOrMemory(a, this.rotateRight, !0);
};
J.prototype.DCP = function(a) {
  this.compareRegisterAndOperand(this.accumulator, this.DEC(a));
};
J.prototype.ISB = function(a) {
  this.addValueToAccumulator(this.INC(a) ^ 255);
};
J.prototype.SLO = function(a) {
  this.storeValueIntoAccumulator(this.accumulator | this.ASL(a));
};
J.prototype.SRE = function(a) {
  this.storeValueIntoAccumulator(this.accumulator ^ this.LSR(a));
};
J.prototype.RLA = function(a) {
  this.storeValueIntoAccumulator(this.accumulator & this.ROL(a));
};
J.prototype.XAA = function(a) {
  this.storeValueIntoAccumulator(this.registerX & this.AND(a));
};
J.prototype.RRA = function(a) {
  this.addValueToAccumulator(this.ROR(a));
};
J.prototype.AXS = function(a) {
  this.registerX = this.compareRegisterAndMemory(this.accumulator & this.registerX, a);
};
J.prototype.ANC = function(a) {
  this.rotateLeft(this.AND(a), !1);
};
J.prototype.ALR = function(a) {
  this.AND(a);
  this.LSR(null);
};
J.prototype.ARR = function(a) {
  this.AND(a);
  this.ROR(null);
  this.carryFlag = this.accumulator >>> 6 & 1;
  this.overflowFlag = this.accumulator >>> 5 & 1 ^ this.carryFlag;
};
J.prototype.TAS = function(a) {
  this.stackPointer = this.accumulator & this.registerX;
  this.SHA(a);
};
J.prototype.storeValueIntoAccumulator = function(a) {
  this.updateZeroAndNegativeFlag(a);
  return this.accumulator = a;
};
J.prototype.storeValueIntoRegisterX = function(a) {
  this.updateZeroAndNegativeFlag(a);
  this.registerX = a;
};
J.prototype.storeValueIntoRegisterY = function(a) {
  this.updateZeroAndNegativeFlag(a);
  this.registerY = a;
};
J.prototype.storeValueIntoMemory = function(a, b) {
  this.updateZeroAndNegativeFlag(b);
  return this.writeByte(a, b);
};
J.prototype.storeHighAddressIntoMemory = function(a, b) {
  this.pageCrossed ? this.writeByte(a, this.cpuMemory.read(a)) : this.writeByte(a, b & (a >>> 8) + 1);
};
J.prototype.addValueToAccumulator = function(a) {
  var b = this.accumulator + a + this.carryFlag;
  this.carryFlag = b >>> 8 & 1;
  this.overflowFlag = ((this.accumulator ^ b) & (a ^ b)) >>> 7 & 1;
  return this.storeValueIntoAccumulator(b & 255);
};
J.prototype.compareRegisterAndMemory = function(a, b) {
  return this.compareRegisterAndOperand(a, this.readByte(b));
};
J.prototype.compareRegisterAndOperand = function(a, b) {
  a -= b;
  this.carryFlag = 0 <= a | 0;
  this.updateZeroAndNegativeFlag(a);
  return a & 255;
};
J.prototype.branchIf = function(a, b) {
  a && (this.tick(), (this.programCounter & 65280) !== (b & 65280) && this.tick(), this.programCounter = b);
};
J.prototype.rotateAccumulatorOrMemory = function(a, b, d) {
  if (null != a) {
    return b = b.call(this, this.readWriteByte(a), d), this.storeValueIntoMemory(a, b);
  }
  a = b.call(this, this.accumulator, d);
  return this.storeValueIntoAccumulator(a);
};
J.prototype.rotateLeft = function(a, b) {
  b &= this.carryFlag;
  this.carryFlag = a >>> 7;
  return (a << 1 | b) & 255;
};
J.prototype.rotateRight = function(a, b) {
  b = (b & this.carryFlag) << 7;
  this.carryFlag = a & 1;
  return a >>> 1 | b;
};
J.prototype.updateZeroAndNegativeFlag = function(a) {
  this.zeroFlag = !(a & 255) | 0;
  this.negativeFlag = a >>> 7 & 1;
};
var K = J.prototype;
I[26] = [K.NOP, K.impliedMode, 0];
I[58] = [K.NOP, K.impliedMode, 0];
I[90] = [K.NOP, K.impliedMode, 0];
I[122] = [K.NOP, K.impliedMode, 0];
I[218] = [K.NOP, K.impliedMode, 0];
I[234] = [K.NOP, K.impliedMode, 0];
I[250] = [K.NOP, K.impliedMode, 0];
I[128] = [K.NOP, K.immediateMode, 1];
I[130] = [K.NOP, K.immediateMode, 1];
I[137] = [K.NOP, K.immediateMode, 1];
I[194] = [K.NOP, K.immediateMode, 1];
I[226] = [K.NOP, K.immediateMode, 1];
I[4] = [K.NOP, K.zeroPageMode, 1];
I[68] = [K.NOP, K.zeroPageMode, 1];
I[100] = [K.NOP, K.zeroPageMode, 1];
I[20] = [K.NOP, K.zeroPageXMode, 1];
I[52] = [K.NOP, K.zeroPageXMode, 1];
I[84] = [K.NOP, K.zeroPageXMode, 1];
I[116] = [K.NOP, K.zeroPageXMode, 1];
I[212] = [K.NOP, K.zeroPageXMode, 1];
I[244] = [K.NOP, K.zeroPageXMode, 1];
I[12] = [K.NOP, K.absoluteMode, 1];
I[28] = [K.NOP, K.absoluteXMode, 1];
I[60] = [K.NOP, K.absoluteXMode, 1];
I[92] = [K.NOP, K.absoluteXMode, 1];
I[124] = [K.NOP, K.absoluteXMode, 1];
I[220] = [K.NOP, K.absoluteXMode, 1];
I[252] = [K.NOP, K.absoluteXMode, 1];
I[24] = [K.CLC, K.impliedMode, 0];
I[88] = [K.CLI, K.impliedMode, 0];
I[216] = [K.CLD, K.impliedMode, 0];
I[184] = [K.CLV, K.impliedMode, 0];
I[56] = [K.SEC, K.impliedMode, 0];
I[120] = [K.SEI, K.impliedMode, 0];
I[248] = [K.SED, K.impliedMode, 0];
I[133] = [K.STA, K.zeroPageMode, 0];
I[149] = [K.STA, K.zeroPageXMode, 0];
I[141] = [K.STA, K.absoluteMode, 0];
I[157] = [K.STA, K.absoluteXMode, 2];
I[153] = [K.STA, K.absoluteYMode, 2];
I[129] = [K.STA, K.indirectXMode, 0];
I[145] = [K.STA, K.indirectYMode, 2];
I[134] = [K.STX, K.zeroPageMode, 0];
I[150] = [K.STX, K.zeroPageYMode, 0];
I[142] = [K.STX, K.absoluteMode, 0];
I[135] = [K.SAX, K.zeroPageMode, 0];
I[151] = [K.SAX, K.zeroPageYMode, 0];
I[143] = [K.SAX, K.absoluteMode, 0];
I[131] = [K.SAX, K.indirectXMode, 0];
I[132] = [K.STY, K.zeroPageMode, 0];
I[148] = [K.STY, K.zeroPageXMode, 0];
I[140] = [K.STY, K.absoluteMode, 0];
I[147] = [K.SHA, K.indirectYMode, 2];
I[159] = [K.SHA, K.absoluteYMode, 2];
I[158] = [K.SHX, K.absoluteYMode, 2];
I[156] = [K.SHY, K.absoluteXMode, 2];
I[169] = [K.LDA, K.immediateMode, 0];
I[165] = [K.LDA, K.zeroPageMode, 0];
I[181] = [K.LDA, K.zeroPageXMode, 0];
I[173] = [K.LDA, K.absoluteMode, 0];
I[189] = [K.LDA, K.absoluteXMode, 0];
I[185] = [K.LDA, K.absoluteYMode, 0];
I[161] = [K.LDA, K.indirectXMode, 0];
I[177] = [K.LDA, K.indirectYMode, 0];
I[162] = [K.LDX, K.immediateMode, 0];
I[166] = [K.LDX, K.zeroPageMode, 0];
I[182] = [K.LDX, K.zeroPageYMode, 0];
I[174] = [K.LDX, K.absoluteMode, 0];
I[190] = [K.LDX, K.absoluteYMode, 0];
I[160] = [K.LDY, K.immediateMode, 0];
I[164] = [K.LDY, K.zeroPageMode, 0];
I[180] = [K.LDY, K.zeroPageXMode, 0];
I[172] = [K.LDY, K.absoluteMode, 0];
I[188] = [K.LDY, K.absoluteXMode, 0];
I[171] = [K.LAX, K.immediateMode, 0];
I[167] = [K.LAX, K.zeroPageMode, 0];
I[183] = [K.LAX, K.zeroPageYMode, 0];
I[175] = [K.LAX, K.absoluteMode, 0];
I[191] = [K.LAX, K.absoluteYMode, 0];
I[163] = [K.LAX, K.indirectXMode, 0];
I[179] = [K.LAX, K.indirectYMode, 0];
I[187] = [K.LAS, K.absoluteYMode, 0];
I[170] = [K.TAX, K.impliedMode, 0];
I[168] = [K.TAY, K.impliedMode, 0];
I[138] = [K.TXA, K.impliedMode, 0];
I[152] = [K.TYA, K.impliedMode, 0];
I[154] = [K.TXS, K.impliedMode, 0];
I[186] = [K.TSX, K.impliedMode, 0];
I[72] = [K.PHA, K.impliedMode, 0];
I[8] = [K.PHP, K.impliedMode, 0];
I[104] = [K.PLA, K.impliedMode, 0];
I[40] = [K.PLP, K.impliedMode, 0];
I[41] = [K.AND, K.immediateMode, 0];
I[37] = [K.AND, K.zeroPageMode, 0];
I[53] = [K.AND, K.zeroPageXMode, 0];
I[45] = [K.AND, K.absoluteMode, 0];
I[61] = [K.AND, K.absoluteXMode, 0];
I[57] = [K.AND, K.absoluteYMode, 0];
I[33] = [K.AND, K.indirectXMode, 0];
I[49] = [K.AND, K.indirectYMode, 0];
I[9] = [K.ORA, K.immediateMode, 0];
I[5] = [K.ORA, K.zeroPageMode, 0];
I[21] = [K.ORA, K.zeroPageXMode, 0];
I[13] = [K.ORA, K.absoluteMode, 0];
I[29] = [K.ORA, K.absoluteXMode, 0];
I[25] = [K.ORA, K.absoluteYMode, 0];
I[1] = [K.ORA, K.indirectXMode, 0];
I[17] = [K.ORA, K.indirectYMode, 0];
I[73] = [K.EOR, K.immediateMode, 0];
I[69] = [K.EOR, K.zeroPageMode, 0];
I[85] = [K.EOR, K.zeroPageXMode, 0];
I[77] = [K.EOR, K.absoluteMode, 0];
I[93] = [K.EOR, K.absoluteXMode, 0];
I[89] = [K.EOR, K.absoluteYMode, 0];
I[65] = [K.EOR, K.indirectXMode, 0];
I[81] = [K.EOR, K.indirectYMode, 0];
I[36] = [K.BIT, K.zeroPageMode, 0];
I[44] = [K.BIT, K.absoluteMode, 0];
I[230] = [K.INC, K.zeroPageMode, 0];
I[246] = [K.INC, K.zeroPageXMode, 0];
I[238] = [K.INC, K.absoluteMode, 0];
I[254] = [K.INC, K.absoluteXMode, 2];
I[232] = [K.INX, K.impliedMode, 0];
I[200] = [K.INY, K.impliedMode, 0];
I[198] = [K.DEC, K.zeroPageMode, 0];
I[214] = [K.DEC, K.zeroPageXMode, 0];
I[206] = [K.DEC, K.absoluteMode, 0];
I[222] = [K.DEC, K.absoluteXMode, 2];
I[202] = [K.DEX, K.impliedMode, 0];
I[136] = [K.DEY, K.impliedMode, 0];
I[201] = [K.CMP, K.immediateMode, 0];
I[197] = [K.CMP, K.zeroPageMode, 0];
I[213] = [K.CMP, K.zeroPageXMode, 0];
I[205] = [K.CMP, K.absoluteMode, 0];
I[221] = [K.CMP, K.absoluteXMode, 0];
I[217] = [K.CMP, K.absoluteYMode, 0];
I[193] = [K.CMP, K.indirectXMode, 0];
I[209] = [K.CMP, K.indirectYMode, 0];
I[224] = [K.CPX, K.immediateMode, 0];
I[228] = [K.CPX, K.zeroPageMode, 0];
I[236] = [K.CPX, K.absoluteMode, 0];
I[192] = [K.CPY, K.immediateMode, 0];
I[196] = [K.CPY, K.zeroPageMode, 0];
I[204] = [K.CPY, K.absoluteMode, 0];
I[144] = [K.BCC, K.relativeMode, 0];
I[176] = [K.BCS, K.relativeMode, 0];
I[208] = [K.BNE, K.relativeMode, 0];
I[240] = [K.BEQ, K.relativeMode, 0];
I[80] = [K.BVC, K.relativeMode, 0];
I[112] = [K.BVS, K.relativeMode, 0];
I[16] = [K.BPL, K.relativeMode, 0];
I[48] = [K.BMI, K.relativeMode, 0];
I[76] = [K.JMP, K.absoluteMode, 0];
I[108] = [K.JMP, K.indirectMode, 0];
I[32] = [K.JSR, K.absoluteMode, 0];
I[96] = [K.RTS, K.impliedMode, 0];
I[0] = [K.BRK, K.impliedMode, 0];
I[64] = [K.RTI, K.impliedMode, 0];
I[105] = [K.ADC, K.immediateMode, 0];
I[101] = [K.ADC, K.zeroPageMode, 0];
I[117] = [K.ADC, K.zeroPageXMode, 0];
I[109] = [K.ADC, K.absoluteMode, 0];
I[125] = [K.ADC, K.absoluteXMode, 0];
I[121] = [K.ADC, K.absoluteYMode, 0];
I[97] = [K.ADC, K.indirectXMode, 0];
I[113] = [K.ADC, K.indirectYMode, 0];
I[233] = [K.SBC, K.immediateMode, 0];
I[235] = [K.SBC, K.immediateMode, 0];
I[229] = [K.SBC, K.zeroPageMode, 0];
I[245] = [K.SBC, K.zeroPageXMode, 0];
I[237] = [K.SBC, K.absoluteMode, 0];
I[253] = [K.SBC, K.absoluteXMode, 0];
I[249] = [K.SBC, K.absoluteYMode, 0];
I[225] = [K.SBC, K.indirectXMode, 0];
I[241] = [K.SBC, K.indirectYMode, 0];
I[10] = [K.ASL, K.accumulatorMode, 0];
I[6] = [K.ASL, K.zeroPageMode, 0];
I[22] = [K.ASL, K.zeroPageXMode, 0];
I[14] = [K.ASL, K.absoluteMode, 0];
I[30] = [K.ASL, K.absoluteXMode, 2];
I[74] = [K.LSR, K.accumulatorMode, 0];
I[70] = [K.LSR, K.zeroPageMode, 0];
I[86] = [K.LSR, K.zeroPageXMode, 0];
I[78] = [K.LSR, K.absoluteMode, 0];
I[94] = [K.LSR, K.absoluteXMode, 2];
I[42] = [K.ROL, K.accumulatorMode, 0];
I[38] = [K.ROL, K.zeroPageMode, 0];
I[54] = [K.ROL, K.zeroPageXMode, 0];
I[46] = [K.ROL, K.absoluteMode, 0];
I[62] = [K.ROL, K.absoluteXMode, 2];
I[106] = [K.ROR, K.accumulatorMode, 0];
I[102] = [K.ROR, K.zeroPageMode, 0];
I[118] = [K.ROR, K.zeroPageXMode, 0];
I[110] = [K.ROR, K.absoluteMode, 0];
I[126] = [K.ROR, K.absoluteXMode, 2];
I[199] = [K.DCP, K.zeroPageMode, 0];
I[215] = [K.DCP, K.zeroPageXMode, 0];
I[207] = [K.DCP, K.absoluteMode, 0];
I[223] = [K.DCP, K.absoluteXMode, 2];
I[219] = [K.DCP, K.absoluteYMode, 2];
I[195] = [K.DCP, K.indirectXMode, 0];
I[211] = [K.DCP, K.indirectYMode, 2];
I[231] = [K.ISB, K.zeroPageMode, 0];
I[247] = [K.ISB, K.zeroPageXMode, 0];
I[239] = [K.ISB, K.absoluteMode, 0];
I[255] = [K.ISB, K.absoluteXMode, 2];
I[251] = [K.ISB, K.absoluteYMode, 2];
I[227] = [K.ISB, K.indirectXMode, 0];
I[243] = [K.ISB, K.indirectYMode, 2];
I[7] = [K.SLO, K.zeroPageMode, 0];
I[23] = [K.SLO, K.zeroPageXMode, 0];
I[15] = [K.SLO, K.absoluteMode, 0];
I[31] = [K.SLO, K.absoluteXMode, 2];
I[27] = [K.SLO, K.absoluteYMode, 2];
I[3] = [K.SLO, K.indirectXMode, 0];
I[19] = [K.SLO, K.indirectYMode, 2];
I[71] = [K.SRE, K.zeroPageMode, 0];
I[87] = [K.SRE, K.zeroPageXMode, 0];
I[79] = [K.SRE, K.absoluteMode, 0];
I[95] = [K.SRE, K.absoluteXMode, 2];
I[91] = [K.SRE, K.absoluteYMode, 2];
I[67] = [K.SRE, K.indirectXMode, 0];
I[83] = [K.SRE, K.indirectYMode, 2];
I[39] = [K.RLA, K.zeroPageMode, 0];
I[55] = [K.RLA, K.zeroPageXMode, 0];
I[47] = [K.RLA, K.absoluteMode, 0];
I[63] = [K.RLA, K.absoluteXMode, 2];
I[59] = [K.RLA, K.absoluteYMode, 2];
I[35] = [K.RLA, K.indirectXMode, 0];
I[51] = [K.RLA, K.indirectYMode, 2];
I[139] = [K.XAA, K.immediateMode, 0];
I[103] = [K.RRA, K.zeroPageMode, 0];
I[119] = [K.RRA, K.zeroPageXMode, 0];
I[111] = [K.RRA, K.absoluteMode, 0];
I[127] = [K.RRA, K.absoluteXMode, 2];
I[123] = [K.RRA, K.absoluteYMode, 2];
I[99] = [K.RRA, K.indirectXMode, 0];
I[115] = [K.RRA, K.indirectYMode, 2];
I[203] = [K.AXS, K.immediateMode, 0];
I[11] = [K.ANC, K.immediateMode, 0];
I[43] = [K.ANC, K.immediateMode, 0];
I[75] = [K.ALR, K.immediateMode, 0];
I[107] = [K.ARR, K.immediateMode, 0];
I[155] = [K.TAS, K.absoluteYMode, 2];
// Input 43
// Input 44
var La = [10, 254, 20, 2, 40, 4, 80, 6, 160, 8, 60, 10, 14, 12, 26, 14, 12, 16, 24, 18, 48, 20, 96, 22, 192, 24, 72, 26, 16, 28, 32, 30];
// Input 45
var Ma = [[0, 1, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0], [0, 1, 1, 1, 1, 0, 0, 0], [1, 0, 0, 1, 1, 1, 1, 1]];
function L(a) {
  k.info('Initializing pulse channel #' + a);
  this.id = a;
  this.enabled = !1;
  this.gain = 1;
  this.lengthCounter = this.timerPeriod = this.timerCycle = 0;
  this.useConstantVolume = this.lengthCounterHalt = !1;
  this.constantVolume = 0;
  this.envelopeReset = !1;
  this.envelopeVolume = this.envelopeCycle = 0;
  this.envelopeLoop = !1;
  this.envelopePeriod = 0;
  this.sweepEnabled = !1;
  this.sweepCycle = 0;
  this.sweepNegate = this.sweepReset = !1;
  this.dutySelection = this.dutyPosition = this.sweepShift = this.sweepPeriod = 0;
}
L.prototype.reset = function() {
  k.info('Resetting pulse channel #' + this.id);
  this.sweepCycle = this.envelopeVolume = this.envelopeCycle = this.timerPeriod = this.timerCycle = 0;
  this.setEnabled(!1);
  this.writeDutyEnvelope(0);
  this.writeSweep(0);
  this.writeTimer(0);
  this.writeLengthCounter(0);
};
L.prototype.setEnabled = function(a) {
  a || (this.lengthCounter = 0);
  this.enabled = a;
};
L.prototype.writeDutyEnvelope = function(a) {
  this.dutySelection = (a & 192) >>> 6;
  this.lengthCounterHalt = 0 !== (a & 32);
  this.useConstantVolume = 0 !== (a & 16);
  this.constantVolume = a & 15;
  this.envelopeLoop = this.lengthCounterHalt;
  this.envelopePeriod = this.constantVolume;
};
L.prototype.writeSweep = function(a) {
  this.sweepEnabled = 0 !== (a & 128);
  this.sweepPeriod = (a & 112) >>> 4;
  this.sweepNegate = 0 !== (a & 8);
  this.sweepShift = a & 7;
  this.sweepReset = !0;
};
L.prototype.writeTimer = function(a) {
  this.timerPeriod = this.timerPeriod & 1792 | a & 255;
};
L.prototype.writeLengthCounter = function(a) {
  this.enabled && (this.lengthCounter = La[(a & 248) >>> 3]);
  this.timerPeriod = this.timerPeriod & 255 | (a & 7) << 8;
  this.dutyPosition = 0;
  this.envelopeReset = !0;
};
L.prototype.tick = function() {
  0 >= --this.timerCycle && (this.timerCycle = this.timerPeriod + 1 << 1, this.dutyPosition = this.dutyPosition + 1 & 7);
};
L.prototype.tickQuarterFrame = function() {
  this.updateEnvelope();
};
L.prototype.tickHalfFrame = function() {
  this.updateLengthCounter();
  this.updateSweep();
};
L.prototype.updateEnvelope = function() {
  this.envelopeReset ? (this.envelopeReset = !1, this.envelopeCycle = this.envelopePeriod, this.envelopeVolume = 15) : 0 < this.envelopeCycle ? this.envelopeCycle-- : (this.envelopeCycle = this.envelopePeriod, 0 < this.envelopeVolume ? this.envelopeVolume-- : this.envelopeLoop && (this.envelopeVolume = 15));
};
L.prototype.updateLengthCounter = function() {
  0 < this.lengthCounter && !this.lengthCounterHalt && this.lengthCounter--;
};
L.prototype.updateSweep = function() {
  0 < this.sweepCycle ? this.sweepCycle-- : (this.sweepEnabled && this.sweepShift && this.isTimerPeriodValid() && (this.timerPeriod += this.getSweep()), this.sweepCycle = this.sweepPeriod);
  this.sweepReset && (this.sweepReset = !1, this.sweepCycle = this.sweepPeriod);
};
L.prototype.getSweep = function() {
  var a = this.timerPeriod >>> this.sweepShift;
  return this.sweepNegate ? 1 === this.id ? ~a : -a : a;
};
L.prototype.isTimerPeriodValid = function() {
  return 8 <= this.timerPeriod && 2048 > this.timerPeriod + this.getSweep();
};
L.prototype.getOutput = function() {
  return this.lengthCounter && this.isTimerPeriodValid() ? this.gain * (this.useConstantVolume ? this.constantVolume : this.envelopeVolume) * Ma[this.dutySelection][this.dutyPosition] : 0;
};
// Input 46
var Na = [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
function Oa() {
  k.info('Initializing triangle channel');
  this.enabled = !1;
  this.gain = 1;
  this.lengthCounter = this.timerPeriod = this.timerCycle = 0;
  this.lengthCounterHalt = !1;
  this.linearCounterMax = this.linearCounter = 0;
  this.linearCounterReset = this.linearCounterControl = !1;
  this.dutyPosition = 15;
}
Oa.prototype.reset = function() {
  k.info('Resetting triangle channel');
  this.linearCounter = this.dutyPosition = this.timerPeriod = this.timerCycle = 0;
  this.setEnabled(!1);
  this.writeLinearCounter(0);
  this.writeTimer(0);
  this.writeLengthCounter(0);
};
Oa.prototype.setEnabled = function(a) {
  a || (this.lengthCounter = 0);
  this.enabled = a;
};
Oa.prototype.writeLinearCounter = function(a) {
  this.lengthCounterHalt = 0 !== (a & 128);
  this.linearCounterMax = a & 127;
  this.linearCounterControl = this.lengthCounterHalt;
};
Oa.prototype.writeTimer = function(a) {
  this.timerPeriod = this.timerPeriod & 1792 | a & 255;
};
Oa.prototype.writeLengthCounter = function(a) {
  this.enabled && (this.lengthCounter = La[(a & 248) >>> 3]);
  this.timerPeriod = this.timerPeriod & 255 | (a & 7) << 8;
  this.linearCounterReset = !0;
};
Oa.prototype.tick = function() {
  0 >= --this.timerCycle && (this.timerCycle = this.timerPeriod + 1, this.lengthCounter && this.linearCounter && 3 < this.timerPeriod && (this.dutyPosition = this.dutyPosition + 1 & 31));
};
Oa.prototype.tickQuarterFrame = function() {
  this.updateLinearCounter();
};
Oa.prototype.tickHalfFrame = function() {
  this.updateLengthCounter();
};
Oa.prototype.updateLinearCounter = function() {
  this.linearCounterReset ? this.linearCounter = this.linearCounterMax : 0 < this.linearCounter && this.linearCounter--;
  this.linearCounterControl || (this.linearCounterReset = !1);
};
Oa.prototype.updateLengthCounter = function() {
  0 < this.lengthCounter && !this.lengthCounterHalt && this.lengthCounter--;
};
Oa.prototype.getOutput = function() {
  return this.gain * Na[this.dutyPosition];
};
// Input 47
function M() {
  k.info('Initializing noise channel');
  this.enabled = !1;
  this.gain = 1;
  this.timerMode = !1;
  this.timerPeriod = this.timerCycle = 0;
  this.timerPeriods = null;
  this.lengthCounter = 0;
  this.useConstantVolume = this.lengthCounterHalt = !1;
  this.constantVolume = 0;
  this.envelopeReset = !1;
  this.envelopeVolume = this.envelopeCycle = 0;
  this.envelopeLoop = !1;
  this.shiftRegister = this.envelopePeriod = 0;
}
M.prototype.reset = function() {
  k.info('Resetting noise channel');
  this.envelopeVolume = this.envelopeCycle = this.timerCycle = 0;
  this.shiftRegister = 1;
  this.setEnabled(!1);
  this.writeEnvelope(0);
  this.writeTimer(0);
  this.writeLengthCounter(0);
};
M.prototype.setEnabled = function(a) {
  a || (this.lengthCounter = 0);
  this.enabled = a;
};
M.prototype.setRegionParams = function(a) {
  this.timerPeriods = a.noiseChannelTimerPeriods;
};
M.prototype.writeEnvelope = function(a) {
  this.lengthCounterHalt = 0 !== (a & 32);
  this.useConstantVolume = 0 !== (a & 16);
  this.constantVolume = a & 15;
  this.envelopeLoop = this.lengthCounterHalt;
  this.envelopePeriod = this.constantVolume;
};
M.prototype.writeTimer = function(a) {
  this.timerMode = 0 !== (a & 128);
  this.timerPeriod = this.timerPeriods[a & 15];
};
M.prototype.writeLengthCounter = function(a) {
  this.enabled && (this.lengthCounter = La[(a & 248) >>> 3]);
  this.envelopeReset = !0;
};
M.prototype.tick = function() {
  0 >= --this.timerCycle && (this.timerCycle = this.timerPeriod, this.updateShiftRegister());
};
M.prototype.tickQuarterFrame = function() {
  this.updateEnvelope();
};
M.prototype.tickHalfFrame = function() {
  this.updateLengthCounter();
};
M.prototype.updateShiftRegister = function() {
  this.shiftRegister = this.shiftRegister >>> 1 | (this.shiftRegister & 1 ^ this.shiftRegister >>> (this.timerMode ? 6 : 1) & 1) << 14;
};
M.prototype.updateEnvelope = function() {
  this.envelopeReset ? (this.envelopeReset = !1, this.envelopeCycle = this.envelopePeriod, this.envelopeVolume = 15) : 0 < this.envelopeCycle ? this.envelopeCycle-- : (this.envelopeCycle = this.envelopePeriod, 0 < this.envelopeVolume ? this.envelopeVolume-- : this.envelopeLoop && (this.envelopeVolume = 15));
};
M.prototype.updateLengthCounter = function() {
  0 < this.lengthCounter && !this.lengthCounterHalt && this.lengthCounter--;
};
M.prototype.getOutput = function() {
  return !this.lengthCounter || this.shiftRegister & 1 ? 0 : this.gain * (this.useConstantVolume ? this.constantVolume : this.envelopeVolume);
};
// Input 48
function N() {
  k.info('Initializing DMC channel');
  this.enabled = !1;
  this.output = 0;
  this.gain = 1;
  this.timerPeriod = this.timerCycle = 0;
  this.timerPeriods = null;
  this.sampleRemainingLength = this.sampleCurrentAddress = this.sampleLength = this.sampleAddress = 0;
  this.sampleLoop = !1;
  this.shiftRegister = this.sampleBuffer = -1;
  this.memoryAccessCycles = this.shiftRegisterBits = 0;
  this.irqActive = this.irqEnabled = !1;
  this.cpuMemory = this.cpu = null;
}
N.prototype.connect = function(a) {
  k.info('Connecting DMC channel');
  this.cpu = a.cpu;
  this.cpuMemory = a.cpuMemory;
};
N.prototype.reset = function() {
  k.info('Resetting DMC channel');
  this.timerCycle = 0;
  this.shiftRegister = this.sampleBuffer = -1;
  this.memoryAccessCycles = this.shiftRegisterBits = 0;
  this.setEnabled(!1);
  this.writeFlagsTimer(0);
  this.writeOutputLevel(0);
  this.writeSampleAddress(0);
  this.writeSampleLength(0);
};
N.prototype.setEnabled = function(a) {
  a ? 0 === this.sampleRemainingLength && (this.sampleCurrentAddress = this.sampleAddress, this.sampleRemainingLength = this.sampleLength) : this.sampleRemainingLength = 0;
  this.enabled = a;
  this.clearIRQ();
};
N.prototype.setRegionParams = function(a) {
  this.timerPeriods = a.dmcChannelTimerPeriods;
};
N.prototype.activateIRQ = function() {
  this.irqActive = !0;
  this.cpu.activateInterrupt(8);
};
N.prototype.clearIRQ = function() {
  this.irqActive = !1;
  this.cpu.clearInterrupt(8);
};
N.prototype.writeFlagsTimer = function(a) {
  this.irqEnabled = 0 !== (a & 128);
  this.sampleLoop = 0 !== (a & 64);
  this.timerPeriod = this.timerPeriods[a & 15];
  this.irqEnabled || this.clearIRQ();
};
N.prototype.writeOutputLevel = function(a) {
  this.output = a & 127;
};
N.prototype.writeSampleAddress = function(a) {
  this.sampleAddress = 49152 | (a & 255) << 6;
};
N.prototype.writeSampleLength = function(a) {
  this.sampleLength = (a & 255) << 4 | 1;
};
N.prototype.tick = function() {
  0 < this.memoryAccessCycles && this.memoryAccessCycles--;
  0 >= --this.timerCycle && (this.timerCycle = this.timerPeriod, this.updateSample());
};
N.prototype.updateSample = function() {
  this.updateSampleBuffer();
  this.updateShiftRegister();
  this.updateOutput();
};
N.prototype.updateSampleBuffer = function() {
  0 > this.sampleBuffer && 0 < this.sampleRemainingLength && (this.sampleBuffer = this.cpuMemory.read(this.sampleCurrentAddress), this.memoryAccessCycles = 4, 65535 > this.sampleCurrentAddress ? this.sampleCurrentAddress++ : this.sampleCurrentAddress = 32768, 0 >= --this.sampleRemainingLength && (this.sampleLoop ? (this.sampleCurrentAddress = this.sampleAddress, this.sampleRemainingLength = this.sampleLength) : this.irqEnabled && this.activateIRQ()));
};
N.prototype.updateShiftRegister = function() {
  0 >= --this.shiftRegisterBits && (this.shiftRegisterBits = 8, this.shiftRegister = this.sampleBuffer, this.sampleBuffer = -1);
};
N.prototype.updateOutput = function() {
  0 <= this.shiftRegister && (this.shiftRegister & 1 ? 125 >= this.output && (this.output += 2) : 2 <= this.output && (this.output -= 2), this.shiftRegister >>>= 1);
};
N.prototype.getOutput = function() {
  return this.gain * this.output;
};
// Input 49
// Input 50
function O() {
  k.info('Initializing APU');
  this.pulse1 = new L(1);
  this.pulse2 = new L(2);
  this.triangle = new Oa;
  this.noise = new M;
  this.dmc = new N;
  this.channels = [this.pulse1, this.pulse2, this.triangle, this.noise, this.dmc];
  this.frameCounter = -1;
  this.frameCounterMax5 = this.frameCounterMax4 = null;
  this.frameCounterLast = this.frameCounterResetDelay = 0;
  this.frameFiveStepMode = !1;
  this.frameStep = 0;
  this.frameIrqDisabled = this.frameIrqActive = !1;
  this.ticksPerSecond = this.ticksToOutput = this.sampleRate = 0;
  this.cpu = this.callback = null;
}
O.prototype.connect = function(a) {
  k.info('Connecting APU');
  this.cpu = a.cpu;
  this.dmc.connect(a);
};
O.prototype.reset = function() {
  k.info('Resetting APU');
  this.pulse1.reset();
  this.pulse2.reset();
  this.triangle.reset();
  this.noise.reset();
  this.dmc.reset();
  this.clearFrameIRQ();
  this.writeFrameCounter(0);
};
O.prototype.setRegionParams = function(a) {
  k.info('Setting APU region parameters');
  this.frameCounterMax4 = a.frameCounterMax4;
  this.frameCounterMax5 = a.frameCounterMax5;
  this.ticksPerSecond = 29829.55 * a.framesPerSecond;
  this.noise.setRegionParams(a);
  this.dmc.setRegionParams(a);
};
O.prototype.setSampleRate = function(a) {
  this.sampleRate = a;
};
O.prototype.getSampleRate = function() {
  return this.sampleRate;
};
O.prototype.setCallback = function(a) {
  k.info((a ? 'Setting' : 'Removing') + ' APU callback');
  this.callback = a;
};
O.prototype.getCallback = function() {
  return this.callback;
};
O.prototype.setVolume = function(a, b) {
  k.info('Setting volume of APU channel #' + a + ' to ' + b);
  this.channels[a].gain = b;
};
O.prototype.getVolume = function(a) {
  return this.channels[a].gain;
};
O.prototype.writeFrameCounter = function(a) {
  this.frameCounterLast = a;
  this.frameFiveStepMode = 0 !== (a & 128);
  this.frameIrqDisabled = 0 !== (a & 64);
  this.frameCounterResetDelay = 4;
  this.frameStep = 0;
  0 > this.frameCounter && (this.frameCounter = this.getFrameCounterMax());
  this.frameIrqDisabled && this.clearFrameIRQ();
  this.frameFiveStepMode && (this.tickHalfFrame(), this.tickQuarterFrame());
};
O.prototype.getFrameCounterMax = function() {
  return (this.frameFiveStepMode ? this.frameCounterMax5 : this.frameCounterMax4)[this.frameStep];
};
O.prototype.activateFrameIRQ = function() {
  this.frameIrqActive = !0;
  this.cpu.activateInterrupt(4);
};
O.prototype.clearFrameIRQ = function() {
  this.frameIrqActive = !1;
  this.cpu.clearInterrupt(4);
};
O.prototype.writePulseDutyEnvelope = function(a, b) {
  this.getPulse(a).writeDutyEnvelope(b);
};
O.prototype.writePulseSweep = function(a, b) {
  this.getPulse(a).writeSweep(b);
};
O.prototype.writePulseTimer = function(a, b) {
  this.getPulse(a).writeTimer(b);
};
O.prototype.writePulseLengthCounter = function(a, b) {
  this.getPulse(a).writeLengthCounter(b);
};
O.prototype.getPulse = function(a) {
  return 1 === a ? this.pulse1 : this.pulse2;
};
O.prototype.writeTriangleLinearCounter = function(a) {
  this.triangle.writeLinearCounter(a);
};
O.prototype.writeTriangleTimer = function(a) {
  this.triangle.writeTimer(a);
};
O.prototype.writeTriangleLengthCounter = function(a) {
  this.triangle.writeLengthCounter(a);
};
O.prototype.writeNoiseEnvelope = function(a) {
  this.noise.writeEnvelope(a);
};
O.prototype.writeNoiseTimer = function(a) {
  this.noise.writeTimer(a);
};
O.prototype.writeNoiseLengthCounter = function(a) {
  this.noise.writeLengthCounter(a);
};
O.prototype.writeDMCFlagsTimer = function(a) {
  this.dmc.writeFlagsTimer(a);
};
O.prototype.writeDMCOutputLevel = function(a) {
  this.dmc.writeOutputLevel(a);
};
O.prototype.writeDMCSampleAddress = function(a) {
  this.dmc.writeSampleAddress(a);
};
O.prototype.writeDMCSampleLength = function(a) {
  this.dmc.writeSampleLength(a);
};
O.prototype.writeStatus = function(a) {
  this.pulse1.setEnabled(0 !== (a & 1));
  this.pulse2.setEnabled(0 !== (a & 2));
  this.triangle.setEnabled(0 !== (a & 4));
  this.noise.setEnabled(0 !== (a & 8));
  this.dmc.setEnabled(0 !== (a & 16));
};
O.prototype.readStatus = function() {
  var a = this.getStatus();
  this.clearFrameIRQ();
  return a;
};
O.prototype.getStatus = function() {
  return 0 < this.pulse1.lengthCounter | (0 < this.pulse2.lengthCounter) << 1 | (0 < this.triangle.lengthCounter) << 2 | (0 < this.noise.lengthCounter) << 3 | (0 < this.dmc.sampleRemainingLength) << 4 | this.frameIrqActive << 6 | this.dmc.irqActive << 7;
};
O.prototype.isBlockingCPU = function() {
  return 0 < this.dmc.memoryAccessCycles;
};
O.prototype.isBlockingDMA = function() {
  return 2 < this.dmc.memoryAccessCycles;
};
O.prototype.tick = function() {
  this.tickFrameCounter();
  this.pulse1.tick();
  this.pulse2.tick();
  this.triangle.tick();
  this.noise.tick();
  this.dmc.tick();
  this.tickOutput();
};
O.prototype.tickFrameCounter = function() {
  this.frameCounterResetDelay && 0 >= --this.frameCounterResetDelay && (this.frameCounter = this.getFrameCounterMax());
  0 >= --this.frameCounter && this.tickFrameStep();
};
O.prototype.tickFrameStep = function() {
  this.frameStep = (this.frameStep + 1) % 6;
  this.frameCounter = this.getFrameCounterMax();
  switch(this.frameStep) {
    case 1:
      this.tickQuarterFrame();
      break;
    case 2:
      this.tickQuarterFrame();
      this.tickHalfFrame();
      break;
    case 3:
      this.tickQuarterFrame();
      break;
    case 4:
      this.tickFrameIRQ();
      break;
    case 5:
      this.tickQuarterFrame();
      this.tickHalfFrame();
      this.tickFrameIRQ();
      break;
    case 0:
      this.tickFrameIRQ();
  }
};
O.prototype.tickQuarterFrame = function() {
  this.pulse1.tickQuarterFrame();
  this.pulse2.tickQuarterFrame();
  this.triangle.tickQuarterFrame();
  this.noise.tickQuarterFrame();
};
O.prototype.tickHalfFrame = function() {
  this.pulse1.tickHalfFrame();
  this.pulse2.tickHalfFrame();
  this.triangle.tickHalfFrame();
  this.noise.tickHalfFrame();
};
O.prototype.tickFrameIRQ = function() {
  this.frameIrqDisabled || this.frameFiveStepMode || this.activateFrameIRQ();
};
O.prototype.tickOutput = function() {
  this.callback && 0 >= --this.ticksToOutput && (this.ticksToOutput += this.ticksPerSecond / this.sampleRate, this.callback(this.getOutput()));
};
O.prototype.getOutput = function() {
  var a = 0, b = this.pulse1.getOutput(), d = this.pulse2.getOutput();
  if (b || d) {
    a += 95.88 / (8128 / (b + d) + 100);
  }
  b = this.triangle.getOutput();
  d = this.noise.getOutput();
  var f = this.dmc.getOutput();
  if (b || d || f) {
    a += 159.79 / (1 / (b / 8227 + d / 12241 + f / 22638) + 100);
  }
  return a;
};
// Input 51
// Input 52
function P(a) {
  a = void 0 === a ? {} : a;
  k.info('Initializing NES');
  this.cpu = a.cpu || new J;
  this.ppu = a.ppu || new H;
  this.apu = a.apu || new O;
  this.dma = a.dma || new oa;
  this.cpuMemory = a.cpuMemory || new m;
  this.ppuMemory = a.ppuMemory || new p;
  this.region = this.mapper = this.cartridge = null;
  this.connectUnits();
  this.applyRegion();
}
P.prototype.connectUnits = function() {
  this.cpu.connect(this);
  this.ppu.connect(this);
  this.apu.connect(this);
  this.dma.connect(this);
  this.cpuMemory.connect(this);
};
P.prototype.resetUnits = function() {
  this.cpuMemory.reset();
  this.ppuMemory.reset();
  this.mapper.reset();
  this.ppu.reset();
  this.apu.reset();
  this.dma.reset();
  this.cpu.reset();
};
P.prototype.setRegion = function(a) {
  this.region = a;
  this.applyRegion();
};
P.prototype.getRegion = function() {
  return this.region;
};
P.prototype.getUsedRegion = function() {
  return this.region || this.cartridge && this.cartridge.region || 'NTSC';
};
P.prototype.applyRegion = function() {
  k.info('Updating region parameters');
  var a = this.getUsedRegion(), b = ia(a);
  k.info('Detected region: "' + a + '"');
  this.ppu.setRegionParams(b);
  this.apu.setRegionParams(b);
};
P.prototype.setCartridge = function(a) {
  this.cartridge && (k.info('Removing current cartridge'), this.mapper && (this.mapper.disconnect(), this.mapper = null), this.cartridge = null);
  if (a) {
    k.info('Inserting cartridge');
    this.cartridge = a;
    var b = a.mapper, d = ya[b];
    if (d) {
      k.info('Creating "' + b + '" mapper'), a = new d(a);
    } else {
      throw Error('Invalid mapper: ' + h(b));
    }
    this.mapper = a;
    this.mapper.connect(this);
    this.applyRegion();
    this.power();
  }
};
P.prototype.getCartridge = function() {
  return this.cartridge;
};
P.prototype.power = function() {
  this.cartridge && this.resetUnits();
};
P.prototype.reset = function() {
  this.cpu.activateInterrupt(1);
};
P.prototype.setInputDevice = function(a, b) {
  var d = this.cpuMemory.getInputDevice(a);
  d && d.disconnect();
  this.cpuMemory.setInputDevice(a, b);
  b && b.connect(this);
};
P.prototype.getInputDevice = function(a) {
  return this.cpuMemory.getInputDevice(a);
};
P.prototype.setPalette = function(a) {
  this.ppu.setBasePalette(a);
};
P.prototype.getPalette = function() {
  return this.ppu.getBasePalette();
};
P.prototype.renderFrame = function(a) {
  if (this.cartridge) {
    for (this.ppu.setFrameBuffer(a); !this.ppu.isFrameAvailable();) {
      this.cpu.step();
    }
  } else {
    this.renderWhiteNoise(a);
  }
};
P.prototype.renderDebugFrame = function(a) {
  this.cartridge ? (this.ppu.setFrameBuffer(a), this.ppu.renderDebugFrame()) : this.renderEmptyFrame(a);
};
P.prototype.renderWhiteNoise = function(a) {
  for (var b = 0; b < a.length; b++) {
    var d = ~~(255 * Math.random());
    a[b] = Da(d, d, d);
  }
};
P.prototype.renderEmptyFrame = function(a) {
  a.fill(Ha);
};
P.prototype.setAudioSampleRate = function(a) {
  this.apu.setSampleRate(a);
};
P.prototype.getAudioSampleRate = function() {
  return this.apu.getSampleRate();
};
P.prototype.setAudioCallback = function(a) {
  this.apu.setCallback(a);
};
P.prototype.getAudioCallback = function() {
  return this.apu.getCallback();
};
P.prototype.setAudioVolume = function(a, b) {
  this.apu.setVolume(a, b);
};
P.prototype.getAudioVolume = function(a) {
  return this.apu.getVolume(a);
};
P.prototype.getNVRAM = function() {
  return this.mapper ? this.mapper.getNVRAM() : null;
};
// Input 53
var Pa = {A:0, B:1, SELECT:2, START:3, UP:4, DOWN:5, LEFT:6, RIGHT:7};
function Qa() {
  this.buttonStates = new Uint8Array(24);
  this.buttonStates[19] = 1;
  this.readPosition = 0;
}
Qa.prototype.connect = function() {
  k.info('Connecting joypad');
};
Qa.prototype.disconnect = function() {
  k.info('Disconnecting joypad');
};
Qa.prototype.strobe = function() {
  this.readPosition = 0;
};
Qa.prototype.read = function() {
  var a = this.buttonStates[this.readPosition];
  this.readPosition = (this.readPosition + 1) % this.buttonStates.length;
  return a;
};
Qa.prototype.setButtonPressed = function(a, b) {
  this.buttonStates[a] = b ? 1 : 0;
};
Qa.prototype.isButtonPressed = function(a) {
  return 1 === this.buttonStates[a];
};
// Input 54
function Ra() {
  this.triggerPressed = !1;
  this.beamY = this.beamX = -1;
  this.ppu = null;
}
Ra.prototype.connect = function(a) {
  k.info('Connecting zapper');
  this.ppu = a.ppu;
};
Ra.prototype.disconnect = function() {
  k.info('Disconnecting zapper');
  this.ppu = null;
};
Ra.prototype.strobe = function() {
};
Ra.prototype.read = function() {
  return this.triggerPressed << 4 | !this.isLightDetected() << 3;
};
Ra.prototype.isLightDetected = function() {
  return 0 <= this.beamX && 256 > this.beamX && 0 <= this.beamY && 240 > this.beamY && this.ppu.isBrightFramePixel(this.beamX, this.beamY);
};
Ra.prototype.setTriggerPressed = function(a) {
  this.triggerPressed = a;
};
Ra.prototype.isTriggerPressed = function() {
  return this.triggerPressed;
};
Ra.prototype.setBeamPosition = function(a, b) {
  this.beamX = a;
  this.beamY = b;
};
Ra.prototype.getBeamPosition = function() {
  return [this.beamX, this.beamY];
};
// Input 55
// Input 56
var Sa = {0:'NROM', 1:'MMC1', 2:'UNROM', 3:'CNROM', 4:'MMC3', 7:'AOROM', 11:'COLOR_DREAMS', 34:'BNROM'}, Ta = {}, Ua = (Ta[17] = 'SUROM', Ta[18] = 'SOROM', Ta[19] = 'SXROM', Ta);
function Va(a) {
  return 78 === a[0] && 69 === a[1] && 83 === a[2] && 26 === a[3];
}
function Wa(a) {
  return 0 < a ? 128 * Math.pow(2, a - 1) : 0;
}
var Xa = {name:'iNES / NES 2.0', parse:function(a) {
  if (!Va(a)) {
    throw Error('Incorrect signature');
  }
  if (16 > a.length) {
    throw Error('Input is too short: expected at least 16 B but got ' + e(a.length));
  }
  var b = a[4], d = a[5], f = a[7] & 240 | a[6] >>> 4;
  var g = a[6] & 8 ? '4S' : a[6] & 1 ? 'V' : 'H';
  if (8 === (a[7] & 12)) {
    k.info('Detected NES 2.0 format');
    var l = 2;
    f |= (a[8] & 15) << 8;
    var n = (a[8] & 240) >>> 4;
    b |= (a[9] & 15) << 8;
    d |= (a[9] & 240) << 4;
    var y = Wa((a[10] & 240) >>> 4);
    var F = Wa((a[11] & 240) >>> 4);
    var r = y + Wa(a[10] & 15);
    var Y = F + Wa(a[11] & 15);
    var la = a[12] & 1 ? 'PAL' : 'NTSC';
  } else {
    k.info('Detected iNES format'), l = 1, r = 8192 * (a[8] || 1), y = a[6] & 2 ? r : 0, Y = d ? 0 : 8192, F = 0, la = a[9] & 1 ? 'PAL' : 'NTSC';
  }
  if (0 === b) {
    throw Error('Invalid header: 0 PRG ROM units');
  }
  var S = 16 + (a[6] & 4 ? 512 : 0);
  b *= 16384;
  var T = S + b;
  d *= 8192;
  var U = T + d, V = Sa[f] || f.toString();
  'BNROM' === V && 0 < d && (V = 'NINA_001');
  f = Ua[f << 4 | n];
  if (a.length < U) {
    throw Error('Input is too short: expected at least ' + e(U) + ' but got ' + e(a.length));
  }
  S = a.subarray(S, T);
  a = d ? a.subarray(T, U) : void 0;
  return {version:l, mirroring:g, region:la, mapper:V, submapper:f, prgROMSize:b, prgROM:S, prgRAMSize:r, prgRAMSizeBattery:y, chrROMSize:d, chrROM:a, chrRAMSize:Y, chrRAMSizeBattery:F};
}};
Xa.supports = Va;
// Input 57
var Ya = [Xa];
// Input 58
var Q = '0123456789abcdef'.split(''), Za = [-2147483648, 8388608, 32768, 128], $a = [24, 16, 8, 0];
// Input 59
// Input 60
// Input 61
// Input 62
// Input 63
// Input 64
var ab, bb = window.AudioContext || window.webkitAudioContext;
// Input 65
function cb(a, b) {
  var d = this;
  k.info('Initializing audio processor');
  this.nes = a;
  this.processorNode = b.createScriptProcessor(4096, 0, 1);
  this.processorNode.onaudioprocess = function(a) {
    return d.emptyOutputBuffer(a.outputBuffer);
  };
  this.lastSample = 0;
  this.receiveSample = this.receiveSample.bind(this);
  this.recordPosition = 0;
  this.recordBuffer = new Float32Array(4096);
  this.outputBuffer = new Float32Array(4096);
  this.outputBufferFull = !1;
}
cb.prototype.connect = function(a) {
  k.info('Connecting audio processor');
  this.nes.setAudioCallback(this.receiveSample);
  this.processorNode.connect(a);
};
cb.prototype.disconnect = function() {
  k.info('Disconnecting audio processor');
  this.nes.setAudioCallback(null);
  this.processorNode.disconnect();
};
cb.prototype.setSampleRate = function(a) {
  k.info('Setting sample rate to ' + a + ' Hz');
  this.nes.setAudioSampleRate(a);
};
cb.prototype.receiveSample = function(a) {
  if (4096 === this.recordPosition) {
    if (this.outputBufferFull) {
      return;
    }
    this.swapBuffers();
  }
  this.lastSample = this.recordBuffer[this.recordPosition++] = a;
};
cb.prototype.emptyOutputBuffer = function(a) {
  this.outputBufferFull || (this.recordBuffer.fill(this.lastSample, this.recordPosition), this.swapBuffers());
  a.copyToChannel ? a.copyToChannel(this.outputBuffer, 0) : a.getChannelData(0).set(this.outputBuffer);
  this.outputBufferFull = !1;
  this.adjustSampleRate();
};
cb.prototype.swapBuffers = function() {
  var a = c.makeIterator([this.recordBuffer, this.outputBuffer]);
  this.outputBuffer = a.next().value;
  this.recordBuffer = a.next().value;
  this.outputBufferFull = !0;
  this.recordPosition = 0;
};
cb.prototype.adjustSampleRate = function() {
  var a = 100 * (0.5 - this.recordPosition / 4096);
  this.nes.setAudioSampleRate(this.nes.getAudioSampleRate() + a);
};
// Input 66
var db = {master:-1, pulse1:0, pulse2:1, triangle:2, noise:3, dmc:4};
function eb(a, b) {
  k.info('Initializing audio mixer');
  this.nes = a;
  this.volume = 0.5;
  this.gainNode = b.createGain();
  this.gainNode.connect(b.destination);
  this.applyVolume();
}
eb.prototype.getInput = function() {
  return this.gainNode;
};
eb.prototype.setVolume = function(a, b) {
  if ('number' !== typeof b || 0 > b || 1 < b) {
    throw Error('Invalid audio volume: ' + h(b));
  }
  this.getVolume(a) !== b && (k.info('Setting volume of "' + a + '" channel to ' + ~~(100 * b) + '%'), a = db[a], 0 <= a ? this.nes.setAudioVolume(a, b) : (this.volume = b, this.applyVolume()));
};
eb.prototype.applyVolume = function() {
  this.gainNode.gain.value = this.volume;
};
eb.prototype.getVolume = function(a) {
  var b = db[a];
  if (null == b) {
    throw Error('Invalid audio channel: ' + h(a));
  }
  return 0 <= b ? this.nes.getAudioVolume(b) : this.volume;
};
// Input 67
function fb(a) {
  k.info('Initializing audio');
  this.enabled = !0;
  this.active = !1;
  this.speed = 1;
  null == ab && (ab = new bb);
  this.context = ab;
  this.processor = new cb(a, this.context);
  this.mixer = new eb(a, this.context);
  this.applyEnabledAndActive();
  this.applySpeed();
}
fb.prototype.setEnabled = function(a) {
  if ('boolean' !== typeof a) {
    throw Error('Invalid audio enabled: ' + h(a));
  }
  this.enabled !== a && (k.info('Audio ' + (a ? 'enabled' : 'disabled')), this.enabled = a, this.applyEnabledAndActive());
};
fb.prototype.isEnabled = function() {
  return this.enabled;
};
fb.prototype.setActive = function(a) {
  this.active !== a && (k.info('Audio ' + (a ? 'resumed' : 'suspended')), this.active = a, this.applyEnabledAndActive());
};
fb.prototype.isActive = function() {
  return this.active;
};
fb.prototype.applyEnabledAndActive = function() {
  this.enabled && this.active ? (this.processor.connect(this.mixer.getInput()), this.context.resume()) : this.processor.disconnect();
};
fb.prototype.setSpeed = function(a) {
  this.speed !== a && (k.info('Setting audio speed to ' + a + 'x'), this.speed = a, this.applySpeed());
};
fb.prototype.applySpeed = function() {
  this.processor.setSampleRate(this.context.sampleRate / this.speed);
};
fb.prototype.getSpeed = function() {
  return this.speed;
};
fb.prototype.setVolume = function(a, b) {
  this.mixer.setVolume(a, b);
};
fb.prototype.getVolume = function(a) {
  return this.mixer.getVolume(a);
};
// Input 68
// Input 69
var gb = [1, 2];
// Input 70
function R(a, b) {
  this.source = a;
  this.name = b;
}
R.fromString = function(a) {
  a = a.split('.');
  if (2 !== a.length) {
    return null;
  }
  var b = c.makeIterator(a);
  a = b.next().value;
  b = b.next().value;
  return new R(a, b);
};
R.prototype.equals = function(a) {
  return this.source === a.source && this.name === a.name;
};
R.prototype.toString = function() {
  return this.source + '.' + this.name;
};
// Input 71
var hb = {65:'a', 66:'b', 67:'c', 68:'d', 69:'e', 70:'f', 71:'g', 72:'h', 73:'i', 74:'j', 75:'k', 76:'l', 77:'m', 78:'n', 79:'o', 80:'p', 81:'q', 82:'r', 83:'s', 84:'t', 85:'u', 86:'v', 87:'w', 88:'x', 89:'y', 90:'z', 48:'0', 49:'1', 50:'2', 51:'3', 52:'4', 53:'5', 54:'6', 55:'7', 56:'8', 57:'9', 32:'space', 188:',', 190:'.', 191:'/', 186:';', 222:"'", 220:'\\', 219:'[', 221:']', 192:'`', 189:'-', 187:'=', 112:'f1', 113:'f2', 114:'f3', 115:'f4', 116:'f5', 117:'f6', 118:'f7', 119:'f8', 120:'f9', 121:'f10', 
122:'f11', 123:'f12', 16:'shift', 17:'ctrl', 18:'alt', 37:'left', 38:'up', 39:'right', 40:'down', 9:'tab', 36:'home', 35:'end', 33:'page-up', 34:'page-down', 27:'escape', 19:'pause', 13:'enter', 8:'backspace', 45:'insert', 46:'delete', 20:'caps-lock', 144:'num-lock', 145:'scroll-lock', 96:'numpad-0', 97:'numpad-1', 98:'numpad-2', 99:'numpad-3', 100:'numpad-4', 101:'numpad-5', 102:'numpad-6', 103:'numpad-7', 104:'numpad-8', 105:'numpad-9', 107:'add', 109:'subtract', 106:'multiply', 111:'divide', 110:'decimal-point'};
function ib(a) {
  var b = this;
  k.info('Initializing keyboard');
  this.router = a;
  this.keyDownCallback = function(a) {
    return b.onKeyChange(a, !0);
  };
  this.keyUpCallback = function(a) {
    return b.onKeyChange(a, !1);
  };
}
ib.prototype.activate = function() {
  k.info('Activating keyboard');
  window.addEventListener('keydown', this.keyDownCallback);
  window.addEventListener('keyup', this.keyUpCallback);
};
ib.prototype.deactivate = function() {
  k.info('Deactivating keyboard');
  window.removeEventListener('keydown', this.keyDownCallback);
  window.removeEventListener('keyup', this.keyUpCallback);
};
ib.prototype.onKeyChange = function(a, b) {
  var d = new R('keyboard', hb[a.keyCode || a.which]);
  this.router.routeInput(d, b) && a.preventDefault();
};
// Input 72
var jb = {0:'left', 1:'middle', 2:'right'};
function kb(a) {
  var b = this;
  k.info('Initializing mouse');
  this.router = a;
  this.mouseDownCallback = function(a) {
    return b.onButtonChange(a, !0);
  };
  this.mouseUpCallback = function(a) {
    return b.onButtonChange(a, !1);
  };
  this.mouseMoveCallback = function(a) {
    return b.onCursorChange(a);
  };
}
kb.prototype.activate = function() {
  k.info('Activating mouse');
  window.addEventListener('mousedown', this.mouseDownCallback);
  window.addEventListener('mouseup', this.mouseUpCallback);
  window.addEventListener('mousemove', this.mouseMoveCallback);
};
kb.prototype.deactivate = function() {
  k.info('Deactivating mouse');
  window.removeEventListener('mousedown', this.mouseDownCallback);
  window.removeEventListener('mouseup', this.mouseUpCallback);
  window.removeEventListener('mousemove', this.mouseMoveCallback);
};
kb.prototype.onButtonChange = function(a, b) {
  var d = new R('mouse', jb[a.button]);
  this.router.routeInput(d, b) && a.preventDefault();
};
kb.prototype.onCursorChange = function(a) {
  a = [a.clientX, a.clientY];
  var b = new R('mouse', 'cursor');
  this.router.routeInput(b, a);
};
// Input 73
var lb = ['left-stick-x', 'left-stick-y', 'right-stick-x', 'right-stick-y'], mb = 'a b x y left-bumper right-bumper left-trigger right-trigger back start left-stick right-stick dpad-up dpad-down dpad-left dpad-right guide'.split(' ');
function nb(a) {
  k.info('Initializing gamepads');
  this.router = a;
  this.gamepads = null;
  this.requestId = 0;
}
nb.prototype.activate = function() {
  navigator.getGamepads ? (k.info('Activating gamepads'), this.requestUpdate()) : k.warn('Cannot activate gamepads (Gamepad API is not available)');
};
nb.prototype.deactivate = function() {
  k.info('Deactivating gamepads');
  cancelAnimationFrame(this.requestId);
};
nb.prototype.requestUpdate = function() {
  var a = this;
  this.requestId = requestAnimationFrame(function() {
    return a.updateGamepads();
  });
};
nb.prototype.updateGamepads = function() {
  var a = this.readGamepads();
  this.gamepads && this.detectChanges(this.gamepads, a);
  this.gamepads = a;
  this.requestUpdate();
};
nb.prototype.readGamepads = function() {
  return Array.from(navigator.getGamepads()).map(function(a) {
    return a && {index:a.index, mapping:a.mapping, axes:a.axes.map(Math.round), buttons:a.buttons.map(function(a) {
      return a.pressed;
    })};
  });
};
nb.prototype.detectChanges = function(a, b) {
  for (var d = 0; d < a.length; d++) {
    var f = a[d], g = b[d];
    if (f && g) {
      for (var l = f.axes, n = g.axes, y = 0; y < Math.min(l.length, n.length); y++) {
        if (l[y] !== n[y]) {
          this.onAxisChange(g, y, l[y], n[y]);
        }
      }
      f = f.buttons;
      l = g.buttons;
      for (n = 0; n < Math.min(f.length, l.length); n++) {
        if (f[n] !== l[n]) {
          this.onButtonChange(g, n, l[n]);
        }
      }
    }
  }
};
nb.prototype.onAxisChange = function(a, b, d, f) {
  d && (d = ob(a, b, d), this.routeInput(a, d, !1));
  f && (b = ob(a, b, f), this.routeInput(a, b, !0));
};
nb.prototype.onButtonChange = function(a, b, d) {
  b = 'standard' === a.mapping ? mb[b] : 'button-' + b;
  this.routeInput(a, b, d);
};
nb.prototype.routeInput = function(a, b, d) {
  a = new R('gamepad' + a.index, b);
  this.router.routeInput(a, d);
};
function ob(a, b, d) {
  d = 0 < d ? '+' : '-';
  return 'standard' === a.mapping ? lb[b] + d : 'axis-' + b + d;
}
;
// Input 74
var pb = {}, qb = (pb.keyboard = {Source:ib, indexed:!1}, pb.mouse = {Source:kb, indexed:!1}, pb.gamepad = {Source:nb, indexed:!0}, pb);
// Input 75
function rb(a) {
  k.info('Initializing sources');
  this.router = a;
  this.sources = [];
  this.suspended = this.active = !1;
  this.recordCallback = null;
  for (var b in qb) {
    this.sources.push(new qb[b].Source(this));
  }
}
rb.prototype.setActive = function(a) {
  this.active !== a && (k.info('Sources ' + (a ? 'activated' : 'deactivated')), a ? this.sources.forEach(function(a) {
    return a.activate();
  }) : this.sources.forEach(function(a) {
    return a.deactivate();
  }), this.active = a);
};
rb.prototype.isActive = function() {
  return this.active;
};
rb.prototype.recordInput = function(a) {
  if ('function' !== typeof a) {
    throw Error('Invalid record input callback: ' + h(a));
  }
  k.info('Recording source input');
  this.recordCallback = a;
  this.suspended = this.active;
  this.setActive(!0);
};
rb.prototype.isRecording = function() {
  return null != this.recordCallback;
};
rb.prototype.routeInput = function(a, b) {
  return this.recordCallback ? (b || (k.info('Caught "' + a + '" source input'), this.setActive(this.suspended), this.recordCallback(a.toString()), this.recordCallback = null), !0) : this.router.routeInput(a, b);
};
// Input 76
function sb(a, b, d) {
  this.port = a;
  this.device = b;
  this.name = d;
}
sb.fromString = function(a) {
  a = a.split('.');
  if (3 !== a.length) {
    return null;
  }
  var b = c.makeIterator(a), d = b.next().value;
  a = b.next().value;
  b = b.next().value;
  var f = parseInt(d, 10);
  d = isNaN(f) ? d : f;
  return new sb(d, a, b);
};
sb.prototype.equals = function(a) {
  return this.port === a.port && this.device === a.device && this.name === a.name;
};
sb.prototype.toString = function() {
  return this.port + '.' + this.device + '.' + this.name;
};
// Input 77
var tb = {a:Pa.A, b:Pa.B, select:Pa.SELECT, start:Pa.START, up:Pa.UP, down:Pa.DOWN, left:Pa.LEFT, right:Pa.RIGHT};
function ub(a) {
  this.joypad = a;
}
ub.prototype.getDevice = function() {
  return this.joypad;
};
ub.prototype.setInput = function(a, b) {
  if (a in tb) {
    if ('boolean' !== typeof b) {
      throw Error('Invalid joypad button state: ' + h(b));
    }
    this.joypad.setButtonPressed(tb[a], b);
  } else {
    throw Error('Invalid joypad button: ' + h(a));
  }
};
ub.prototype.getInput = function(a) {
  if (a in tb) {
    return this.joypad.isButtonPressed(tb[a]);
  }
  throw Error('Invalid joypad button: ' + h(a));
};
// Input 78
function vb(a) {
  this.zapper = a;
}
vb.prototype.getDevice = function() {
  return this.zapper;
};
vb.prototype.setInput = function(a, b) {
  if ('trigger' === a) {
    if ('boolean' !== typeof b) {
      throw Error('Invalid zapper trigger state: ' + h(b));
    }
    this.zapper.setTriggerPressed(b);
  } else {
    if ('beam' === a) {
      if (!Array.isArray(b) || 2 !== b.length) {
        throw Error('Invalid zapper beam position: ' + h(b));
      }
      b = c.makeIterator(b);
      a = b.next().value;
      b = b.next().value;
      if ('number' !== typeof a) {
        throw Error('Invalid zapper beam X position: ' + h(a));
      }
      if ('number' !== typeof b) {
        throw Error('Invalid zapper beam Y position: ' + h(b));
      }
      this.zapper.setBeamPosition(a, b);
    } else {
      throw Error('Invalid zapper input: ' + h(a));
    }
  }
};
vb.prototype.getInput = function(a) {
  if ('trigger' === a) {
    return this.zapper.isTriggerPressed();
  }
  if ('beam' === a) {
    return this.zapper.getBeamPosition();
  }
  throw Error('Invalid zapper input: ' + h(a));
};
// Input 79
var wb = {}, xb = (wb.joypad = {Device:Qa, Adapter:ub}, wb.zapper = {Device:Ra, Adapter:vb}, wb);
// Input 80
function yb(a, b) {
  if ('string' === typeof a) {
    if (null == b || b === R) {
      var d = R.fromString(a);
      if (d) {
        a = d.source;
        b = a.replace(/[0-9]+$/, '');
        var f = qb[b];
        if (!f || f.indexed !== (a !== b)) {
          throw Error('Invalid input source: ' + h(a));
        }
        return d;
      }
    }
    if (null == b || b === sb) {
      if (d = sb.fromString(a)) {
        a = d.port;
        b = d.device;
        if (!(0 <= gb.indexOf(a))) {
          throw Error('Invalid input port: ' + h(a));
        }
        if (!(b in xb)) {
          throw Error('Invalid input device: ' + h(b));
        }
        return d;
      }
    }
  }
  if (null != b) {
    throw Error('Invalid ' + (b === R ? 'source' : 'device') + ' input: ' + h(a));
  }
  throw Error('Invalid input: ' + h(a));
}
;
// Input 81
// Input 82
function zb(a) {
  k.info('Initializing devices');
  this.nes = a;
  a = {};
  for (var b = c.makeIterator(gb), d = b.next(); !d.done; d = b.next()) {
    d = d.value;
    a[d] = {};
    for (var f in xb) {
      var g = xb[f];
      a[d][f] = new g.Adapter(new g.Device);
    }
  }
  this.adapters = a;
  this.set(1, 'joypad');
  this.set(2, 'zapper');
}
zb.prototype.set = function(a, b) {
  if (!(0 <= gb.indexOf(a))) {
    throw Error('Invalid port: ' + h(a));
  }
  if (null !== b && !(b in xb)) {
    throw Error('Invalid device: ' + h(b));
  }
  this.get(a) !== b && (k.info('Setting device on port ' + a + ' to "' + (b || 'none') + '"'), b = null !== b ? this.adapters[a][b].getDevice() : null, this.nes.setInputDevice(a, b));
};
zb.prototype.get = function(a) {
  if (!(0 <= gb.indexOf(a))) {
    throw Error('Invalid port: ' + h(a));
  }
  a = this.nes.getInputDevice(a);
  for (var b in xb) {
    if (a instanceof xb[b].Device) {
      return b;
    }
  }
  return null;
};
zb.prototype.setInput = function(a, b) {
  a = yb(a, sb);
  this.setRawInput(a.port, a.device, a.name, b);
};
zb.prototype.setRawInput = function(a, b, d, f) {
  this.adapters[a][b].setInput(d, f);
};
zb.prototype.getInput = function(a) {
  a = yb(a, sb);
  return this.adapters[a.port][a.device].getInput(a.name);
};
// Input 83
function Ab() {
  k.info('Initializing input map');
  this.items = [];
}
Ab.prototype.setAll = function(a) {
  if (!a || 'object' !== typeof a) {
    throw Error('Invalid mapping: ' + h(a));
  }
  this.deleteAll();
  for (var b in a) {
    var d = a[b];
    if ('string' === typeof d) {
      this.set(b, d);
    } else {
      if (Array.isArray(d)) {
        d = c.makeIterator(d);
        for (var f = d.next(); !f.done; f = d.next()) {
          this.set(b, f.value);
        }
      } else {
        throw Error('Invalid source input(s): ' + h(d));
      }
    }
  }
};
Ab.prototype.set = function(a, b) {
  a = yb(a, sb);
  b = yb(b, R);
  this.has(a, b) || (k.info('Mapping "' + a + '" input to "' + b + '"'), this.items.push({devInput:a, srcInput:b}));
};
Ab.prototype.getAll = function() {
  for (var a = {}, b = c.makeIterator(this.items), d = b.next(); !d.done; d = b.next()) {
    var f = d.value;
    d = f.devInput.toString();
    f = f.srcInput.toString();
    a[d] = a[d] || [];
    a[d].push(f);
  }
  return a;
};
Ab.prototype.get = function(a) {
  var b = [];
  a = yb(a);
  this.forEach(a, function(a) {
    b.push(a.toString());
  });
  return b;
};
Ab.prototype.deleteAll = function() {
  k.info('Unmapping all inputs');
  this.items.length = 0;
};
Ab.prototype.delete = function(a) {
  var b = yb(a);
  k.info('Unmapping "' + b + '" input');
  this.items = this.items.filter(function(a) {
    var d = a.srcInput;
    return !a.devInput.equals(b) && !d.equals(b);
  });
};
Ab.prototype.has = function(a, b) {
  for (var d = c.makeIterator(this.items), f = d.next(); !f.done; f = d.next()) {
    if (f = f.value, f.devInput.equals(a) && f.srcInput.equals(b)) {
      return !0;
    }
  }
  return !1;
};
Ab.prototype.forEach = function(a, b) {
  if (a instanceof sb) {
    for (var d = c.makeIterator(this.items), f = d.next(); !f.done; f = d.next()) {
      f = f.value, f.devInput.equals(a) && b(f.srcInput);
    }
  } else {
    if (a instanceof R) {
      for (d = c.makeIterator(this.items), f = d.next(); !f.done; f = d.next()) {
        f = f.value, f.srcInput.equals(a) && b(f.devInput);
      }
    }
  }
};
// Input 84
function Bb(a, b, d) {
  k.info('Initializing input router');
  this.map = a;
  this.devices = b;
  this.video = d;
  this.mouseCursor = null;
}
Bb.prototype.routeInput = function(a, b) {
  var d = this;
  if ('mouse' === a.source) {
    if (null == this.video.getOutput()) {
      return !1;
    }
    if ('cursor' === a.name) {
      this.mouseCursor = b;
      b = this.video.getOutputCoordinates(b[0], b[1]);
      a = c.makeIterator(gb);
      for (var f = a.next(); !f.done; f = a.next()) {
        this.devices.setRawInput(f.value, 'zapper', 'beam', b);
      }
      return !0;
    }
    if (this.mouseCursor) {
      var g = c.makeIterator(this.mouseCursor);
      f = g.next().value;
      g = g.next().value;
      var l = this.video.getOutputRect(), n = l.top, y = l.bottom, F = l.right;
      if (f < l.left || f > F || g < n || g > y) {
        return !1;
      }
    }
  }
  var r = !1;
  this.map.forEach(a, function(a) {
    d.devices.setRawInput(a.port, a.device, a.name, b);
    r = !0;
  });
  return r;
};
// Input 85
// Input 86
function Cb(a) {
  this.index = this.time = 0;
  this.diffs = Array(void 0 === a ? 50 : a).fill(0);
}
Cb.prototype.update = function(a) {
  a = void 0 === a ? window.performance.now() : a;
  this.diffs[this.index] = a - this.time;
  this.index = (this.index + 1) % this.diffs.length;
  this.time = a;
};
Cb.prototype.get = function() {
  return 1000 / (this.diffs.reduce(function(a, b) {
    return a + b;
  }) / this.diffs.length);
};
// Input 87
var Db = {}, Eb = (Db.auto = null, Db.ntsc = 'NTSC', Db.pal = 'PAL', Db), Fb = {setActive:function() {
}, setSpeed:function() {
}};
function W(a, b, d, f) {
  var g = this;
  k.info('Initializing system');
  this.nes = a;
  this.video = b;
  this.audio = d || Fb;
  this.autoPaused = !1;
  this.regionName = 'auto';
  this.speed = 1;
  this.drawId = this.execId = 0;
  this.sources = f;
  this.fps = new Cb;
  this.applyRegion();
  this.applySpeed();
  'https:' === location.protocol && document.addEventListener('visibilitychange', function() {
    return g.onVisibilityChange();
  });
}
W.prototype.onVisibilityChange = function() {
  document.hidden ? (k.info('Lost visibility'), this.autoPaused = this.isRunning(), this.stop()) : (k.info('Gained visibility'), this.autoPaused && this.start());
};
W.prototype.start = function() {
  var a = this;
  if (!this.isRunning()) {
    k.info('Starting execution');
    var b = 1000 / (this.speed * this.getTargetFPS());
    this.execId = setInterval(function() {
      return a.step();
    }, b);
    this.audio.setActive(!0);
    this.sources.setActive(!0);
  }
};
W.prototype.stop = function() {
  this.isRunning() && (k.info('Stopping execution'), clearInterval(this.execId), cancelAnimationFrame(this.drawId), this.execId = 0, this.audio.setActive(!1), this.sources.setActive(!1));
};
W.prototype.restart = function() {
  this.stop();
  this.start();
};
W.prototype.isRunning = function() {
  return !!this.execId;
};
W.prototype.step = function() {
  var a = this;
  this.video.getOutput() && (this.video.renderFrame(), cancelAnimationFrame(this.drawId), this.drawId = requestAnimationFrame(function() {
    return a.video.drawFrame();
  }));
  this.fps.update();
};
W.prototype.power = function() {
  k.info('HW reset');
  this.nes.power();
};
W.prototype.reset = function() {
  k.info('SW reset');
  this.nes.reset();
};
W.prototype.setRegion = function(a) {
  if (!(a in Eb)) {
    throw Error('Invalid region: ' + h(a));
  }
  this.regionName !== a && (k.info('Setting region to "' + a + '"'), this.regionName = a, this.applyRegion(), this.isRunning() && this.restart());
};
W.prototype.applyRegion = function() {
  this.nes.setRegion(Eb[this.regionName]);
};
W.prototype.getRegion = function() {
  return this.regionName;
};
W.prototype.setSpeed = function(a) {
  if ('number' !== typeof a || 0 >= a) {
    throw Error('Invalid speed: ' + h(a));
  }
  this.speed !== a && (k.info('Setting emulation speed to ' + a + 'x'), this.speed = a, this.applySpeed(), this.isRunning() && this.restart());
};
W.prototype.applySpeed = function() {
  this.audio.setSpeed(this.speed);
};
W.prototype.getSpeed = function() {
  return this.speed;
};
W.prototype.getFPS = function() {
  return this.fps.get();
};
W.prototype.getTargetFPS = function() {
  var a = this.nes.getUsedRegion();
  return ia(a).framesPerSecond;
};
// Input 88
// Input 89
var Gb = ['maximized', 'normalized', 'stretched'], Hb = {position:'fixed', top:'0', right:'0', bottom:'0', left:'0', margin:'auto', width:'auto', height:'auto'};
// Input 90
// Input 91
var Ib;
function Jb() {
  if (null == Ib) {
    k.info('Creating auxiliary canvas');
    var a = document.createElement('canvas');
    a.width = 256;
    a.height = 240;
    Ib = Kb(a);
  }
  return Ib;
}
function Kb(a) {
  k.info('Getting 2d canvas context');
  a = a.getContext('2d', {alpha:!1});
  if (null == a) {
    throw Error('Unable to get 2d canvas context');
  }
  return a;
}
function Lb(a) {
  this.context = Kb(a);
  this.filter = 'nearest';
  this.scale = 1;
}
Lb.prototype.createFrame = function(a, b, d, f) {
  d = this.context.createImageData(d, f);
  f = (new Uint32Array(d.data.buffer)).fill(Ha);
  return {x:a, y:b, data:f, image:d};
};
Lb.prototype.drawFrame = function(a) {
  (1 !== this.scale ? Jb() : this.context).putImageData(a.image, a.x, a.y);
};
Lb.prototype.begin = function() {
};
Lb.prototype.end = function() {
  1 !== this.scale && (this.applyFilter(), this.applyScaling());
};
Lb.prototype.setFilter = function(a) {
  this.filter = a;
};
Lb.prototype.applyFilter = function() {
  var a = 'linear' === this.filter;
  this.context.imageSmoothingEnabled = a;
  this.context.mozImageSmoothingEnabled = a;
  this.context.oImageSmoothingEnabled = a;
  this.context.msImageSmoothingEnabled = a;
};
Lb.prototype.setScale = function(a) {
  this.scale = a;
};
Lb.prototype.applyScaling = function() {
  var a = Jb().canvas, b = this.context.canvas;
  this.context.drawImage(a, 0, 0, a.width, a.height, 0, 0, b.width, b.height);
};
// Input 92
function Mb(a, b, d) {
  b = a.createShader(b);
  a.shaderSource(b, d);
  a.compileShader(b);
  if (!a.getShaderParameter(b, a.COMPILE_STATUS)) {
    throw Error('Shader compilation error: ' + a.getShaderInfoLog(b));
  }
  return b;
}
function Nb(a) {
  a: {
    for (var b = {alpha:!1, depth:!1, antialias:!1}, d = c.makeIterator(['webgl', 'experimental-webgl']), f = d.next(); !f.done; f = d.next()) {
      if (f = f.value, k.info('Getting ' + f + ' canvas context'), f = a.getContext(f, b)) {
        break a;
      }
    }
    throw Error('Unable to get webgl or experimental-webgl canvas context');
  }
  a = f;
  b = a.createProgram();
  a.attachShader(b, Mb(a, a.VERTEX_SHADER, '\n  uniform vec2 uScreenSize;\n  attribute vec2 aVertexPosition;\n  attribute vec2 aTextureCoord;\n  varying vec2 vTextureCoord;\n\n  void main(void) {\n    float x = aVertexPosition.x / (0.5 * uScreenSize.x) - 1.0; // [0, width] -> [-1, 1]\n    float y = 1.0 - aVertexPosition.y / (0.5 * uScreenSize.y); // [height, 0] -> [-1, 1]\n    gl_Position = vec4(x, y, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n  }\n'));
  a.attachShader(b, Mb(a, a.FRAGMENT_SHADER, '\n  precision mediump float;\n\n  uniform sampler2D uSampler;\n  varying vec2 vTextureCoord;\n\n  void main(void) {\n    gl_FragColor = texture2D(uSampler, vTextureCoord);\n  }\n'));
  a.linkProgram(b);
  if (!a.getProgramParameter(b, a.LINK_STATUS)) {
    throw Error('Shader linking error');
  }
  d = a.getUniformLocation(b, 'uScreenSize');
  f = a.getUniformLocation(b, 'uSampler');
  var g = a.getAttribLocation(b, 'aVertexPosition'), l = a.getAttribLocation(b, 'aTextureCoord');
  a.enableVertexAttribArray(g);
  a.enableVertexAttribArray(l);
  a.useProgram(b);
  this.gl = a;
  this.scale = 1;
  this.filter = 'nearest';
  this.screenSizeUniform = d;
  this.samplerUniform = f;
  this.vertexPositionAttribute = g;
  this.textureCoordAttribute = l;
}
Nb.prototype.createFrame = function(a, b, d, f) {
  d = Ob(d);
  f = Ob(f);
  var g = this.gl, l = this.createFrameData(d, f);
  a = this.createFrameVertices(a, b, d, f);
  b = this.createFrameCoords();
  g = g.createTexture();
  return {width:d, height:f, data:l, vertices:a, coords:b, texture:g};
};
Nb.prototype.createFrameData = function(a, b) {
  return (new Uint32Array(a * b)).fill(Ha);
};
Nb.prototype.createFrameVertices = function(a, b, d, f) {
  var g = this.gl;
  a = new Float32Array([a, b, a + d, b, a + d, b + f, a, b + f]);
  b = g.createBuffer();
  g.bindBuffer(g.ARRAY_BUFFER, b);
  g.bufferData(g.ARRAY_BUFFER, a, g.STATIC_DRAW);
  return b;
};
Nb.prototype.createFrameCoords = function() {
  var a = this.gl, b = new Float32Array([0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0]), d = a.createBuffer();
  a.bindBuffer(a.ARRAY_BUFFER, d);
  a.bufferData(a.ARRAY_BUFFER, b, a.STATIC_DRAW);
  return d;
};
Nb.prototype.drawFrame = function(a) {
  this.updateFrameTexture(a);
  this.updateShaderParams(a);
  this.drawFrameVertices(a);
};
Nb.prototype.updateFrameTexture = function(a) {
  var b = this.gl, d = 'linear' === this.filter ? b.LINEAR : b.NEAREST, f = new Uint8Array(a.data.buffer);
  b.activeTexture(b.TEXTURE0);
  b.bindTexture(b.TEXTURE_2D, a.texture);
  b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MAG_FILTER, d);
  b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MIN_FILTER, d);
  b.texImage2D(b.TEXTURE_2D, 0, b.RGBA, a.width, a.height, 0, b.RGBA, b.UNSIGNED_BYTE, f);
};
Nb.prototype.updateShaderParams = function(a) {
  var b = this.gl;
  b.uniform1i(this.samplerUniform, 0);
  b.bindBuffer(b.ARRAY_BUFFER, a.vertices);
  b.vertexAttribPointer(this.vertexPositionAttribute, 2, b.FLOAT, !1, 0, 0);
  b.bindBuffer(b.ARRAY_BUFFER, a.coords);
  b.vertexAttribPointer(this.textureCoordAttribute, 2, b.FLOAT, !1, 0, 0);
};
Nb.prototype.drawFrameVertices = function(a) {
  var b = this.gl;
  b.bindBuffer(b.ARRAY_BUFFER, a.vertices);
  b.drawArrays(b.TRIANGLE_FAN, 0, 4);
};
Nb.prototype.begin = function() {
  var a = this.gl, b = a.canvas, d = b.width;
  b = b.height;
  var f = d / this.scale, g = b / this.scale;
  a.viewport(0, 0, d, b);
  a.clearColor(0.0, 0.0, 0.0, 1.0);
  a.clear(a.COLOR_BUFFER_BIT);
  a.uniform2f(this.screenSizeUniform, f, g);
};
Nb.prototype.end = function() {
  this.gl.flush();
};
Nb.prototype.setScale = function(a) {
  this.scale = a;
};
Nb.prototype.setFilter = function(a) {
  this.filter = a;
};
function Ob(a) {
  for (var b = 1; b < a;) {
    b *= 2;
  }
  return b;
}
;
// Input 93
var Pb = {}, Qb = (Pb.canvas = Lb, Pb.webgl = Nb, Pb), Rb = {}, Sb = (Rb.webgl = 'canvas', Rb);
// Input 94
for (var Tb = null, Ub = c.makeIterator(['', 'webkit', 'moz', 'ms']), Vb = Ub.next(); !Vb.done; Vb = Ub.next()) {
  var Wb = Vb.value;
  if (Xb('fullscreenElement', Wb) in document) {
    Tb = Wb;
    break;
  }
}
function Xb(a, b) {
  b = void 0 === b ? Tb : b;
  'moz' === b && (a = a.replace('exit', 'cancel').replace('screen', 'Screen'));
  return b + Yb(a);
}
function Yb(a) {
  return a.charAt(0).toUpperCase() + a.slice(1);
}
function Zb() {
  var a = this;
  this.request = null;
  this.on('change', function() {
    return a.onChange();
  });
  this.on('error', function() {
    return a.onError();
  });
}
Zb.prototype.supported = function() {
  return null != Tb;
};
Zb.prototype.enabled = function() {
  return this.supported() ? document[Xb('fullscreenEnabled')] : !1;
};
Zb.prototype.is = function() {
  return this.supported() ? null != document[Xb('fullscreenElement')] : !1;
};
Zb.prototype.on = function(a, b) {
  this.supported() && (a = 'ms' === Tb ? 'MSFullscreen' + Yb(a) : Tb + 'fullscreen' + a, document.addEventListener(a, b));
};
Zb.prototype.enter = function(a) {
  var b = this;
  k.info('Fullscreen enter requested');
  if (!this.supported()) {
    return Promise.reject(Error('Browser does not support fullscreen API'));
  }
  if (!this.enabled()) {
    return Promise.reject(Error('Browser is blocking fullscreen request'));
  }
  if (this.is()) {
    return Promise.resolve();
  }
  if (this.request && 'exit' === this.request.type) {
    return Promise.reject(Error('Fullscreen exit in progress'));
  }
  null == this.request && (this.request = {type:'enter'}, this.request.promise = new Promise(function(d, f) {
    k.info('Entering fullscreen');
    b.request.resolve = d;
    b.request.reject = f;
    a[Xb('requestFullscreen')]();
  }));
  return this.request.promise;
};
Zb.prototype.exit = function() {
  var a = this;
  k.info('Fullscreen exit requested');
  if (!this.is()) {
    return Promise.resolve();
  }
  if (this.request && 'enter' === this.request.type) {
    return Promise.reject(Error('Fullscreen enter in progress'));
  }
  null == this.request && (this.request = {type:'exit'}, this.request.promise = new Promise(function(b, d) {
    k.info('Exiting fullscreen');
    a.request.resolve = b;
    a.request.reject = d;
    document[Xb('exitFullscreen')]();
  }));
  return this.request.promise;
};
Zb.prototype.onChange = function() {
  var a = this.is() ? 'enter' : 'exit';
  k.info('Fullscreen ' + a + 'ed');
  this.request && this.request.type === a && (this.request.resolve(), this.request = null);
};
Zb.prototype.onError = function() {
  k.error('Detected fullscreen error');
  this.request && (this.request.reject(Error('Failed to ' + this.request.type + ' fullscreen')), this.request = null);
};
// Input 95
function X(a) {
  var b = this;
  k.info('Initializing video');
  this.nes = a;
  this.renderer = this.canvas = null;
  this.rendererName = 'webgl';
  this.paletteName = 'fceux';
  this.debugFrame = this.frame = null;
  this.scale = 1;
  this.filter = 'nearest';
  this.debug = !1;
  this.fullscreenType = 'maximized';
  this.fullscreen = new Zb;
  this.fullscreen.on('change', function() {
    return b.onFullscreenChange();
  });
  this.applyPalette();
  'https:' === location.protocol && window.addEventListener('deviceorientation', function() {
    return b.onResolutionChange();
  });
  window.addEventListener('resize', function() {
    return b.onResolutionChange();
  });
}
X.prototype.onResolutionChange = function() {
  this.isFullscreen() && (k.info('Updating fullscreen canvas after resolution change'), this.updateRenderer(), this.updateSize(), this.updateStyle(), this.drawFrame());
};
X.prototype.onFullscreenChange = function() {
  this.canvas && (k.info('Updating canvas after fullscreen change'), this.updateRenderer(), this.updateSize(), this.updateStyle(), this.drawFrame());
};
X.prototype.setOutput = function(a) {
  if (null !== a && !(a instanceof HTMLCanvasElement)) {
    throw Error('Invalid video output: ' + h(a));
  }
  k.info('Setting video output to ' + a);
  if (this.canvas = a) {
    this.createRenderer(), this.updateRenderer(), this.updateSize(), this.updateStyle(), this.drawFrame();
  }
};
X.prototype.getOutput = function() {
  return this.canvas;
};
X.prototype.getOutputRect = function() {
  return this.canvas ? this.canvas.getBoundingClientRect() : null;
};
X.prototype.getOutputCoordinates = function(a, b) {
  if (this.canvas) {
    var d = this.getOutputRect(), f = d.height, g = d.top, l = d.left;
    d = d.width / this.getBaseWidth();
    f /= this.getBaseHeight();
    return [~~((a - l) / d), ~~((b - g) / f)];
  }
  return null;
};
X.prototype.updateSize = function() {
  this.canvas.width = this.getTargetScale() * this.getBaseWidth();
  this.canvas.height = this.getTargetScale() * this.getBaseHeight();
  k.info('Canvas resized to ' + this.canvas.width + 'x' + this.canvas.height + ' px');
};
X.prototype.updateStyle = function() {
  if (this.isFullscreen()) {
    var a = this.canvas, b = this.fullscreenType;
    k.info('Applying "' + b + '" style to canvas');
    var d = Object.assign(a.style, Hb);
    'maximized' === b ? a.width / a.height > window.innerWidth / window.innerHeight ? d.width = '100%' : d.height = '100%' : 'stretched' === b && (d.width = '100%', d.height = '100%');
  } else {
    for (a in b = this.canvas, k.info('Removing style from canvas'), b = b.style, Hb) {
      b.removeProperty(a);
    }
  }
};
X.prototype.getBaseWidth = function() {
  return 256 * (this.debug ? 2 : 1);
};
X.prototype.getBaseHeight = function() {
  return 240;
};
X.prototype.setRenderer = function(a) {
  if (!(a in Qb)) {
    throw Error('Invalid video renderer: ' + h(a));
  }
  if (this.rendererName !== a) {
    if (this.canvas) {
      throw Error('Cannot change video renderer once output is set');
    }
    k.info('Using "' + a + '" video renderer');
    this.rendererName = a;
  }
};
X.prototype.getRenderer = function() {
  return this.rendererName;
};
X.prototype.createRenderer = function() {
  a: {
    var a = this.rendererName, b = this.canvas;
    do {
      var d = Qb[a];
      if (null == d) {
        throw Error('Invalid renderer: ' + h(a));
      }
      try {
        k.info('Creating "' + a + '" renderer');
        var f = new d(b);
        break a;
      } catch (g) {
        k.error('Failed to create "' + a + '" renderer', g);
      }
      a = Sb[a];
    } while (a);
    throw Error('Unable to create renderer');
  }
  this.renderer = f;
  this.frame = this.renderer.createFrame(0, 0, 256, 240);
  this.debugFrame = this.renderer.createFrame(256, 0, 256, 240);
};
X.prototype.updateRenderer = function() {
  this.renderer.setFilter(this.filter);
  this.renderer.setScale(this.getTargetScale());
};
X.prototype.renderFrame = function() {
  this.nes.renderFrame(this.frame.data);
  this.debug && this.nes.renderDebugFrame(this.debugFrame.data);
};
X.prototype.drawFrame = function() {
  this.renderer.begin();
  this.renderer.drawFrame(this.frame);
  this.debug && this.renderer.drawFrame(this.debugFrame);
  this.renderer.end();
};
X.prototype.clearFrame = function() {
  if (null == this.canvas) {
    throw Error('No video output');
  }
  this.nes.renderEmptyFrame(this.frame.data);
  this.debug && this.nes.renderEmptyFrame(this.debugFrame.data);
  this.drawFrame();
};
X.prototype.setPalette = function(a) {
  if (!(a in Ia)) {
    throw Error('Invalid video palette: ' + h(a));
  }
  this.paletteName !== a && (k.info('Setting video palette to "' + a + '"'), this.paletteName = a, this.applyPalette(), this.canvas && (this.renderFrame(), this.drawFrame()));
};
X.prototype.applyPalette = function() {
  this.nes.setPalette(Ja(this.paletteName));
};
X.prototype.getPalette = function() {
  return this.paletteName;
};
X.prototype.setScale = function(a) {
  if ('number' !== typeof a || 0 >= a) {
    throw Error('Invalid video scale: ' + h(a));
  }
  this.scale !== a && (k.info('Setting video scale to ' + a), this.scale = a, this.canvas && (this.updateRenderer(), this.updateSize(), this.updateStyle(), this.drawFrame()));
};
X.prototype.getScale = function() {
  return this.scale;
};
X.prototype.getTargetScale = function() {
  return this.isFullscreen() ? this.getFullscreenScale() : this.scale;
};
X.prototype.getFullscreenScale = function() {
  var a = window.innerWidth / this.getBaseWidth(), b = window.innerHeight / this.getBaseHeight();
  a = Math.min(a, b);
  return 1 < a ? ~~a : a;
};
X.prototype.setFilter = function(a) {
  if (!(0 <= ['nearest', 'linear'].indexOf(a))) {
    throw Error('Invalid video filter: ' + h(a));
  }
  this.filter !== a && (k.info('Setting video filter to "' + a + '"'), this.filter = a, this.canvas && (this.updateRenderer(), this.drawFrame()));
};
X.prototype.getFilter = function() {
  return this.filter;
};
X.prototype.setDebug = function(a) {
  if ('boolean' !== typeof a) {
    throw Error('Invalid video debug: ' + h(a));
  }
  this.debug !== a && (k.info('Setting video debug to ' + (a ? 'on' : 'off')), this.debug = a, this.canvas && (this.updateRenderer(), this.updateSize(), this.updateStyle(), this.renderFrame(), this.drawFrame()));
};
X.prototype.isDebug = function() {
  return this.debug;
};
X.prototype.enterFullscreen = function() {
  if (null == this.canvas) {
    throw Error('No video output');
  }
  return this.fullscreen.enter(this.canvas.parentElement);
};
X.prototype.exitFullscreen = function() {
  return this.fullscreen.exit();
};
X.prototype.isFullscreen = function() {
  return this.fullscreen.is();
};
X.prototype.setFullscreenType = function(a) {
  if (!(0 <= Gb.indexOf(a))) {
    throw Error('Invalid fullscreen type: ' + h(a));
  }
  this.fullscreenType !== a && (k.info('Setting fullscreen type to "' + a + '"'), this.fullscreenType = a, this.isFullscreen() && this.updateStyle());
};
X.prototype.getFullscreenType = function() {
  return this.fullscreenType;
};
// Input 96
// Input 97
function $b(a) {
  k.info('Downloading data from "' + a + '"');
  return new Promise(function(b, d) {
    var f = new XMLHttpRequest;
    f.open('GET', a, !0);
    f.responseType = 'arraybuffer';
    f.onload = function() {
      200 === f.status ? b(f.response) : 0 === f.status ? d(Error('Failed to connect to the server')) : d(Error('Failed to download data (' + f.status + ' ' + f.statusText + ')'));
    };
    f.onerror = function() {
      d(Error('Failed to connect to the server'));
    };
    f.send();
  });
}
function ac(a) {
  k.info('Reading contents of ' + e(a.size) + ' blob');
  return new Promise(function(b, d) {
    if (10485760 < a.size) {
      d(Error('Input is too large (' + e(a.size) + ')'));
    } else {
      var f = new FileReader;
      f.onload = function(a) {
        b(a.target.result);
      };
      f.onerror = function(a) {
        d(Error(a.target.error || 'Unknown error'));
      };
      f.readAsArrayBuffer(a);
    }
  });
}
;
// Input 98
function bc(a, b, d) {
  k.info('Initializing ROM loader');
  this.nes = a;
  this.system = b;
  this.JSZip = d;
}
bc.prototype.load = function(a) {
  var b = this;
  if ('string' === typeof a) {
    return $b(a).then(function(a) {
      return b.loadData(a);
    });
  }
  if (a instanceof Blob) {
    return ac(a).then(function(a) {
      return b.loadData(a);
    });
  }
  if (a instanceof Array || a instanceof ArrayBuffer || a instanceof Uint8Array) {
    return this.loadData(a);
  }
  throw Error('Invalid source: ' + h(a));
};
bc.prototype.loadData = function(a) {
  var b = this;
  a instanceof Uint8Array || (a = new Uint8Array(a));
  return this.unzipData(a).then(function(a) {
    a: {
      k.info('Creating cartridge from ROM image');
      if (!(a instanceof Uint8Array)) {
        throw Error('Invalid ROM image: ' + h(a));
      }
      k.info('Parsing ' + e(a.length) + ' of data');
      for (var d = c.makeIterator(Ya), g = d.next(); !g.done; g = d.next()) {
        if (g = g.value, g.supports(a)) {
          k.info('Using "' + g.name + '" parser');
          a = g.parse(a);
          k.info('Computing SHA-1');
          d = new Uint8Array(a.prgROMSize + a.chrROMSize);
          d.set(a.prgROM);
          a.chrROM && d.set(a.chrROM, a.prgROMSize);
          var l;
          g = d.length;
          var n = Array(17), y = 0, F = 0, r = 0, Y = 0, la = !1, S = 1732584193, T = 4023233417, U = 2562383102, V = 271733878, ea = 3285377520;
          do {
            n[0] = y;
            n.fill(0, 1, 17);
            for (l = r; F < g && 64 > l; F++) {
              n[l >> 2] |= d[F] << $a[l++ & 3];
            }
            Y += l - r;
            r = l - 64;
            F === g && (n[l >> 2] |= Za[l & 3], F++);
            y = n[16];
            F > g && 56 > l && (n[15] = Y << 3, la = !0);
            for (l = 16; 80 > l; l++) {
              var B = n[l - 3] ^ n[l - 8] ^ n[l - 14] ^ n[l - 16];
              n[l] = B << 1 | B >>> 31;
            }
            var t = S, u = T, v = U, w = V, x = ea;
            for (l = 0; 20 > l; l += 5) {
              var G = u & v | ~u & w;
              B = t << 5 | t >>> 27;
              x = B + G + x + 1518500249 + n[l] << 0;
              u = u << 30 | u >>> 2;
              G = t & u | ~t & v;
              B = x << 5 | x >>> 27;
              w = B + G + w + 1518500249 + n[l + 1] << 0;
              t = t << 30 | t >>> 2;
              G = x & t | ~x & u;
              B = w << 5 | w >>> 27;
              v = B + G + v + 1518500249 + n[l + 2] << 0;
              x = x << 30 | x >>> 2;
              G = w & x | ~w & t;
              B = v << 5 | v >>> 27;
              u = B + G + u + 1518500249 + n[l + 3] << 0;
              w = w << 30 | w >>> 2;
              G = v & w | ~v & x;
              B = u << 5 | u >>> 27;
              t = B + G + t + 1518500249 + n[l + 4] << 0;
              v = v << 30 | v >>> 2;
            }
            for (; 40 > l; l += 5) {
              G = u ^ v ^ w, B = t << 5 | t >>> 27, x = B + G + x + 1859775393 + n[l] << 0, u = u << 30 | u >>> 2, G = t ^ u ^ v, B = x << 5 | x >>> 27, w = B + G + w + 1859775393 + n[l + 1] << 0, t = t << 30 | t >>> 2, G = x ^ t ^ u, B = w << 5 | w >>> 27, v = B + G + v + 1859775393 + n[l + 2] << 0, x = x << 30 | x >>> 2, G = w ^ x ^ t, B = v << 5 | v >>> 27, u = B + G + u + 1859775393 + n[l + 3] << 0, w = w << 30 | w >>> 2, G = v ^ w ^ x, B = u << 5 | u >>> 27, t = B + G + t + 1859775393 + n[l + 
              4] << 0, v = v << 30 | v >>> 2;
            }
            for (; 60 > l; l += 5) {
              G = u & v | u & w | v & w, B = t << 5 | t >>> 27, x = B + G + x - 1894007588 + n[l] << 0, u = u << 30 | u >>> 2, G = t & u | t & v | u & v, B = x << 5 | x >>> 27, w = B + G + w - 1894007588 + n[l + 1] << 0, t = t << 30 | t >>> 2, G = x & t | x & u | t & u, B = w << 5 | w >>> 27, v = B + G + v - 1894007588 + n[l + 2] << 0, x = x << 30 | x >>> 2, G = w & x | w & t | x & t, B = v << 5 | v >>> 27, u = B + G + u - 1894007588 + n[l + 3] << 0, w = w << 30 | w >>> 2, G = v & w | v & x | w & 
              x, B = u << 5 | u >>> 27, t = B + G + t - 1894007588 + n[l + 4] << 0, v = v << 30 | v >>> 2;
            }
            for (; 80 > l; l += 5) {
              G = u ^ v ^ w, B = t << 5 | t >>> 27, x = B + G + x - 899497514 + n[l] << 0, u = u << 30 | u >>> 2, G = t ^ u ^ v, B = x << 5 | x >>> 27, w = B + G + w - 899497514 + n[l + 1] << 0, t = t << 30 | t >>> 2, G = x ^ t ^ u, B = w << 5 | w >>> 27, v = B + G + v - 899497514 + n[l + 2] << 0, x = x << 30 | x >>> 2, G = w ^ x ^ t, B = v << 5 | v >>> 27, u = B + G + u - 899497514 + n[l + 3] << 0, w = w << 30 | w >>> 2, G = v ^ w ^ x, B = u << 5 | u >>> 27, t = B + G + t - 899497514 + n[l + 4] << 
              0, v = v << 30 | v >>> 2;
            }
            S = S + t << 0;
            T = T + u << 0;
            U = U + v << 0;
            V = V + w << 0;
            ea = ea + x << 0;
          } while (!la);
          a.sha1 = Q[S >> 28 & 15] + Q[S >> 24 & 15] + Q[S >> 20 & 15] + Q[S >> 16 & 15] + Q[S >> 12 & 15] + Q[S >> 8 & 15] + Q[S >> 4 & 15] + Q[S & 15] + Q[T >> 28 & 15] + Q[T >> 24 & 15] + Q[T >> 20 & 15] + Q[T >> 16 & 15] + Q[T >> 12 & 15] + Q[T >> 8 & 15] + Q[T >> 4 & 15] + Q[T & 15] + Q[U >> 28 & 15] + Q[U >> 24 & 15] + Q[U >> 20 & 15] + Q[U >> 16 & 15] + Q[U >> 12 & 15] + Q[U >> 8 & 15] + Q[U >> 4 & 15] + Q[U & 15] + Q[V >> 28 & 15] + Q[V >> 24 & 15] + Q[V >> 20 & 15] + Q[V >> 16 & 15] + Q[V >> 
          12 & 15] + Q[V >> 8 & 15] + Q[V >> 4 & 15] + Q[V & 15] + Q[ea >> 28 & 15] + Q[ea >> 24 & 15] + Q[ea >> 20 & 15] + Q[ea >> 16 & 15] + Q[ea >> 12 & 15] + Q[ea >> 8 & 15] + Q[ea >> 4 & 15] + Q[ea & 15];
          k.info('==========[Cartridge Info - Start]==========');
          k.info('SHA-1                 : ' + a.sha1);
          k.info('Mapper                : ' + a.mapper);
          k.info('Submapper             : ' + a.submapper);
          k.info('Region                : ' + a.region);
          k.info('Mirroring             : ' + a.mirroring);
          k.info('PRG ROM size          : ' + e(a.prgROMSize));
          k.info('PRG RAM size          : ' + e(a.prgRAMSize));
          k.info('PRG RAM size (battery): ' + e(a.prgRAMSizeBattery));
          k.info('CHR ROM size          : ' + e(a.chrROMSize));
          k.info('CHR RAM size          : ' + e(a.chrRAMSize));
          k.info('CHR RAM size (battery): ' + e(a.chrRAMSizeBattery));
          k.info('==========[Cartridge Info - End]==========');
          break a;
        }
      }
      throw Error('Unknown ROM image format');
    }
    b.nes.setCartridge(a);
    b.system.isRunning() && b.system.restart();
  });
};
bc.prototype.unzipData = function(a) {
  if (80 === a[0] && 75 === a[1] && 3 === a[2] && 4 === a[3]) {
    k.info('Extracting ROM image from ' + e(a.length) + ' ZIP archive');
    var b = this.JSZip;
    if (null == b || null == b.loadAsync) {
      throw Error('Unable to extract ROM image: JSZip 3 is not available');
    }
    return b.loadAsync(a).then(function(a) {
      a = a.file(/^.*\.nes$/i);
      if (0 === a.length) {
        throw Error('ZIP archive does not contain ".nes" ROM image');
      }
      return a[0].async('uint8array');
    });
  }
  return Promise.resolve(a);
};
bc.prototype.unload = function() {
  this.isLoaded() && (k.info('Unloading ROM image'), this.nes.setCartridge(null));
};
bc.prototype.isLoaded = function() {
  return null != this.nes.getCartridge();
};
bc.prototype.getSHA1 = function() {
  var a = this.nes.getCartridge();
  return a ? a.sha1 : null;
};
// Input 99
// Input 100
function cc(a) {
  var b = {}, d;
  for (d in a) {
    var f = Object.getOwnPropertyDescriptor(a, d);
    if (f.enumerable) {
      var g = a[d];
      f.writable || f.set ? b[d] = g : 'object' === typeof g && (b[d] = cc(g));
    }
  }
  return b;
}
;
// Input 101
function dc(a, b) {
  for (var d in b) {
    if (d in a) {
      var f = b[d];
      if (void 0 !== f) {
        var g = Object.getOwnPropertyDescriptor(a, d);
        g.enumerable && (g.writable || g.set ? a[d] = f : 'object' === typeof f && dc(a[d], f));
      }
    }
  }
}
;
// Input 102
function ec(a, b) {
  for (var d = [], f = 1; f < arguments.length; ++f) {
    d[f - 1] = arguments[f];
  }
  return {get:fc.apply(null, [a].concat(c.arrayFromIterable(d)))};
}
function gc(a, b, d) {
  for (var f = [], g = 2; g < arguments.length; ++g) {
    f[g - 2] = arguments[g];
  }
  return {get:fc.apply(null, [a].concat(c.arrayFromIterable(f))), set:fc.apply(null, [b].concat(c.arrayFromIterable(f))), enumerable:!0};
}
function hc(a, b, d) {
  for (var f = [], g = 2; g < arguments.length; ++g) {
    f[g - 2] = arguments[g];
  }
  return {get:fc.apply(null, [a].concat(c.arrayFromIterable(f))), set:fc.apply(null, [b].concat(c.arrayFromIterable(f)))};
}
function Z(a, b) {
  for (var d = [], f = 1; f < arguments.length; ++f) {
    d[f - 1] = arguments[f];
  }
  return {value:fc.apply(null, [a].concat(c.arrayFromIterable(d)))};
}
function ic(a) {
  return {value:Object.defineProperties({}, a), enumerable:!0};
}
function jc(a, b, d, f) {
  for (var g = [], l = 3; l < arguments.length; ++l) {
    g[l - 3] = arguments[l];
  }
  l = c.makeIterator(g);
  g = l.next().value;
  l = c.arrayFromIterator(l);
  for (var n = {}, y = c.makeIterator(a), F = y.next(); !F.done; F = y.next()) {
    F = F.value, n[F] = gc.apply(null, [b, d, g, F].concat(c.arrayFromIterable(l)));
  }
  return ic(n);
}
function fc(a, b) {
  for (var d = [], f = 1; f < arguments.length; ++f) {
    d[f - 1] = arguments[f];
  }
  return d.length ? a.bind.apply(a, c.arrayFromIterable(d)) : a;
}
;
// Input 103
// Input 104
var kc = Object.defineProperties;
function lc(a) {
  function b(a) {
    dc(Y, a);
    'inputs' in a && y.setAll(a.inputs);
  }
  a = void 0 === a ? {} : a;
  if (!a || 'object' !== typeof a) {
    throw Error('Invalid initialization options: ' + h(a));
  }
  var d = a.JSZip || window.JSZip, f = new P, g = new X(f), l = null != bb ? new fb(f) : null, n = new zb(f), y = new Ab, F = new Bb(y, n, g);
  F = new rb(F);
  var r = new W(f, g, l, F);
  d = new bc(f, r, d);
  var Y = kc({}, {running:ec(r.isRunning, r), fps:ec(r.getFPS, r), region:gc(r.getRegion, r.setRegion, r), speed:gc(r.getSpeed, r.setSpeed, r), start:Z(r.start, r), stop:Z(r.stop, r), step:Z(r.step, r), power:Z(r.power, r), reset:Z(r.reset, r), nvram:ec(f.getNVRAM, f), use:Z(b), rom:ic({loaded:ec(d.isLoaded, d), sha1:ec(d.getSHA1, d), load:Z(d.load, d), unload:Z(d.unload, d)}), video:ic({output:hc(g.getOutput, g.setOutput, g), renderer:gc(g.getRenderer, g.setRenderer, g), palette:gc(g.getPalette, 
  g.setPalette, g), scale:gc(g.getScale, g.setScale, g), filter:gc(g.getFilter, g.setFilter, g), debug:gc(g.isDebug, g.setDebug, g), clear:Z(g.clearFrame, g)}), fullscreen:ic({type:gc(g.getFullscreenType, g.setFullscreenType, g), is:ec(g.isFullscreen, g), enter:Z(g.enterFullscreen, g), exit:Z(g.exitFullscreen, g)}), audio:l ? ic({enabled:gc(l.isEnabled, l.setEnabled, l), volume:jc(Object.keys(db), l.getVolume, l.setVolume, l)}) : {value:null}, devices:jc(gb, n.get, n.set, n), inputs:ic({state:ic({get:Z(n.getInput, 
  n), set:Z(n.setInput, n)}), map:ic({get:Z(y.get, y), set:Z(y.set, y), 'delete':Z(y.delete, y)}), record:Z(F.recordInput, F)}), config:ic({get:Z(function() {
    var a = cc(Y);
    a.inputs = y.getAll();
    return a;
  }), use:Z(b)}), toString:Z(function() {
    return 'cfxnes 0.7.0';
  })});
  b(a);
  (f = a.video) && 'output' in f ? g.setOutput(f.output) : (f = document.getElementById('cfxnes'), f instanceof HTMLCanvasElement && g.setOutput(f));
  'inputs' in a || y.setAll({'1.joypad.a':'keyboard.x', '1.joypad.b':['keyboard.y', 'keyboard.z'], '1.joypad.start':'keyboard.enter', '1.joypad.select':'keyboard.shift', '1.joypad.up':'keyboard.up', '1.joypad.down':'keyboard.down', '1.joypad.left':'keyboard.left', '1.joypad.right':'keyboard.right', '2.zapper.trigger':'mouse.left'});
  'rom' in a && d.load(a.rom).then(function() {
    return r.start();
  }).catch(function(a) {
    k.error('Failed to load ROM', a);
  });
  return Y;
}
k.setLevel('warn');
try {
  kc(lc, {name:{value:'cfxnes'}});
} catch (a) {
  k.warn('Unable to redefine cfxnes.name property: running in pre-ES2015 environment');
}
kc(lc, {version:{value:'0.7.0'}, logLevel:gc(k.getLevel, k.setLevel, k), close:{value:function() {
  if (null == ab) {
    return Promise.resolve();
  }
  var a = ab.close();
  ab = void 0;
  return a;
}}});
'undefined' !== typeof root && (root.cfxnes = lc);

  // Compiler output [end]
  return root;
}.bind(this)));

//# sourceMappingURL=cfxnes.debug.js.map
