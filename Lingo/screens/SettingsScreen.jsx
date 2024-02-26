import {
  SafeAreaView,
  StyleSheet,
  Text,
} from "react-native";

import { Button } from "react-native-paper";
import { GlobalStyles } from "../constants/Colors";

export default function SettingsScreen({ navigation }) {
  function backHandler() {
    navigation.goBack();
  }
  return (
    <SafeAreaView>
      <Text>SettingsScreen</Text>
      <Button  textColor={GlobalStyles.colors.accentOrange} onPress={backHandler} style={styles.button}>
        Back
      </Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    button:{
        width:"15%",
      fontSize:29
    }
});
