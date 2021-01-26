import React, {useState} from 'react';
import { View,TextInput,FlatList,Text,Pressable} from 'react-native';
import styles from './styles';
import SearchResults from '../../../assests/data/search';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';



const DestinationSearchScreen = (props) =>{
    const [text,setText] = useState('');
    const navigation = useNavigation();
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
             <Pressable onPress={ () => navigation.navigate('Guests') } style = {styles.row}>
             <View style={styles.iconContainer}>
                <Entypo name={"location-pin"} size={35}/>
             </View>
             <Text style={styles.locationText}>{item.description}</Text>
             </Pressable>
           
         )}
         >

         </FlatList>
        </View> 
    );
};

export default DestinationSearchScreen;