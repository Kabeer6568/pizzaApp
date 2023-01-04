
// In App.js in a new project
// import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tabs from './src/components/tabNavigation'
import Home from './src/screens/Home'
import Crust from './src/screens/Crust'
import Topping from './src/screens/Topping'

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

const Stack = createNativeStackNavigator();

function App() {
  return (
    <>
    <NavigationContainer>
      <Drawer.Navigator>
      <Drawer.Screen options={{
            title: "Uncle John Pizza",

            // Center the header title on Android
            headerTitleAlign: "center",
          }} name="Home" component={Home} />
      <Drawer.Screen  name="Crust" options={{
            title: "Crust",

            // Center the header title on Android
            headerTitleAlign: "center",
          }} component={Crust} />
      <Drawer.Screen  name="Topping" options={{
            title: "Topping",

            // Center the header title on Android
            headerTitleAlign: "center",
          }} component={Topping} />
    </Drawer.Navigator>
    </NavigationContainer>

    
    </>
    );
}

export default App;




// import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';

// const Stack = createStackNavigator();

// function MyStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Home" component={Home} />
//       <Stack.Screen name="About" component={About} />
//     </Stack.Navigator>
//   );
// }








// In App.js in a new project

// import * as React from 'react';
// import { View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Homes" component={HomeScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;