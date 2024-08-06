import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { FlatList, View } from "react-native";
import { useDispatch } from "react-redux";
import {
  Button,
  MoreContentModal,
  QuickSelectHeder,
  ScreenWrapper,
  SearchBar,
  SelectItedCard,
} from "~components";
import ScreenNames from "~routes/routes";
import {
  messageAndContactModalData,
  messagesDummyData,
} from "~utils/dummyData";
import styles from "./styles";
type props = NativeStackScreenProps<any>;

const SelectBroadcastNumber = ({ navigation, route }: props) => {
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
        onLongPress={() => navigation.navigate(ScreenNames.CHAT)}
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
            <Button onPress={() => navigation.navigate(ScreenNames.BROADCAST)}>
              Continue
            </Button>
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
        right={1}
        isVisible={isModalVisible}
        onClose={toggleModal}
        data={messageAndContactModalData}
      />
    </ScreenWrapper>
  );
};

export default SelectBroadcastNumber;
