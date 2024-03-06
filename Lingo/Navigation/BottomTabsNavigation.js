import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, View } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Vibration } from "react-native";
import { GlobalStyles } from "../constants/Colors";
import IconButton from "../components/UI/IconButton";
import FeedScreen from "../screens/FeedScreen";

const BottomTabs = createBottomTabNavigator();
export default function BottomTabsNavigation() {
  // const GlobalStyles = GStyles(theme);
  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        tabBarBackgroundColor: GlobalStyles.colors.backgroundGreen,

        // headerStyle: { backgroundColor: 'transparent' },
        headerShown: false,
        // headerTintColor:GlobalStyles.colors.backgroundGreen,
        tabBarStyle: { backgroundColor: GlobalStyles.colors.darkGreen },
        //tabBarActiveBackgroundColor: GlobalStyles.colors.lightBlue,
        tabBarActiveTintColor: GlobalStyles.colors.white,
        tabBarOnPress: () => {
          Vibration.vibrate();
        },
        // headerRight: ({ tintColor }) => (
        //   <IconButton
        //     icon="add"
        //     size={24}
        //     color={tintColor}
        //     onPress={() => {
        //       navigation.navigate("ManageExpense");
        //     }}
        //   />
        // ),
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
          // headerRight: () => (
          //   <View style={{ marginRight: 10 }}>
          //     <AntDesign
          //       name="pluscircleo"
          //       size={24}
          //       color="black"
          //       onPress={() => navigation.navigate("ModalScreen")}
          //     />
          //   </View>
          // ),
        }}
      />
      <BottomTabs.Screen
        name="LeaderBoard"
        component={FeedScreen}
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
