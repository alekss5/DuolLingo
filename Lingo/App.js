import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import StackNavigation from "./Navigation/StackNavigation";
import FetchData from "./redux/FetchData";
import { useState } from "react";
import SplashScreen from "./screens/SplashScreen";
import Animated, { FadeIn } from "react-native-reanimated";
import { FadeOut } from "react-native-reanimated";

export default function App() {
  const [isSplashActive, isDataFetched] = useState(false);

  return (
    <>
  
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StatusBar style="dark" />
          {!isSplashActive ? (
           <>
           <SplashScreen />
            <FetchData isDataFetched={isDataFetched} />
           </>
      
          ) : (
            <Animated.View entering={FadeIn} style={{flex:1}}>
              <StackNavigation />
            </Animated.View>
          )}
        </PersistGate>
      </Provider>
    </>
  );
}
