
// In App.js in a new project
// import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import React from 'react';

import DrawerHeader from './src/Components/DrawerHeader'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';


import Home from './src/Screens/Home'
import Crust from './src/Screens/Crust'
import Topping from './src/Screens/Topping'
import BTNCarousal from './src/Screens/BTNCarousal'
import ConfirmOrder from './src/Screens/ConfirmOrder'
import ButtonTest from './src/Screens/ButtonTest'
// import DrawerNavAddition from './src/Components/DrawerNavAddition'


import DrawerHeaderMain from './src/Components/DrawerHeaderMain'
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


function Root() {
  return (
    <Drawer.Navigator >
      <Drawer.Screen name="Home" component={Home} options={{ headerShown: false }}/>
      <Drawer.Screen name="Crust" component={Crust} options={{ headerShown: false }}/>
      <Stack.Screen name="Topping" component={Topping}options={{ headerShown: false }} />
    </Drawer.Navigator>
  );
}



function App() {
  return (
    <>
      <DrawerHeaderMain/>
      
    
  
          
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