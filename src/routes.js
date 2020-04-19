import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Importing pages
import Home from './pages/Home';
import Detail from './pages/Detail';

// Set Tab and Stack navigators
const Tabs = createBottomTabNavigator();
const Stack = createStackNavigator();

// Instanciate Icon
Icon.loadFont();

/**
 * HOME STACK SCREENS
 */

const homeStack = () => {
  return (
    <Stack.Navigator
      options={{
        useNativeDriver: true,
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTransparent: true,
          headerTitle: null,
        }}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{
          headerTransparent: true,
          headerTitle: null,
          headerBackTitleVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};

/**
 * TAB NAVIGATOR FUNCTION
 */
export default function Router() {
  return (
    <Tabs.Navigator
      tabBarOptions={{
        activeTintColor: '#1b0241',
        inactiveTintColor: '#ddd',
        showLabel: false,
        style: {
          backgroundColor: '#fff',
          borderTopColor: 'transparent',
        },
        keyboardHidesTabBar: true,
      }}>
      <Tabs.Screen
        name="Home"
        component={homeStack}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Homee"
        component={homeStack}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="poll" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Homeee"
        component={homeStack}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="mic" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Homeeee"
        component={homeStack}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="bookmark" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Homeeeee"
        component={homeStack}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="person" size={24} color={color} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}
