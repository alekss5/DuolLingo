import { StyleSheet, Text, View, Modal } from "react-native";
import { Divider, IconButton, Searchbar } from "react-native-paper";
import { GlobalStyles } from "../../constants/Colors";

export default function AddFrendsModal({ modalVisible, setModalVisible }) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(false);
      }}
    >
      <View style={styles.modalView}>
        <View style={styles.rowContainer}>
          <IconButton
            icon="close"
            //   mode="outlined"
            iconColor={GlobalStyles.colors.gray}
            style={styles.closeButton}
            size={26}
            onPress={() => setModalVisible(false)}
          />
          <Text style={styles.modalText}>Search for friends</Text>
        </View>
        <Searchbar placeholder="Name or username" style={styles.searchBar} />
        <Divider style={{ height: 1.5 }} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    borderRadius: 7,

    borderColor: "black",
    backgroundColor: "transparent",
    width: "90%",
    height: 50,
  },

  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    width: "100%",
    height: "100%",
    alignSelf: "flex-end",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  closeButton: {},

  modalText: {
    flex: 1,
    padding: 7,
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
    justifyContent: "center",
  },

  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
