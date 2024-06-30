import { Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import {Lesstyles, }   from "./styles";
import { s}   from "./style";
export default function HomeScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View   style ={Lesstyles.reactLogo}>
 
         <Text >
         Welcome ayoub!
          </Text>
          </View>
          <View   style ={s.reactLogo}>
      <Text    >
     Welcome!
      </Text>
       <Text >
       Welcome!
        </Text>
         <Text >
         Welcome ayoub!
          </Text>
          </View>
          </SafeAreaView>
          </SafeAreaProvider>

      
     
  );
}


