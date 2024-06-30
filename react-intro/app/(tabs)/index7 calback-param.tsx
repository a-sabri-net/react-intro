import { Text, View , Image, Touchable, Alert} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


import { AgeCounter } from '@/components/AgeCounter';
import { useState } from 'react';
import Child from '@/components/Child/Child';
import { TouchableOpacity , Platform} from 'react-native';
import React from 'react';
export default function HomeScreen() {
 // var & function
 function hello(name:any){ // si pas de type :  Parameter 'name' implicitly has an 'any' type
  Alert.alert("Coucou  " + name);
  console.log("Coucou  " );
 }
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex:1}}>                
         <Child onPress={hello}/>
         {/* // trouver le type de mobile  */}

         {Platform.OS==="ios" ?
         <Text>je suis sur ios</Text>:
         <Text>samsung</Text>
          }

      </SafeAreaView>
      </SafeAreaProvider>
  );
}


