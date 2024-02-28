import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import CountryFlag from "react-native-country-flag";
import { GlobalStyles } from "../../constants/Colors";

import { Button, IconButton, Divider } from "react-native-paper";
import { shareContent } from "../../utils/share";
import AddFrensModal from "./AddFrendsModal";
import {
  selectUserName,
  selectName,
  selectCurrentCourse,
  selectJoinedDate,
} from "../../redux/userReducer";
import { useSelector } from "react-redux";

export default function ProfileInformation() {
  const name = useSelector(selectName)
  const userName = useSelector(selectUserName);
  const joinedDate = new Date(useSelector(selectJoinedDate));
  const currentCourse = useSelector(selectCurrentCourse);
  const joinedMonth = joinedDate.toLocaleString('default',{month:'long'})
  const joinedYear = joinedDate.getFullYear()

  const [modalOpen, setModalOpen] = useState(false);
  const onShare = () => {
    const message =
      "React Native | A framework for building native apps using React";
    shareContent(message);
  };
  const closeModal = () => setModalOpen(false);

  function addFrensModal() {
    setModalOpen(true);
  }

  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <Text style={styles.name}>{name}</Text>
        <CountryFlag isoCode={currentCourse} size={25} style={styles.flag} />
      </View>

      <Text style={styles.userName}>{userName}</Text>
      <Text style={styles.joined}>Joined {joinedMonth} {joinedYear}</Text>

      <View style={styles.followers}>
        <Text style={styles.followersText}>0 following </Text>
        <Text style={styles.followersText}>0 followers</Text>
      </View>

      <View style={styles.rowContainer}>
        <Button
          icon="plus"
          mode="outlined"
          textColor={GlobalStyles.colors.accentOrange}
          onPress={addFrensModal}
          style={styles.addFrensButton}
        >
          Add Frends
        </Button>
        <IconButton
          icon="share"
          mode="outlined"
          iconColor={GlobalStyles.colors.accentOrange}
          style={styles.shareButton}
          size={20}
          onPress={onShare}
        />
      </View>
      <Divider style={{ height: 1.5 }} />

      <AddFrensModal modalVisible={modalOpen} setModalVisible={closeModal} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  rowContainer: {
    paddingBottom: 10,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  flag: {
    borderRadius: 6,
    width: 30,
  },
  userName: {
    color: GlobalStyles.colors.gray,
  },
  joined: {
    paddingTop: 10,
    color: GlobalStyles.colors.gray,
  },
  followers: {
    paddingVertical: 10,

    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  followersText: {
    color: GlobalStyles.colors.accentOrange,
  },
  addFrensButton: {
    width: "80%",
  },
  shareButton: {
    height: 40,
    width: 65,
  },
});
