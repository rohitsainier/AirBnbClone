import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import HomeScreen from './scr/screens/Home';
import Post from './scr/components/Post';
import feed from './assests/data/feed';
import DestinationSearchScreen from './scr/screens/DestinationSearch';

 

const App = () => {
  return(
    <>
    <StatusBar barStyle="dark-content"/>
    <SafeAreaView>
      <DestinationSearchScreen/>
    </SafeAreaView>
    </>
  );
}



export default App;