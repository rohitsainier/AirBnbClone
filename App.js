import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import HomeScreen from './scr/screens/Home';
import Post from './scr/components/Post';
import feed from './assests/data/feed';
import SearchScreen from './scr/screens/SearchResults';
import DestinationSearchScreen from './scr/screens/DestinationSearch';
import GuestsScreen from './scr/screens/Guests';

const post1 = feed[0];
 

const App = () => {
  return(
    <>
    <StatusBar barStyle="dark-content"/>
    <SafeAreaView>
      <GuestsScreen/>
    </SafeAreaView>
    </>
  );
}



export default App;