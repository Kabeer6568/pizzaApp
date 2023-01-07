import React from "react";

import {View, Text, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './Home'
import Crust from './Crust'
import Topping from './Topping'
import BTNCarousal from './BTNCarousal'
import ConfirmOrder from './ConfirmOrder'
import ButtonTest from './ButtonTest'


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


function Root() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Crust" component={Crust} />
      <Stack.Screen name="Topping" component={Topping} />
    </Drawer.Navigator>
  );
}

function About() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Root"
          component={Root}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="ConfirmOrder" component={ConfirmOrder} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default About;
