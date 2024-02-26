import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { AntDesign } from "@expo/vector-icons";
import { Vibration } from "react-native"; 
import { GlobalStyles } from "../constants/Colors";
import IconButton from "../components/UI/IconButton";

const BottomTabs = createBottomTabNavigator();
export default function BottomTabsNavigation() {
  // const GlobalStyles = GStyles(theme);
  return (
 
      <BottomTabs.Navigator
        screenOptions={({ navigation }) => ({
          tabBarBackgroundColor: GlobalStyles.colors.backgroundGreen,
          
          // headerStyle: { backgroundColor: 'transparent' },
          headerShown: false,
           //headerTintColor:GlobalStyles.colors.backgroundGreen,
           tabBarStyle: { backgroundColor: GlobalStyles.colors.darkGreen },
           tabBarActiveTintColor: GlobalStyles.colors.white,
           tabBarOnPress:()=>{
             Vibration.vibrate();
           }
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
            title: "Home Screen",
            tabBarLabel: "Home Screen",

            tabBarIcon: ({ size, color }) => (
              <AntDesign name="home" size={size} color={color} />
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
              <IconButton icon="settings-outline" size={24}  color={GlobalStyles.colors.white}/>
            ),
          }}
        />
      </BottomTabs.Navigator>
  
  );
}

const styles = StyleSheet.create({});
