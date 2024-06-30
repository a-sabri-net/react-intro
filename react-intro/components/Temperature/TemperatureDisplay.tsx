import React from "react";
import { Text } from "react-native"
import s from "./Temperature.style";
export default function TemperatureDisplay({value, unit}){
    return (
        <Text style={s.Text}>{value} {unit}</Text>
    );
      
    
};