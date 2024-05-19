import {
  SafeAreaView,
  StyleSheet,
  Text,
  Linking,
  ScrollView,
} from "react-native";

import { DataTable } from "react-native-paper";
import { Button } from "react-native-paper";
import { GlobalStyles } from "../../constants/Colors";
import WideIconButton from "../../components/UI/WideIconButton";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/userReducer";
import { sureModalAction } from "../../redux/interfaceReducer";

export default function SettingsScreen({ navigation }) {
  const dispatch = useDispatch()
  const navigateToPreferences = () => {navigation.navigate('PreferencesSettings')};
  const navigateToProfile = () => {navigation.navigate('ProfileSettings')};
  const navigateToNotifications = () => {navigation.navigate('NotificationSettings')};
  const navigateToSocialAccounts = () => {navigation.navigate('SocialAccountSettings')};
  const navigateToPrivacySettings = () => {navigation.navigate('PrivacySettings')};

  const linkToHelpCenter = () => {Linking.openURL("https://www.duolingo.com/terms?wantsPlainInfo=1")}
  const linkToFeedback = () => {Linking.openURL('mailto:support@example.com?subject=SendMail&body=Description')}

  const logOut = () => {
    console.log('logedOut')
    dispatch(sureModalAction(true))
    // dispatch(logoutUser())
    // navigation.navigate('haveAcount')
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <Text style={styles.header}>Account</Text>
        <DataTable style={styles.settingsTable}>
          <DataTable.Row style={styles.tableRow}>
            <WideIconButton
              text="Preferences"
              onPress={navigateToPreferences}
            />
          </DataTable.Row>

          <DataTable.Row style={styles.tableRow}>
            <WideIconButton text="Profile" onPress={navigateToProfile} />
          </DataTable.Row>

          <DataTable.Row style={styles.tableRow}>
            <WideIconButton
              text="Notifications"
              onPress={navigateToNotifications}
            />
          </DataTable.Row>

          <DataTable.Row style={styles.tableRow}>
            <WideIconButton
              text="Social accounts"
              onPress={navigateToSocialAccounts}
            />
          </DataTable.Row>
          <DataTable.Row style={styles.tableRow}>
            <WideIconButton
              text="Privacy settings"
              onPress={navigateToPrivacySettings}
            />
          </DataTable.Row>
        </DataTable>

        <Text style={styles.header}>Support</Text>
        <DataTable style={styles.settingsTable}>
          <DataTable.Row style={styles.tableRow}>
            <WideIconButton
              text="Help Center"
              onPress={linkToHelpCenter}
            />
          </DataTable.Row>

          <DataTable.Row style={styles.tableRow}>
            <WideIconButton text="Feedback" onPress={linkToFeedback} />
          </DataTable.Row>
        </DataTable>
        <Button
          mode="contained"
          style={styles.signOutButton}
          labelStyle={{ fontSize: 20, fontWeight: "500" }}
          buttonColor={GlobalStyles.colors.succesGreen}
          onPress={logOut}
        >
          Sign Out
        </Button>
        <Text
          style={styles.link}
          onPress={() =>
            Linking.openURL("https://www.duolingo.com/terms?wantsPlainInfo=1")
          }
        >
          TERMS
        </Text>
        <Text
          style={styles.link}
          onPress={() =>
            Linking.openURL("https://www.duolingo.com/privacy?wantsPlainInfo=1")
          }
        >
          PRIVACY POLICY
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 15,
    paddingBottom: 10,
    fontSize: 20,
    color: "gray",
    fontWeight: "500",
  },
  settingsTable: {
    width: "95%",
    borderColor: "lightgrey",
    borderWidth: 2,
    borderRadius: 10,
    alignSelf: "center",
  },
  tableRow: {
    borderBottomWidth: 2,
    borderBottomColor: "lightgrey",
  },
  signOutButton: {
    borderRadius: 10,
    borderBottomWidth:3,
    borderBottomColor:GlobalStyles.colors.succesDarkGreen,
    fontSize: 20,
    margin: 30,
    width: "95%",
    alignSelf: "center",
  },
  link: {
    marginLeft: 15,
    padding: 5,
    fontSize: 16,
    fontWeight: `600`,
    color: GlobalStyles.colors.iosBlue,
  },
});
