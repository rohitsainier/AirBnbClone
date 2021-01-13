import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import HomeScreen from './scr/screens/Home';
import Post from './scr/components/Post';
import feed from './assests/data/feed';

const post1 = feed[0];
 

const App = () => {
  return(
    <>
    <StatusBar barStyle="dark-content"/>
    <SafeAreaView>
      <Post post={post1}/>
    </SafeAreaView>
    </>
  );
}



export default App;