import React from 'react';
import { View,FlatList} from 'react-native';
import Post from '../../components/Post';
import feed from '../../../assests/data/feed';



const SearchScreen = (props) =>{
   
    return(
        <View>
         <FlatList
          data={feed}
          renderItem={({item}) => <Post post={item}></Post>}
         />
        </View> 
    );
};

export default SearchScreen;