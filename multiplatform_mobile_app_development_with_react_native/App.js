import React from 'react';
import Main from "./components/Main";
import {View, Platform} from "react-native";

export default function App() {
  return (
      <View style={{flex:1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight }}>
        <Main/>
      </View>
  );
}
