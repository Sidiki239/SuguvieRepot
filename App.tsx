/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,

  View,
} from 'react-native';

import Home from './android/app/src/Home';



function App(): React.JSX.Element {

 

  return (
    <SafeAreaView >
      <StatusBar
     />
<Home/>
    </SafeAreaView>
  );
}


export default App;
