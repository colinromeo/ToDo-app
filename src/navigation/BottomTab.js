import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import todo from '../screens/ToDo';
import Product from '../screens/Product';
import Cart from '../screens/Cart';
import Icon from 'react-native-vector-icons/FontAwesome5';
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}
      >
      <Tab.Screen
        name="Home"
        component={todo}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Product"
        component={Product}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="shopping-basket" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="shopping-cart" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
