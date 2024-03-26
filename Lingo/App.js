import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
//import { RealmProvider } from "@realm/react";
import StackNavigation from "./Navigation/StackNavigation";
import FetchData from "./redux/FetchData";


export default function App() {
  return (

    <Provider store={store}>

      <PersistGate loading={null} persistor={persistor}>
        <StatusBar style="dark" />
        <FetchData/>



        <StackNavigation />
 
       
      </PersistGate>
    
    </Provider>
 
  );
}

