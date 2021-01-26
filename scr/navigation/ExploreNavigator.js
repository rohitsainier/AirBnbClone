import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import SearchScreen from '../screens/SearchResults';

const Stack = createStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={'Welcome'}
                component={HomeScreen}
                options={{
                    headerShown:false,
                }}
            />
            <Stack.Screen
                name={'SearchResults'}
                component={SearchScreen}
                options={{
                    title:'Search your destination',
                }}
            />
        </Stack.Navigator>
    );
}

export default Router;