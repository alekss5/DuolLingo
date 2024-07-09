import { createStackNavigator } from '@react-navigation/stack';

import SettingsScreen from '../screens/SettingsScreens/SettingsScreen';
import PreferencesSettingsScreen from '../screens/SettingsScreens/PreferencesSettingsScreen';
import ProfileSettingsScreen from '../screens/SettingsScreens/ProfileSettingsScreen';
import { GlobalStyles } from '../constants/Colors';
import { Button } from 'react-native-paper';
import NotificationsSettingsScreen from '../screens/SettingsScreens/NotificationsSettingsScreen';
import SocialsSettingsScreen from '../screens/SettingsScreens/SocialsSettingsScreen';
import PrivacyScreen from '../screens/SettingsScreens/PrivacyScreen';

const Stack = createStackNavigator();

export default function SettingsStack() {
  return (
    <Stack.Navigator>
       <Stack.Screen
        name="PreferencesSettings"
        component={PreferencesSettingsScreen}
        options={{ title: 'Preferences' }}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={({ navigation }) => ({
          gestureEnabled: false,
          headerLeft: null,
          headerRight: () => (
            <Button
              textColor={GlobalStyles.colors.accentOrange}
              onPress={() => navigation.goBack()}
              labelStyle={{ fontSize: 18, fontWeight: '500' }} 
            >
              Back
            </Button>
          ),
        })}
      />
      <Stack.Screen
        name="ProfileSettings"
        component={ProfileSettingsScreen}
        options={{ title: 'Profile' }}
      />
       <Stack.Screen
        name="NotificationSettings"
        component={NotificationsSettingsScreen}
        options={{ title: 'Notifications' }}
      />
      <Stack.Screen
        name="SocialAccountSettings"
        component={SocialsSettingsScreen}
        options={{ title: 'Social accounts' }}
      />
        <Stack.Screen
        name="PrivacySettings"
        component={PrivacyScreen}
        options={{ title: 'Privacy' }}
      />
    </Stack.Navigator>
  );
}