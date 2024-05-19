import { useState } from "react";
import { View } from "react-native";
import {
  Button,
  Dialog,
  Portal,
  PaperProvider,
  Text,
} from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSureModalState,
  sureModalAction,
} from "../../redux/interfaceReducer";

const Dialog = () => {
  const inModalOpen = useSelector(selectSureModalState);
  const dispatch = useDispatch();
  const hideDialog = () => dispatch(sureModalAction(false));

  return (
    <PaperProvider>
      <View>
        <Portal>
          <Dialog visible={inModalOpen} onDismiss={hideDialog}>
            <Dialog.Title>Alert</Dialog.Title>
            <Dialog.Content>
              <Text variant="bodyMedium">This is simple dialog</Text>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideDialog}>Done</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    </PaperProvider>
  );
};

export default Dialog;
