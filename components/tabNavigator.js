import React from 'react';
import { View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../screens/home';
import { Notification } from '../screens/notification';
import { Profile } from '../screens/profile';
import { Icon } from 'react-native-elements';

const Tab = createBottomTabNavigator();

const TabNavigator = () =>{
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'gray',}}>
            <Tab.Screen name='Home' component={Home} options={{headerShown:false,tabBarIcon:({focused})=>{return(<Icon name="home-outline" type="ionicon" color="#000" size={20} />)},tabBarShowLabel:false}}/>
            <Tab.Screen name='Notification' component={Notification} options={{headerShown:false,tabBarIcon:({focused})=>{return(<Icon name="notifications-outline" type="ionicon" color="#000" size={20} />)},tabBarShowLabel:false}}/>
                <Tab.Screen name='Profile' component={Profile} options={{headerShown:false,tabBarIcon:({focused})=>{return(<Icon name="person-outline" type="ionicon" color="#000" size={20} />)},tabBarShowLabel:false}}/>
            </Tab.Navigator>
        </NavigationContainer>

    )
}

export { TabNavigator };