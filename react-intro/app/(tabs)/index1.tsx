import { Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import {Lesstyles, }   from "./styles";
import { s}   from "./style";
export default function HomeScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView   style={{backgroundColor:"black", flex:1}}  >
   
      <View   style={{backgroundColor:"red", width:200, height:200, flex:1}}> 
         <Text >
         Welcome ayoub!
          </Text>
          </View>
          <View   style={{backgroundColor:"red", width:200, height:200, flex:1}}> 
         <Text >
         Welcome ayoub!
          </Text>
          </View>
          <View   style={{backgroundColor:"red", width:200, height:200, flex:1}}> 
         <Text >
         Welcome ayoub!
          </Text>
          </View>
   
          </SafeAreaView>
          </SafeAreaProvider>

      
     
  );
}


