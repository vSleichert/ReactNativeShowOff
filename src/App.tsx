import React from 'react'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import DetailScreen from './screens/DetailScreen'
import Header from './components/Header'

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Login'
          component={LoginScreen}
          options={{ title: 'Login' }}
        />
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{ title: 'Project List',
          headerLeft: () => ( <></> ),
          headerRight: () => ( <Header /> ) }}
        />
        <Stack.Screen 
          name='Detail'
          component={DetailScreen}
          options={{ title: 'Detail',
          headerRight: () => ( <Header /> ) }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
