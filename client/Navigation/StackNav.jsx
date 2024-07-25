import { createStackNavigator } from "@react-navigation/stack";
import TabNav from "./TabNav";

const Stack = createStackNavigator();



export default function StackNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="tabnav" component={TabNav} options={{headerShown:false}} />
    </Stack.Navigator>
  );
}
