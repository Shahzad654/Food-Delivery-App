import React, { useState, useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import { ActivityIndicator } from "react-native";

const Splash = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        "Lobster-Regular": require("../assets/fonts/Lobster-Regular.ttf"),
      });
      setFontsLoaded(true);
    };

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Foodgo</Text>
      <Text style={styles.tagline}>Fresh Flavors at Your Doorstep</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
  text: {
    fontFamily: "Lobster-Regular",
    fontSize: 50,
    color: "white",
  },
  tagline: {
    fontFamily: "Lobster-Regular",
    color: "white",
    fontSize: 20,
  },
});

export default Splash;
