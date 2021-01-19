import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';

import HomeScreen from './scr/screens/Home';
import Post from './scr/components/Post';
import feed from './assests/data/feed';
import SearchScreen from './scr/screens/SearchResults';
import DestinationSearchScreen from './scr/screens/DestinationSearch';
import GuestsScreen from './scr/screens/Guests';
import Router from './scr/navigation/Router';


const App = () => {
  return(
    <>
    <StatusBar barStyle="dark-content"/>
        <Router/>
    </>
  );
}



export default App;