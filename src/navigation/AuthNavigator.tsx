import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from './../screens/(AuthScreens)/SignIn';
import SignUp from '../screens/(AuthScreens)/SignUp';

const AuthNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName={'SignIp'}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={'SignUp'} component={SignUp} />
      <Stack.Screen name={'SignIn'} component={SignIn} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
