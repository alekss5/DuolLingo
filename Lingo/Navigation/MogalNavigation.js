import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import AddFrendsModal from "../components/Modals/AddFrendsModal";

const Stack = createStackNavigator();
const ModalNavigation = () => (
  <NavigationContainer>
    <Stack.Navigator mode="modal" headerMode="none">
      <Stack.Screen name="addFrendModal" component={AddFrendsModal} />
    </Stack.Navigator>
  </NavigationContainer>
);
export default ModalNavigation;
