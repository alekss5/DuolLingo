import { StyleSheet, Text } from "react-native";

export default function SectionName({ sectionName }) {
  return <Text style={styles.header}>{sectionName}</Text>;
}

const styles = StyleSheet.create({
  header: {
    padding: 15,
    paddingBottom: 10,
    fontSize: 20,
    color: "gray",
    fontWeight: "500",
  },
});
