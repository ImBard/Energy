import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/login';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Login' component={Login} />
    </Stack.Navigator>
  )
}

function App() {
  return (
    <Login/>
  )
}
export default App;
