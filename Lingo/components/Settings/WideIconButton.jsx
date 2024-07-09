import { Pressable, StyleSheet, Text, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import SettingName from "./SettingName";

export default function WideIconButton({ text, onPress }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      <View style={styles.settingsComponent}>
      <SettingName settingName={text}/>
        <Text>
          <AntDesign name="right" size={20} color="grey" />
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: { flex: 1 },
  settingsComponent: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20, 
    paddingHorizontal: 10,
  },
  pressed: {
    opacity: 0.5,
  },
});
