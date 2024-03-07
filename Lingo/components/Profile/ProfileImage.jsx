import {
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import IconButton from "../UI/IconButton";
import { GlobalStyles } from "../../constants/Colors";
import LottieView from "lottie-react-native";

import avatarImage from '../../Images/avatarAnimation.json'
export default function ProfileImage() {
  const navigation = useNavigation();
  function addProfilePicture() {}

  function settingsHandler() {
    navigation.navigate('Settings')
  }

  return (
    <View style={styles.container}>
      <View style={styles.settings}>
        <IconButton icon="settings-outline" size={24} onPress={settingsHandler} color={GlobalStyles.colors.white}/>
      </View>

      <TouchableOpacity onPress={addProfilePicture} style={styles.pressable}>
        {/* <Image
          source={require("../../Images/defaultUser.png")}
          style={styles.image}
        /> */}
        <LottieView
          source={avatarImage}
          autoPlay
          loop={true}
          style={styles.animation}
        />
        
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "30%",
    backgroundColor: GlobalStyles.colors.middleGreen,
  },
  pressable: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  settings: {
    paddingTop: "10%",
    alignItems: "flex-end",
    paddingRight: 10,
  },

  image: {
    width: "50%",
    height: "100%",
  },
});
