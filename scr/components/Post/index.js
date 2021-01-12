import React from 'react';
import { View,Image,Text } from 'react-native';

import styles  from './styles';



const Post = (props) =>{
    return(
        <View style={styles.container}>
        
        <Image
            style={styles.image} 
            source={{uri:'https://storage.googleapis.com/gweb-uniblog-publish-prod/images/photos_drive_vector-01.max-1000x1000.png'}}
        >
        </Image>
        </View> 
    );
};

export default Post;