import { Text, View , Image, Touchable, Alert} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


import { AgeCounter } from '@/components/AgeCounter';
import { useState } from 'react';
import Child from '@/components/Child/Child';
import { TouchableOpacity } from 'react-native';
import React from 'react';
export default function HomeScreen() {
 // var & function
 const [value, setValue]= useState("toto");
 function hello(){
  Alert.alert("Coucou  " + value);
 }
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex:1}}>
                
         <Child onPress={hello}/>
          </SafeAreaView>
      </SafeAreaProvider>
  );
}


