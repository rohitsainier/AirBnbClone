import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/Home'
import HomeTabNavigator from './HomeTabNavigator'

const Stack = createStackNavigator();
const Router = (props) =>{
    return(
       <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name={"Home"}
                    component={HomeTabNavigator}
                    options={{
                        headerShown:false
                    }}
                />

                <Stack.Screen
                    name={"Home Screen"}
                    component={HomeScreen}
                />
            </Stack.Navigator>
       </NavigationContainer>  
    );
};

export default Router;