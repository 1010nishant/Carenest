import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Assistant from '../screens/Assistant';
import Reminders from '../screens/Reminders';
import Tips from '../screens/Tips';
import Exerices from '../screens/Exerices';
import MedDrop from '../screens/MedDrop';
import SOS from '../screens/SOS';
import BottomNavigationBar from '../components/BottomNavigationBar';

const BottomNavigator = () => {
  const BottomTab = createBottomTabNavigator();
  return (
    <BottomTab.Navigator
      backBehavior="initialRoute"
      initialRouteName={'HOME'}
      tabBar={BottomNavigationBar}
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
      }}>
      <BottomTab.Screen name={'HOME'} component={Home} />
      <BottomTab.Screen name={'ASSISTANT'} component={Assistant} />
      <BottomTab.Screen name={'REMINDERS'} component={Reminders} />
      <BottomTab.Screen name={'TIPS'} component={Tips} />
      <BottomTab.Screen name={'EXERCISES'} component={Exerices} />
      <BottomTab.Screen name={'MEDDROP'} component={MedDrop} />
      <BottomTab.Screen name={'SOS'} component={SOS} />
    </BottomTab.Navigator>
  );
};

export default BottomNavigator;
