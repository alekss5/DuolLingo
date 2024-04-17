import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { User } from "./realm/UserSchema";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { RealmProvider } from "@realm/react";
import AppContend from "./AppContend";

export default function App() {
  return (
    <RealmProvider schema={[User]}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StatusBar style="dark" />
          <AppContend />
        </PersistGate>
      </Provider>
    </RealmProvider>
  );
}
