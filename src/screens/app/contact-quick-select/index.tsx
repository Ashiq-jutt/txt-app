import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import { DeleteIcon, MuteIcon } from "~assets/SVG";
import {
  MoreContentModal,
  QuickSelectHeder,
  ScreenWrapper,
  SearchBar,
  SelectItedCard,
  SmallText,
} from "~components";
import { AppColors } from "~utils";
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

const ContactQuickSelect = ({ navigation, route }: props) => {
  const dispatch = useDispatch();
  const [isModalVisible, setModalVisible] = React.useState(false);
  const [search, setSearch] = React.useState(false);
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
              moreIconPress={() => setModalVisible(true)}
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
              <MuteIcon color={AppColors.black} />
              <SmallText>Mute</SmallText>
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

export default ContactQuickSelect;
