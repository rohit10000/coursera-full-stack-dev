import React from 'react';
import Main from "./components/Main";
import {View, Platform} from "react-native";

import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();

export default function App() {
  return (
      <Provider store={store}>
          <View style={{flex:1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight }}>
              <Main/>
          </View>
      </Provider>
  );
}
