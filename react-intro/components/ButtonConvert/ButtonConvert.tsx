import React from "react";
import { Touchable, TouchableOpacity , Text} from "react-native";
import {s} from '.\\ButtonConvert.style';

export function ButtonConvert(onPress, unit){

    return(
        <TouchableOpacity onPress={onPress} style ={s.button}>
            <Text style= {s.text}> Convertir</Text>
        </TouchableOpacity>
    )

};