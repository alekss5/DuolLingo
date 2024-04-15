import { StyleSheet, View } from "react-native";

import splashAnimation from "../Images/splash.json";
import LottieView from "lottie-react-native";
import Animated, { ZoomOut } from "react-native-reanimated";

const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);

export default function SplashScreen() {
  return (
    <View style={styles.animationFinisContainer}>
      <AnimatedLottieView
        exitAnimation={ZoomOut}
        source={splashAnimation}
        autoPlay
        loop={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  animationFinisContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#79c485",
  },
});
