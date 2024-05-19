import StackNavigation from "./Navigation/StackNavigation";
import FetchData from "./redux/FetchData";
import { useEffect, useRef, useState } from "react";
import SplashScreen from "./screens/SplashScreen";
import Animated, { FadeIn } from "react-native-reanimated";
import NetInfo from "@react-native-community/netinfo";
import { Alert, Text } from "react-native";
import { useRealm } from "@realm/react";
import { Linking } from "react-native";


export default function AppContend() {
  const [isSplashActive, isDataFetched] = useState(false);
  const [isUserLoggedin, setIsUserLoggedIn] = useState(false);
  const [showNetworkAlert, setShowNetworkAlert] = useState(false);
  const [userEmail, setUserEmail] = useState();
  const [userPassword, setUserPassword] = useState();

  const isNetwork = useRef(false);
  const realm = useRealm();
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      isNetwork.current = state.isConnected;
      if (state.isConnected === false) {
        setShowNetworkAlert(true);
        <Alert
          title="No Internet Connection"
          message="Please check your internet connection and try again."
          buttons={[
            {
              text: "Settings",
              onPress: () => {
                Linking.openSettings();
                setShowNetworkAlert(false);
              },
            },
            {
              text: "OK",
              onPress: () => {
                showNetworkAlert(false);
                isDataFetched(true);
              },
            },
          ]}
          cancelable={false}
        />;
      }
    });
  }, []);

  useEffect(() => {
    const user = realm.objects("User")[0];
    if (user) {
      setUserEmail(user.email);
      setUserPassword(user.password);
      setIsUserLoggedIn(true);

    }
  }, []);


  if (setShowNetworkAlert) {
  }

  return (
    <>
      {/* {showNetworkAlert && (
        <Alert.alert
          title="No Internet Connection"
          message="Please check your internet connection and try again."
          buttons={[
            {
              text: "Settings",
              onPress: () => {
                Linking.openSettings();
                setShowNetworkAlert(false);
              },
            },
            {
              text: "OK",
              onPress: () => {
                showNetworkAlert(false);
              },
            },
          ]}
          cancelable={false}
        />
      )} */}
      {!isNetwork && <Text style={{ textAlign: "center" }}>No network</Text>}
      {isUserLoggedin && (
        <FetchData
          isDataFetched={isDataFetched}
          email={userEmail}
          password={userPassword}
        />
      )}
      {!isSplashActive ? (
        <>
          <SplashScreen />
        </>
      ) : (
        <Animated.View entering={FadeIn} style={{ flex: 1 }}>
          <StackNavigation isUserLoggedin={isUserLoggedin} />
        </Animated.View>
      )}
    </>
  );
}
