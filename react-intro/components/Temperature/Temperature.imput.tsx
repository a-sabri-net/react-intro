import React from "react";
import { TextInput, Text, View } from "react-native";
import s from "./Temperature.style";
 

export default function TemperatureImput({defaultValue, onChangeText2}) {// il faut regrouper les props :
                                     //{defaultValue],{onChangeText2}: erroro: Property ... does not exist on type 'IntrinsicAttributes & ...'
    return(
        <View style={s.container}>
        <TextInput  placeholder = "Enter une temperature" style={s.imput}
        // onChangeText={(text)=>{console.log(text);}}
        onChangeText={onChangeText2}
        maxLength={1345}
        keyboardType="numeric"       
        defaultValue={defaultValue}
        ></TextInput>
        <Text style={s.Unit}>°C</Text>
        </View>
    )
}