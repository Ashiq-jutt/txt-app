import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useLayoutEffect, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { RowMap, SwipeListView } from "react-native-swipe-list-view";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import { useDispatch } from "react-redux";
import { Archive, ChatIconTwo, CrossIcon2, PinIcon } from "~assets/SVG";
import {
  ChatCard,
  MessagesHeader,
  MoreContentModal,
  ScreenWrapper,
  SearchBar,
  SmallText,
} from "~components";
import { setAppLoader } from "~redux/slices/config";
import ScreenNames from "~routes/routes";
import { AppColors, CommonStyles } from "~utils";
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

const MessagesHomeScreen = ({ navigation, route }: props) => {
  const dispatch = useDispatch();
  const [openRowKey, setOpenRowKey] = useState<string | null>(null);
  const [messagesData, setMessagesData] = useState<MessageData[]>([]);
  const [isModalVisible, setModalVisible] = React.useState(false);
  const [search, setSearch] = React.useState(false);
  const [chat, setChat] = React.useState(true);
  const [searchText, setSearchText] = useState("");

  useLayoutEffect(() => {
    dispatch(setAppLoader(true));
    const dataWithUniqueKeys = messagesDummyData.map((item, index) => ({
      ...item,
      key: String(index),
    }));
    setMessagesData(dataWithUniqueKeys);
    dispatch(setAppLoader(false));
  }, []);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const onRowOpen = (rowKey: string, rowMap: RowMap<MessageData>) => {
    setOpenRowKey(rowKey);
  };
  const onRowClose = (rowKey: string, rowMap: RowMap<MessageData>) => {
    setOpenRowKey(null);
  };
  const handleDeleteButtonClick = (keyToDelete: string) => {
    const updatedData = messagesData.filter((item) => item.key !== keyToDelete);
    setMessagesData(updatedData);
  };

  const chatCardRenderer = ({ item }: { item: MessageData }) => {
    return (
      <ChatCard
        withCount
        withDate
        title={item?.number.toString()}
        description={item?.message}
        count={item?.count}
        onPress={() => navigation.navigate(ScreenNames.CHAT)}
        date={item?.date}
        isRightCount={openRowKey === item?.key ? true : false}
        containerStyle={
          openRowKey === item?.key ? { backgroundColor: "#F4F4F4" } : {}
        }
      />
    );
  };

  const renderHiddenItem = (
    data: { item: MessageData },
    rowMap: { [key: string]: SwipeListView<MessageData> }
  ) => (
    <View style={styles.rowBack}>
      <TouchableOpacity style={styles.hiddenIconView} onPress={() => {}}>
        <PinIcon />
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.hiddenIconView,
          CommonStyles.marginLeft_2,
          { backgroundColor: AppColors.green },
        ]}
        onPress={() => {}}
      >
        <Feather name={"archive"} size={width(4.5)} color={AppColors.white} />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.hiddenIconView, CommonStyles.marginLeft_2]}
        onPress={() => {
          handleDeleteButtonClick(data?.item?.key);
        }}
      >
        <AntDesign name={"delete"} size={width(4.5)} color={AppColors.white} />
      </TouchableOpacity>
    </View>
  );

  return (
    <ScreenWrapper
      scrollEnabled={false}
      headerUnScrollable={() => (
        <>
          {!search ? (
            <MessagesHeader
              moreIconPress={() => setModalVisible(true)}
              searchIconPress={() => setSearch(true)}
              editIconPress={() =>
                navigation.navigate(ScreenNames.MESSAGEQUICKSELECT)
              }
            />
          ) : (
            <View style={styles.searchHeaderStyle}>
              <SearchBar
                onRightIconPress={() => setSearch(false)}
                onChhangeText={(txt) => setSearchText(txt)}
              />
              <View style={styles.headerBottomLne} />
            </View>
          )}
        </>
      )}
    >
      {messagesData.length > 0 && (
        <SwipeListView
          showsVerticalScrollIndicator={false}
          data={messagesData}
          renderItem={chatCardRenderer}
          renderHiddenItem={renderHiddenItem}
          stopRightSwipe={-width(32)}
          stopLeftSwipe={0.1}
          rightOpenValue={-width(32)}
          previewOpenValue={-40}
          previewOpenDelay={3000}
          closeOnScroll={true}
          closeOnRowPress={true}
          onRowOpen={onRowOpen}
          onRowClose={onRowClose}
        />
      )}
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
        isVisible={isModalVisible}
        onClose={toggleModal}
        data={messageAndContactModalData}
      />
    </ScreenWrapper>
  );
};

export default MessagesHomeScreen;
