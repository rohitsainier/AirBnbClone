import React from 'react';
import { View, Text} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SearchScreen from '../screens/SearchResults';

const Tab = createMaterialTopTabNavigator();


const SearchResultsTabNavigator = (props) =>{
    return(
        <Tab.Navigator tabBarOptions={{
            activeTintColor:'#f15454',
            indicatorStyle:{
                backgroundColor:'#f15454',
            }
        }} >
            <Tab.Screen name={"List"} component={SearchScreen}/>
            <Tab.Screen name={"Map"} component={SearchScreen}/>
        </Tab.Navigator>
    );
};
export default SearchResultsTabNavigator;