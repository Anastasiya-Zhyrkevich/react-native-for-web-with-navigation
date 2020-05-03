// import React, { Component } from "react";
// import { AppRegistry, Button, Image, StyleSheet, Text, View } from "react-native";

const { Button, Image, StyleSheet, Text, View } = window.RN;

const {NavigationContainer} = reactNavigationNative;
const {createStackNavigator} = reactNavigationStack;


const HomeScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'skyblue' }}>
    <Text style={{ textAlign: 'center' }}>This is Home Screen!</Text>
  </View>
);

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

RN.AppRegistry.registerComponent("App", () => App);

RN.AppRegistry.runApplication("App", {
  rootTag: document.getElementById("root")
});
