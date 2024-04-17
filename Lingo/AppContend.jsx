import StackNavigation from "./Navigation/StackNavigation";
import FetchData from "./redux/FetchData";
import { useEffect, useRef, useState } from "react";
import SplashScreen from "./screens/SplashScreen";
import Animated, { FadeIn } from "react-native-reanimated";
import NetInfo from "@react-native-community/netinfo";
import { Text } from "react-native";
import { useRealm } from "@realm/react";

export default function AppContend() {
  const [isSplashActive, isDataFetched] = useState(false);
  const [isUserLoggedin, setIsUserLoggedIn] = useState(false);
//   const [isUserDataSet, setIsUserDataSet] = useState(false);

  const [userEmail, setUserEmail] = useState();
  const [userPassword, setUserPassword] = useState();

  const isNetwork = useRef(true);
  const realm = useRealm();

  const unsubscribe = NetInfo.addEventListener((state) => {
    isNetwork.current = state.isConnected;

    if (state.isConnected === false) {
      isDataFetched(true);
      //Alert
    }
  });
  useEffect(() => {
    const user = realm.objects("User")[0];
    if (user) {
      setUserEmail(user.email);
      setUserPassword(user.password);
      setIsUserLoggedIn(true);
     
    }
    // FetchData should be called here if needed
  }, [realm]);
  //   useEffect(() => {
  //     return (
  //       <FetchData
  //         isDataFetched={isDataFetched}
  //         email={userEmail}
  //         password={userPassword}
  //       />
  //     );
  //   }, [userEmail, userPassword]);
  return (
    <>
    {isNetwork && <Text style={{textAlign:'center'}}> No network</Text>}
      {isUserLoggedin && (
        <FetchData
          isDataFetched={isDataFetched}
          email={userEmail}
          password={userPassword}
        />
      )}
      {/* {isNetwork ? (
        <FetchData
          isDataFetched={isDataFetched}
          email={userEmail}
          password={userPassword}
        />
      ) : (
        <Text> No network</Text>
      )} */}

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
