import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";

import AuthStack from "./src/navigation/AuthStack";
import AppTabs from "./src/navigation/AppTabs";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      {isAuthenticated ? <AppTabs /> : <AuthStack setIsAuthenticated={setIsAuthenticated} />}
    </NavigationContainer>
  );
}