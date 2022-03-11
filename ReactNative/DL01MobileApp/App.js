import React from 'react';
import Navigation from './Navigation';
import FlashMessage from "react-native-flash-message";
import { View } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Navigation />

      <FlashMessage position="bottom" />

    </View>


  );
}



