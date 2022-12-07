import GoalInput from "./components/Auth/Auth";
import LoggedIn from "./LoggedIn";
import AuthContextProvider from "./services/api/store/auth-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegisterDriver from "./components/registerDriver";
import TestNotif from "./TestNotif";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AuthContextProvider>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="GoalInput" component={GoalInput} />
          <Stack.Screen name="LoggedIn" component={LoggedIn} />
          <Stack.Screen name="RegisterDriver" component={RegisterDriver} />
          <Stack.Screen name="TestNotif" component={TestNotif} />
        </Stack.Navigator>
      </AuthContextProvider>
    </NavigationContainer>
  );
}
