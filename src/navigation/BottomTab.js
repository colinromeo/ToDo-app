import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import todo from '../screens/ToDo';
import Product from '../screens/Product';
import Cart from '../screens/Cart';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useSelector } from 'react-redux';
import Movies from '../screens/Movies';

const Tab = createBottomTabNavigator();

function MyTabs() {
  const { singleProduct, cart } = useSelector((state) => state.product);
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
          tabBarBadge: cart?.length
        }}
      />
      <Tab.Screen
        name="Movies"
        component={Movies}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="film" color={color} size={size} />
          ),
          headerShown: false
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
