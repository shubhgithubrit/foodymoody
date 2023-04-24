import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home1 from './screens/Home';
import Login from './screens/Login';
import Splash from './screens/Splash';
import Editdata from './screens/EditItems';
import SelectLogin from './customers/Selectlogin';
import UserLogin from './customers/userlogin';
import UserSignup from './customers/UserSignup';
import Home from './customers/Home';
import Cart from './customers/Cart';
import Checkout from './customers/chechouts/Checkout';
import Address from './customers/chechouts/Address';
import AddNewAddress from './customers/chechouts/AddNewAddress';
import OrderStatus from './customers/chechouts/OrderStatus';
const Stack=createStackNavigator();
const AppNavigator = () => {
  return (
  <NavigationContainer>
 <Stack.Navigator>
 <Stack.Screen name="Splash" component={Splash}  options={{headerShown:false}}/>
      <Stack.Screen name="Login" component={Login}  options={{headerShown:false}}/>
      <Stack.Screen name="DashBoard" component={Home1}  options={{headerShown:false}}/>
      <Stack.Screen name="Edit" component={Editdata}  options={{headerShown:false}}/>
      <Stack.Screen
          component={SelectLogin}
          name="SelectLogin"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={UserLogin}
          name="UserLogin"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={UserSignup}
          name="UserSignup"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Home}
          name="Home"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Cart}
          name="Cart"
          options={{headerShown: true}}
        />
        <Stack.Screen
          component={Checkout}
          name="Checkout"
          options={{headerShown: true}}
        />
        <Stack.Screen
          component={Address}
          name="Address"
          options={{headerShown: true}}
        />
        <Stack.Screen
          component={AddNewAddress}
          name="AddNewAddress"
          options={{headerShown: true}}
        />
        <Stack.Screen
          component={OrderStatus}
          name="OrderStatus"
          options={{headerShown: false}}
        />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default AppNavigator

const styles = StyleSheet.create({})