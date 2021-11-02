import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

//imports of only screens
import Login from "./app/screen/Login";
import Home from "./app/screen/Home";
import Cart from "./app/screen/Cart";

export default function App() {
  const MainNavigator = createStackNavigator();
  const [activeBtn, setActiveBtn] = useState("home");

  return (
    <NavigationContainer>
      <MainNavigator.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <MainNavigator.Screen name="login" component={Login} />
        <MainNavigator.Screen name="home" component={Home} />
        <MainNavigator.Screen name="cart" component={Cart} />
      </MainNavigator.Navigator>
    </NavigationContainer>
  );
}
