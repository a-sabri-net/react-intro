import { useState } from "react";
import { Touchable, Text } from "react-native";
import { TouchableOpacity } from "react-native";
import { AgeDisplay } from "./AgeDisplay";
import React from "react";
// attention à ce genre d'import : ca casse tout 
// import { TouchableOpacity } from "react-native-gesture-handler";

export function AgeCounter(props){
    const [age, setAge]= useState(40);   // use State est ce qu'on appelle un hooks de React.
    const [color, setColor]= useState("red"); // il y une chapitre sur les Hooks avancées
    const [data, setData]= useState({ color2: "red", speed:200});
    const [salaire, setSalaire]=useState(3000);
    function IncraseAge()
    {
        setAge(age +1);
        setColor("blue")
        setData({color2:"blue", speed : data.speed+1})
        console.log(age);
        console.log(data.color2);
        console.log(data.speed);
        setSalaire(salaire + 1)
    }
    return ( 
    <>

             
    <TouchableOpacity onPress={IncraseAge} >
        <Text  style={{fontSize:40 }} >Augmenter</Text>
    </TouchableOpacity>

    {/*  version 1 : la function est décalré dans l'event */}
   	 {/* <TouchableOpacity onPress={function(){
         setAge(age +1);
        //age++;
        //console.log(age);
        }}>
        <Text  style={{fontSize:40 }} >Augmenter</Text>
    </TouchableOpacity> */}

    {/*  version 2 : la function est décalré dans l'event avec le syntax fleché*/}
    {/* <TouchableOpacity onPress={()=>{setAge(age +1);}}>
        <Text  style={{fontSize:40 }} >Augmenter</Text>
    </TouchableOpacity> */}

    <Text  style={{fontSize:40 }}>  mon age est  {age}
    </Text>
    <AgeDisplay salaire={salaire}/>
  
    </>
    )
}