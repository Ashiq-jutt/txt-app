import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { FlatList, View } from "react-native";
import { useDispatch } from "react-redux";
import {
  AppHeader,
  ChatBubble,
  ChatFooter,
  MediumText,
  MoreContentModal,
  ScreenWrapper,
} from "~components";
import { AppColors } from "~utils";
import {
  chatData,
  chatModalData,
  messageAndContactModalData,
} from "~utils/dummyData";
import styles from "./styles";

type props = NativeStackScreenProps<any>;
const Chat = ({ navigation, route }: props) => {
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
      <View style={styles.mainContainer}>
        <FlatList
          data={chatData}
          renderItem={({ item, index }) => (
            <View>
              {index === 3 && (
                <MediumText
                  textStyles={styles.text}
                  color={AppColors.inputFieldPlaceHolderColor}
                >
                  Just Now
                </MediumText>
              )}
              <ChatBubble
                key={index}
                time={item?.time}
                message={item?.message}
                showProfile={item?.id === 1}
                alignSelf={item?.id === 1 ? "flex-start" : "flex-end"}
                bubbleBGColor={
                  item?.id === 1
                    ? AppColors.bubbleLightGrey
                    : AppColors.bubbleDarkGrey
                }
                textColor={item?.id === 1 ? AppColors.black : AppColors.white}
              />
            </View>
          )}
        />
      </View>
      <MoreContentModal
        top={25}
        right={1}
        isVisible={isModalVisible}
        onClose={toggleModal}
        data={chatModalData}
      />
    </ScreenWrapper>
  );
};

export default Chat;
