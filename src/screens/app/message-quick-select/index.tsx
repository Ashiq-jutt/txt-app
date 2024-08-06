import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { useDispatch } from "react-redux";
import { Archive, ChatIconTwo, CrossIcon2, DeleteIcon } from "~assets/SVG";
import {
  MoreContentModal,
  QuickSelectHeder,
  ScreenWrapper,
  SearchBar,
  SelectItedCard,
  SmallText,
} from "~components";
import ScreenNames from "~routes/routes";
import { AppColors } from "~utils";
import { activeOpacity } from "~utils/constant";
import { width } from "~utils/dimensions";
import {
  messageAndContactModalData,
  messagesDummyData,
} from "~utils/dummyData";
import styles from "./styles";
type props = NativeStackScreenProps<any>;
interface MessageData {
  number: number;
  message: string;
  count: number;
  date: string;
  key: string;
}

const MessageQuickSelect = ({ navigation, route }: props) => {
  const dispatch = useDispatch();
  const [isModalVisible, setModalVisible] = React.useState(false);
  const [search, setSearch] = React.useState(false);
  const [chat, setChat] = React.useState(true);
  const [searchText, setSearchText] = useState("");

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const chatCardRenderer = ({ item }: { item: any }) => {
    return (
      <SelectItedCard
        withDate
        title={item?.number.toString()}
        description={item?.message}
        date={item?.date}
      />
    );
  };

  return (
    <ScreenWrapper
      scrollEnabled={false}
      headerUnScrollable={() => (
        <>
          {search ? (
            <View style={styles.searchHeaderStyle}>
              <SearchBar
                onRightIconPress={() => setSearch(false)}
                onChhangeText={(txt) => setSearchText(txt)}
              />
              <View style={styles.headerBottomLne} />
            </View>
          ) : (
            <QuickSelectHeder
              // moreIconPress={() => setModalVisible(true)}
              searchIconPress={() => setSearch(true)}
            />
          )}
        </>
      )}
      footerUnScrollable={() => (
        <>
          <View style={styles.footerContainer}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.footerIconstyles}
            >
              <DeleteIcon />
              <SmallText>Delete</SmallText>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.footerIconstyles}
            >
              <Archive />
              <SmallText>Send to Archive</SmallText>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(ScreenNames.SELECTBROADCASTNUMBER)
              }
              activeOpacity={0.7}
              style={styles.footerIconstyles}
            >
              <Feather
                name="users"
                color={AppColors.darkGray}
                size={width(5)}
              />
              <SmallText>Create Broadcast</SmallText>
            </TouchableOpacity>
          </View>
        </>
      )}
    >
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        data={messagesDummyData}
        renderItem={chatCardRenderer}
      />

      {!search && (
        <>
          <View style={styles.actionView}>
            {!chat && (
              <View style={styles.iconTextStyle}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => {
                    setChat(!chat);
                    navigation.navigate(ScreenNames.CHAT);
                  }}
                  style={styles.iconAndTextContainer}
                >
                  <View style={styles.textViewStyle}>
                    <SmallText textStyles={styles.textStyle}>
                      Create single Chat
                    </SmallText>
                  </View>
                  <View style={styles.iconStyle}>
                    <Feather
                      name="user"
                      color={AppColors.darkGray}
                      size={width(5)}
                    />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setChat(!chat);
                    navigation.navigate(ScreenNames.SELECTBROADCASTNUMBER);
                  }}
                  activeOpacity={0.7}
                  style={styles.iconAndTextContainer}
                >
                  <View style={styles.textViewStyle}>
                    <SmallText textStyles={styles.textStyle}>
                      Create broadcast
                    </SmallText>
                  </View>
                  <View style={styles.iconStyle}>
                    <Feather
                      name="users"
                      color={AppColors.darkGray}
                      size={width(5)}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            )}
          </View>

          <TouchableOpacity
            onPress={() => setChat(!chat)}
            style={styles.actionButton}
            activeOpacity={activeOpacity}
          >
            {chat ? <ChatIconTwo /> : <CrossIcon2 />}
          </TouchableOpacity>
        </>
      )}
      <MoreContentModal
        right={0}
        top={20}
        isVisible={isModalVisible}
        onClose={toggleModal}
        data={messageAndContactModalData}
      />
    </ScreenWrapper>
  );
};

export default MessageQuickSelect;
