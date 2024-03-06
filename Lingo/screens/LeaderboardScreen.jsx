import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import LottieView from 'lottie-react-native';

import finishAnimation from '../Images/finishAnimation.json'
import finishText from '../Images/finishText.json'
import { GlobalStyles } from '../constants/Colors';

export default function LeaderboardScreen() {
  return (
    
    <SafeAreaView>
    <View style={styles.animationFinisContainer}>
          <LottieView source={finishText} autoPlay loop={true} style={styles.animation} />
        </View>
        <View style={styles.finishAnimationContainer}>
          <LottieView source={finishAnimation} autoPlay loop={true} style={styles.animation} />
        </View>
      <Text style={styles.text}>Finish <Text style={{color:GlobalStyles.colors.accentOrange}}>3 lesons</Text> to start competing on Leaderborad</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  animationFinisContainer:{
    width: '100%',
    height: 250,

  },
  finishAnimationContainer:{
    width: '100%',
    height: 250,
  },
  text:{
    marginTop: 30,
    fontSize:22,
    fontWeight: 'bold',
    textAlign: 'center'
  }
 
})