import React, { useLayoutEffect, useState } from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import { SwipeListView, SwipeRow } from "react-native-swipe-list-view";
import AntDesign from "react-native-vector-icons/AntDesign";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useDispatch } from "react-redux";
import { AddContact, MuteIcon } from "~assets/SVG";
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
  contactsDummyData,
  messageAndContactModalData,
} from "~utils/dummyData";
import styles from "./styles";

type Props = NativeStackScreenProps<any>;

interface MessageData {
  number: number;
  message: string;
  count: number;
  date: string;
  key: string;
}

const Contacts: React.FC<Props> = ({ navigation, route }: Props) => {
  const dispatch = useDispatch();
  const [isModalVisible, setModalVisible] = useState(false);
  const [search, setSearch] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [character, setCharacter] = useState("A");
  const [openRowKey, setOpenRowKey] = useState<string | null>(null);
  const [messagesData, setMessagesData] = useState<MessageData[]>([]);
  const alphaBet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  useLayoutEffect(() => {
    dispatch(setAppLoader(true));
    const dataWithUniqueKeys = contactsDummyData.map((item, index) => ({
      ...item,
      key: String(index),
    }));
    setMessagesData(dataWithUniqueKeys);
    dispatch(setAppLoader(false));
  }, []);

  const onRowOpen = (
    rowKey: string,
    rowMap: { [key: string]: SwipeRow<MessageData> }
  ) => {
    setOpenRowKey(rowKey);
  };

  const onRowClose = (
    rowKey: string,
    rowMap: { [key: string]: SwipeRow<MessageData> }
  ) => {
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
        title={item?.number.toString()}
        description={item?.message}
        count={item?.count}
        onPress={() =>
          navigation.navigate(ScreenNames.VIEWCONTACT, { item: item })
        }
        date={item?.date}
        isRightCount={openRowKey === item?.key ? true : false}
        containerStyle={
          openRowKey === item?.key
            ? { backgroundColor: AppColors.spaceColor }
            : {}
        }
      />
    );
  };

  const renderHiddenItem = (
    data: { item: MessageData; index: number },
    rowMap: { [key: string]: SwipeRow<MessageData> }
  ) => (
    <View style={styles.rowBack}>
      <TouchableOpacity
        style={[
          styles.hiddenIconView,
          CommonStyles.marginLeft_2,
          { backgroundColor: AppColors.txtOrange },
        ]}
        onPress={() => {
          rowMap[data.item.key].closeRow();
        }}
      >
        <MuteIcon />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.hiddenIconView, CommonStyles.marginLeft_2]}
        onPress={() => {
          handleDeleteButtonClick(data.item.key);
          rowMap[data.item.key].closeRow();
        }}
      >
        <AntDesign name={"delete"} size={width(4)} color={AppColors.white} />
      </TouchableOpacity>
    </View>
  );

  const renderIMEIItem = ({ item, index }: { item: any; index: number }) => (
    <TouchableOpacity
      activeOpacity={activeOpacity}
      onPress={() => setCharacter(item)}
      style={styles.characterListStyle}
    >
      <SmallText
        textStyles={[
          styles.alphaBetStyle,
          {
            color:
              character === item
                ? AppColors.black
                : AppColors.otpPlaceHolderColor,
            fontSize: character === item ? width(3) : width(2.5),
          },
        ]}
      >
        {item}
      </SmallText>
    </TouchableOpacity>
  );

  return (
    <>
      <ScreenWrapper
        statusBarColor={AppColors.white}
        barStyle="dark-content"
        backgroundColor={AppColors.white}
        scrollEnabled
        headerUnScrollable={() => (
          <>
            {!search ? (
              <MessagesHeader
                moreIconPress={() => setModalVisible(true)}
                searchIconPress={() => setSearch(true)}
                editIconPress={() =>
                  navigation.navigate(ScreenNames.CONTACTQUICKSELECT)
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
        {!search && (
          <SmallText textStyles={styles.characterStyle}>{character}</SmallText>
        )}
        {contactsDummyData.length > 0 && (
          <View style={styles.messageAndCharacterStyle}>
            {contactsDummyData.length > 0 && (
              <SwipeListView
                scrollEnabled={false}
                data={messagesData}
                renderItem={chatCardRenderer}
                renderHiddenItem={renderHiddenItem}
                stopRightSwipe={-width(26)}
                stopLeftSwipe={0.1}
                rightOpenValue={-width(26)}
                previewOpenValue={-40}
                previewOpenDelay={3000}
                closeOnScroll={true}
                closeOnRowPress={true}
                onRowOpen={onRowOpen}
                onRowClose={onRowClose}
              />
            )}
            {!search && (
              <FlatList
                data={alphaBet.split("")}
                scrollEnabled={false}
                keyExtractor={(_, index) => index.toString()}
                renderItem={renderIMEIItem}
              />
            )}
          </View>
        )}
      </ScreenWrapper>
      {!search && (
        <TouchableOpacity
          onPress={() => navigation.navigate(ScreenNames.NEWCONTACT)}
          activeOpacity={activeOpacity}
          style={styles.addContactButton}
        >
          <AddContact />
        </TouchableOpacity>
      )}
      <MoreContentModal
        isVisible={isModalVisible}
        onClose={toggleModal}
        data={messageAndContactModalData}
      />
    </>
  );
};

export default Contacts;
