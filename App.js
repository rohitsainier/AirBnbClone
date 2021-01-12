import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import HomeScreen from './scr/screens/Home';
import Post from './scr/components/Post';
 

const App = () => {
  return(
    <>
    <StatusBar barStyle="dark-content"/>
    <SafeAreaView>
      <Post/>
    </SafeAreaView>
    </>
  );
}



export default App;