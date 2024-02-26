import { StyleSheet, SafeAreaView, View } from 'react-native'

import { GlobalStyles } from '../constants/Colors'
import TopNavBar from '../components/HomePage/TopNavBar'
import CurrentLestonBanner from '../components/HomePage/CurrentLestonBanner'
import HomeTestPath from '../components/HomePage/HomeTestPath'
import { useDispatch } from 'react-redux';
export default function HomeScreen() {
  const dispatch = useDispatch();
  const lesson = [{ id: 1, word: 'Bier',choises:['milk','tea','bred','Bier']  },
  // { id: 2, word: 'milk',choises:['Bier','tea','bred','milk']  },
  // { id: 3, word: 'bred',choises:['Bier','tea','milk','bred']  },
];
    dispatch({ type: 'SET_LESSONS', payload: lesson });
  

    
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.container}> 
     <TopNavBar/>
     <CurrentLestonBanner/>
     <HomeTestPath/>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:GlobalStyles.colors.black,
  }
})