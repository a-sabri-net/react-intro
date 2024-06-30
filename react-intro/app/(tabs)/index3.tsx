import { Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import {Lesstyles, }   from "./styles";
import { s}   from "./style";
import { FlexDemo } from '@/components/flex/flexDemo';
import React from 'react';
export default function HomeScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView >
      <FlexDemo/>    
          </SafeAreaView>
          </SafeAreaProvider>
  );
}


