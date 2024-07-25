import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNav from "./Navigation/StackNav";
import Splash from "./screens/Splash";

export default function App() {
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplashVisible(false);
    }, 3000);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <NavigationContainer>
      {isSplashVisible ? <Splash /> : <StackNav />}
    </NavigationContainer>
  );
}
