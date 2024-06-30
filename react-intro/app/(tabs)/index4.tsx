import { Text, View , Image} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import {Lesstyles, }   from "./styles";
import { s}   from "./style";

import {Human} from "@/components/Human";
import React from 'react';
export default function HomeScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView >
       <Human  name ={"jean"}
       age={310} 
       getInfo = {function(){
        console.log("test")
        }}

       doSomething = {function(){
        console.log("Hello");
       }}
       >
        <Text style={{fontSize:50}} > cocou AYOUB</Text>
      
        <Image source={{uri: "https://cdn.pixabay.com/photo/2023/08/08/10/50/hot-wheels-8177051_1280.jpg"}} 
        style={{width: 240, height: 240}}/>

         </Human>
          </SafeAreaView>
          </SafeAreaProvider>
  );
}


