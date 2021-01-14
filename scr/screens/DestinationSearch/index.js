import React, {useState} from 'react';
import { View,TextInput,FlatList,Text} from 'react-native';
import styles from './styles';
import SearchResults from '../../../assests/data/search';
import Entypo from 'react-native-vector-icons/Entypo';


const DestinationSearchScreen = (props) =>{
    const [text,setText] = useState('');
    return(
        <View style = {styles.container}>
         <TextInput 
         style={styles.textInput}
         placeholder="Where are you going?"
         value = {text}
         onChangeText = {setText}
         >
         </TextInput>

         <FlatList 
         data= {SearchResults}
         renderItem = {({item}) => (
             <View style = {styles.row}>
             <View style={styles.iconContainer}>
                <Entypo name={"location-pin"} size={35}/>
             </View>
             <Text style={styles.locationText}>{item.description}</Text>
             </View>
           
         )}
         >

         </FlatList>
        </View> 
    );
};

export default DestinationSearchScreen;