// MainNavigator.js

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from '../screens/HomePage'
import SplashPage from '../screens/SplashPage';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name = "Splash" component={SplashPage} options={{
        headerShown: false,
        headerShadowVisible: false,
        headerStyle: {
          background: '#12B2E4'
        }
      }}
      />
      <Stack.Screen name=' ' component={HomePage} options={{ 
        
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: '#4E91FD',
        }}}
            />
    </Stack.Navigator>
  );
};

export default MainNavigator;
