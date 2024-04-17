import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabsNavigation from "./BottomTabsNavigation";
import SettingsScreen from "../screens/SettingsScreen";
import PlayScreen from "../screens/PlayScreen";
import FinishScreen from "../screens/FinishScreen";

import AddFrendsModal from "../components/Modals/AddFrendsModal";
import HeartsModal from "../components/Modals/HeartsModal";
import { useDispatch } from "react-redux";
import { setLesson } from "../redux/lessonReducer";
import { loginUser } from "../redux/userReducer";
import { setHomePathData } from "../redux/homePathReducer";
import NoHeartsScreen from "../screens/NoHeartsScreen";
import CommingSoonScreen from "../screens/CommingSoonScreen";
import { getUserData,saveUserData } from "../realm/actions";
import LoginScreen from "../screens/LoginScreen";


const Stack = createStackNavigator();

export default function StackNavigation({isUserLoggedin}) {

  // //   saveUserData("aleksndar305@gmail.com", "5505667Sa");

  // const handleGetUserData = async () => {
  //   // Call getUserData function to retrieve user data
  //   const userData = await getUserData();
  //   console.log("User data:", userData);
  // };
  
  // // Example usage of handleGetUserData function
  // handleGetUserData();
  console.log(isUserLoggedin)

  return (
    <NavigationContainer>
      <Stack.Navigator>
     {!isUserLoggedin && <Stack.Screen name='Login' component={LoginScreen}/>}
        <Stack.Screen
          name="BottomTabs"
          component={BottomTabsNavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="addFrendModal" component={AddFrendsModal} />
        <Stack.Screen name="heartsModal" component={HeartsModal} />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
