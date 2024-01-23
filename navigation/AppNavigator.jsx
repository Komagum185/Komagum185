import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Ionicons, AntDesign, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import HomePage from '../screens/HomePage';
import GroupPage from '../screens/GroupPage';
import LibraryPage from '../screens/LibraryPage';
import NotificationsPage from '../screens/NotificationsPage';
import SignInPage from '../screens/SigninPage';
import NewFeedPage from '../screens/NewFeedPage';
import MyPage from '../screens/MyPage';

const Tab = createMaterialTopTabNavigator();

const AppNavigator = () => {
  const screens = [
    {
      name: 'New Feeds',
      component: NewFeedPage,
      options: {
        tabBarIcon: () => <MaterialIcons name="home" size={24} color="#fff" />,
        tabBarLabel: () => null,
      },
    },
    {
      name: 'Groups',
      component: GroupPage,
      options: {
        tabBarIcon: () => <MaterialIcons name="group" size={24} color="white" />,
        tabBarLabel: () => null,
      },
    },
    {
      name: 'Library',
      component: LibraryPage,
      options: {
        tabBarIcon: () => <MaterialCommunityIcons name="bookshelf" size={24} color="white" />,
        tabBarLabel: () => null,
      },
    },
    {
      name: 'Notifications',
      component: NotificationsPage,
      options: {
        tabBarIcon: () => <Ionicons name="notifications-outline" size={24} color="white" />,
        tabBarLabel: () => null,
      },
    },
    {
      name: 'Menu',
      component: MyPage, // Consider using a separate component for the Menu
      options: {
        tabBarIcon: () => <Ionicons name="menu" size={24} color="white" />,
        tabBarLabel: () => null,
      },
    },
  ];

  return (
    <Tab.Navigator
      initialRouteName="HomePage"
      screenOptions={{
        tabBarActiveTintColor: '#ffffff',
        tabBarStyle: { backgroundColor: '#4e91fd' },
        tabBarShowLabel: false,
      }}
    >
      {screens.map((screen) => (
        <Tab.Screen key={screen.name} name={screen.name} component={screen.component} options={screen.options} />
      ))}
    </Tab.Navigator>
  );
};

export default AppNavigator;
