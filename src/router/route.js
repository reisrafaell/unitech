import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthProvider from "../context/auth";
import { Home, Login } from "../pages";
import { InitialPage } from "../pages/initial";
import { Cadastro } from "../pages/Cadastro";

const Stack = createNativeStackNavigator();

const Route = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Stack.Navigator>
        <Stack.Screen
            name="Login"
            options={{
              headerShown: false,
            }}
            component={Login}
          />
        <Stack.Screen
            name="InitialPage"
            options={{
              headerShown: false,
            }}
            component={InitialPage}
          />
        <Stack.Screen
            name="Cadastro"
            options={{
              headerShown: false,
            }}
            component={Cadastro}
          />


          <Stack.Screen
            name="Home"
            options={{
              headerShown: false,
            }}
            component={Home}
          />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </AuthProvider>
    </NavigationContainer>
  );
};
export default Route;
