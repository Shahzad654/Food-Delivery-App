import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Booking from "../screens/Booking";
import Favortties from "../screens/Favortties";
import Home from "../screens/Home";
import MenuScrn from "../screens/MenuScrn";

const Tab = createMaterialBottomTabNavigator();


export default function TabNav() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      barStyle={{ backgroundColor: "white" }}
      activeColor="orange"
      inactiveColor="#3e2465"
      shifting={false}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Menu"
        component={MenuScrn}
        options={{
          tabBarLabel: "Menu",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="food" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Bookings"
        component={Booking}
        options={{
          tabBarLabel: "Bookings",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="book" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favortties}
        options={{
          tabBarLabel: "Favorties",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="heart" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}