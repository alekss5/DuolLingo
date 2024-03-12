import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import LottieView from "lottie-react-native";
import CommingSoonAnimation from '../Images/CommingSoon.json'
import ContinueButton from '../components/UI/ContinueButton';
import { successVibration } from '../utils/vibrationPaterns';
export default function CommingSoonScreen({navigation}) {
    const goBack = () => {
        successVibration()
        navigation.navigate("HomeScreen");
      };
  return (
    <SafeAreaView>
      
      <View style={{height:'95%'}}>
      <LottieView
            source={CommingSoonAnimation}
            autoPlay
            loop={true}
            style={styles.animation}
          />
          </View>
            <ContinueButton
        isPressedCard={false}
        submitAnswer={goBack}
        color="blue"
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    animation: {
        paddingTop:'10%',
        width: "100%",
        height: "",
      },
})