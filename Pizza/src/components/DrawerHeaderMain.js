
// In App.js in a new project
// import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import React from 'react';

import DrawerHeader from './DrawerHeader'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../Screens/Home'
import Crust from '../Screens/Crust'
import Topping from '../Screens/Topping'
import BTNCarousal from '../Screens/BTNCarousal'
import ConfirmOrder from '../Screens/ConfirmOrder'
import ButtonTest from '../Screens/ButtonTest'
import About from '../Screens/About'
// import DrawerNavAddition from './src/Components/DrawerNavAddition'

const Drawer = createDrawerNavigator();


function DrawerHeaderMain() {
  return (
    <>
      <NavigationContainer>
        <Drawer.Navigator drawerContent={props => <DrawerHeader {...props} />} screenOptions={{headerShown: false}}>
          <Drawer.Screen options={{
            title: "Uncle John Pizza",

            // Center the header title on Android
            headerTitleAlign: "center",
          }} name="Home" component={Home} />
          <Drawer.Screen name="Crust" options={{
            title: "Crust",

            // Center the header title on Android
            headerTitleAlign: "center",
          }} component={Crust} />
          <Drawer.Screen name="Topping" options={{
            title: "Topping",

            // Center the header title on Android
            headerTitleAlign: "center",
          }} component={Topping} />
          <Drawer.Screen name="BTNCarousal" options={{
            title: "BTNCarousal",

            // Center the header title on Android
            headerTitleAlign: "center",
          }} component={BTNCarousal} />

          <Drawer.Screen name="ConfirmOrder" options={{
            title: "Confirm Order",

            // Center the header title on Android
            headerTitleAlign: "center",
          }} component={ConfirmOrder} />
          <Drawer.Screen name="About" options={{
            title: "About",

            // Center the header title on Android
            headerTitleAlign: "center",
          }} component={About} />

        </Drawer.Navigator>

      </NavigationContainer>


    </>
  );
}

export default DrawerHeaderMain;


