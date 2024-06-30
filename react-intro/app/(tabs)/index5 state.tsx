import { Text, View , Image} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


import { AgeCounter } from '@/components/AgeCounter';
import { useState } from 'react';
export default function HomeScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView >
         <AgeCounter />
          </SafeAreaView>
          </SafeAreaProvider>
  );
}


