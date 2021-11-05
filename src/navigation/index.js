import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Product from '../screens/Product';
import Cart from '../screens/Cart';
import MyTabs from './BottomTab';
import todo from '../screens/ToDo';
import ProductDetails from '../screens/ProductDetails';


const Stack = createNativeStackNavigator();

const MainStack = () => {

    return(
        <Stack.Navigator initialRouteName="MyTab" screenOptions={{headerShown:false}}>
            <Stack.Screen name="MyTab" component={MyTabs} />
            <Stack.Screen name="Details" component={ProductDetails} />
        </Stack.Navigator>
    )
}



  export default MainStack;