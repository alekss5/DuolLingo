import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Vibration } from "react-native";
import { GlobalStyles } from "../constants/Colors";
import IconButton from "../components/UI/IconButton";
import FeedScreen from "../screens/FeedScreen";
import LeaderboardScreen from "../screens/LeaderboardScreen";

import { useSelector } from "react-redux";
import { selectIsUserLoggedIn } from "../redux/userReducer";
import { useNavigation } from "@react-navigation/native";

const BottomTabs = createBottomTabNavigator();
export default function BottomTabsNavigation() {
  const isUserLoggedin = useSelector(selectIsUserLoggedIn);
  const navigation = useNavigation()

  if(!isUserLoggedin){
    navigation.navigate('haveAcount')
    
  }

  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerShown: false,
        tabBarStyle: { borderTopWidth: 2 },

        tabBarActiveBackgroundColor: GlobalStyles.colors.lightBlue,

        tabBarActiveTintColor: GlobalStyles.colors.white,
        tabBarOnPress: () => {
          Vibration.vibrate();
        },
        tabBarItemStyle: {
          borderRadius: 200,
        },
      })}
    >
      <BottomTabs.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: "HomeScreen",
          tabBarLabel: "Home",
          headerShown: false,

          tabBarIcon: ({ size, color }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="LeaderBoard"
        component={LeaderboardScreen}
        options={{
          title: "LeaderBoard",
          tabBarLabel: "Leaderboard",

          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="leaderboard" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="user" size={size} color={color} />
          ),
          headerRight: () => (
            <IconButton
              icon="settings-outline"
              size={24}
              color={GlobalStyles.colors.white}
            />
          ),
          headerShown: false,
        }}
      />
      <BottomTabs.Screen
        name="Feed"
        component={FeedScreen}
        options={{
          headerShown: true,
          headerTintColor: "gray",
          headerStyle: {
            borderBottomWidth: 2.3,
          },
          title: "Feed",
          tabBarLabel: "Feed",

          tabBarIcon: ({ size, color }) => (
            <Ionicons name="notifications" size={size} color={color} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}

const styles = StyleSheet.create({});
