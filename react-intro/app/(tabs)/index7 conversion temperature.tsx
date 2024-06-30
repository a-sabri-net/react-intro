import { Text, View , Image, Touchable, Alert, TextInput} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'
import {  s } from './style';
import { useState } from 'react';
import { TouchableOpacity , Platform, ImageBackground} from 'react-native';

import image2 from "..\\assets\\hot.png";
import TemperatureImput from '../../components/Temperature/Temperature.imput';
import TemperatureDisplay from '../../components/Temperature/TemperatureDisplay';

import {DEFAULT_TEMPERATURE,  DEFAULT_UNIT} from  "..\\constants\\Constants"
import {getOppsiteUnit, convertTemperatureTo} from "..\\services\\temperature-service";
export default function HomeScreen() {
 // var & function   => from "..\\Constants";
 const [imputValue, setimputValue] = useState(DEFAULT_TEMPERATURE);
 const [imputUnit, setimputUnit] = useState(DEFAULT_UNIT);

 const oppositeUnit = getOppsiteUnit(imputValue);
 function getConvertedTemperature() {
  const valueAsFloat = Number.parseFloat(imputValue);
  return isNaN(valueAsFloat)
    ? ""
    : convertTemperatureTo(oppositeUnit, valueAsFloat).toFixed(1);
}
 function hello(name:any){ // si pas de type :  Parameter 'name' implicitly has an 'any' type
  Alert.alert("Coucou  " + name + DEFAULT_UNIT);
  console.log(DEFAULT_UNIT);
 }
  return (
    // ERROR :   'React' refers to a UMD global, but the current file is a module. Consider adding an import instead
    // il faiut ajouter dans tsconfig.json
    // "jsx": "react",
    //"allowUmdGlobalAccess": true,
    
    <ImageBackground source={image2}  style={s.container}>     
      <View   style={s.workspace} >
      {/* <TemperatureDisplay value={convertTemperatureTo(imputUnit,imputValue)} unit={getOppsiteUnit(imputUnit)}/> */}
      {/* pour formater le resultant numerique et prendre en copte que les number en entrre */}
      <TemperatureDisplay value={getConvertedTemperature()} unit={getOppsiteUnit(imputUnit)}/>
      <TemperatureImput defaultValue={DEFAULT_TEMPERATURE} onChangeText2={setimputValue}/>

      <View>
        <Text>Button</Text>
      </View>   

      </View>
    </ImageBackground>
  
  );
}



