import { createStaticNavigation, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from './screens/HomeScreen';
import RestuarantScreen from './screens/RestuarantScreen';

const Stack = createNativeStackNavigator();


export default function Navigation() {
  return (
   <NavigationContainer screenOptions ={{ 
     headerShown: false
   }}>
    <Stack.Navigator>
      <Stack.Screen name ="Home" component ={HomeScreen}/>
      <Stack.Screen name ="Restuarant" component ={RestuarantScreen}/>
    </Stack.Navigator>
   </NavigationContainer>
  )
}