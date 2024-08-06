import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { View } from "react-native";
import { useDispatch } from "react-redux";
import {
  AppHeader,
  ChatFooter,
  MoreContentModal,
  ScreenWrapper,
} from "~components";
import {
  broadcatModalData,
  messageAndContactModalData,
} from "~utils/dummyData";
import styles from "./styles";

type props = NativeStackScreenProps<any>;
const BroadCast = ({ navigation, route }: props) => {
  const [showAllSim, setShowAllSim] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <ScreenWrapper
      scrollEnabled={false}
      footerUnScrollable={() => (
        <ChatFooter
          onPressIcon={() => setShowAllSim(!showAllSim)}
          containerStyle={styles.footerContainer}
          showAllSim={showAllSim}
        />
      )}
      headerUnScrollable={() => (
        <AppHeader
          onPressThreeDots={() => setModalVisible(true)}
          onPressIcon={() => navigation.goBack()}
          containerStyle={styles.header}
          title="(515) 442-5448"
        />
      )}
    >
      <View style={styles.mainContainer}></View>
      <MoreContentModal
        top={25}
        right={1}
        isVisible={isModalVisible}
        onClose={toggleModal}
        data={broadcatModalData}
      />
    </ScreenWrapper>
  );
};

export default BroadCast;
