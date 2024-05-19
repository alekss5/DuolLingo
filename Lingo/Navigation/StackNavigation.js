import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabsNavigation from "./BottomTabsNavigation";
import PlayScreen from "../screens/PlayScreen";
import FinishScreen from "../screens/FinishScreen";
import AddFrendsModal from "../components/Modals/AddFrendsModal";
import HeartsModal from "../components/Modals/HeartsModal";
import NoHeartsScreen from "../screens/NoHeartsScreen";
import CommingSoonScreen from "../screens/CommingSoonScreen";
import LoginScreen from "../screens/LoginScreen";
import StartRegisterPage from "../screens/StartRegisterScreen";
import RegisterScreen from "../screens/RegisterScreen";
import { GlobalStyles } from "../constants/Colors";
import SettingsStack from "./SettingsStackNavigation";

const Stack = createStackNavigator();

export default function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="BottomTabs"
          component={BottomTabsNavigation}
          options={{
            headerShown: false,
            gestureEnabled: false,
          }}
        />
        <Stack.Screen
          name="SettingsStack"
          component={SettingsStack}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="addFrendModal" component={AddFrendsModal} />
        <Stack.Screen name="heartsModal" component={HeartsModal} />
        <Stack.Screen
          name="haveAcount"
          component={StartRegisterPage}
          options={{ headerShown: false, gestureEnabled: false }}
        />
        <Stack.Screen
          name="PlayScreen"
          component={PlayScreen}
          options={{ headerShown: false, gestureEnabled: false }}
        />
        <Stack.Screen
          name="FinishScreen"
          component={FinishScreen}
          options={{ headerShown: false, gestureEnabled: false }}
        />
        <Stack.Screen
          name="NoHeartsScreen"
          component={NoHeartsScreen}
          options={{ headerShown: false, gestureEnabled: false }}
        />
        <Stack.Screen
          name="CommingSoonScreen"
          component={CommingSoonScreen}
          options={{ headerShown: false, gestureEnabled: false }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            headerBackTitle: " ",
            gestureEnabled: false,
            headerTitle: "Enter your details",
            headerTitleStyle: { color: GlobalStyles.colors.gray, fontSize: 18 },
          }}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
