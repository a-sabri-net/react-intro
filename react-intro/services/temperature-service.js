// import TemperatureImput from '../../components/Temperature/Temperature.imput';
// import TemperatureDisplay from '../../components/Temperature/TemperatureDisplay';

import { UNITS} from "../constants/Constants"

export function getOppsiteUnit(unit){
    return unit == UNITS.celusius ? UNITS.farnheit  : UNITS.celusius ;
}

export function convertTemperatureTo(unit, value) {
    if (unit === UNITS.celcius) {
      return (value - 32) / 1.8;
    } else {
      return value * 1.8 + 32;
    }
  }