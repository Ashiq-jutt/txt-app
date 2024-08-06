import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { FlatList, View } from "react-native";
import { AppHeader, IMEIComp, ScreenWrapper, Spacer } from "~components";
import { AppColors } from "~utils";
import { height } from "~utils/dimensions";
import { autoReplyData } from "~utils/dummyData";
import styles from "./styles";
type props = NativeStackScreenProps<any>;


export default function AutoReply({ navigation, route }: props) {
  const [flag, setFlag] = useState(false);

  const renderIMEIItem = ({ item, index }: { item: any; index: number }) => (
    <>
      <IMEIComp
        key={index}
        title={item.name}
        discription={item.des}
        discription2={item.des2}
        right={item.right}
      />
      <View style={styles.line}></View>
    </>
  );
  return (
    <ScreenWrapper
      statusBarColor={AppColors.white}
      barStyle="dark-content"
      backgroundColor={AppColors.white}
      headerUnScrollable={() => (
        <AppHeader
          title="Auto-Reply to Texts"
          onPressIcon={() => navigation.goBack()}
        />
      )}
    >
      <View style={styles.mainViewContainer}>
        <Spacer vertical={height(3.37)} />
        <IMEIComp
          title={"Auto-Reply to Texts"}
          switchFlag
          onPress={() => setFlag(!flag)}
          enalbe={flag}
        />
        <Spacer vertical={height(1.3)} />

        <View style={styles.imei}>
          <FlatList
            data={autoReplyData}
            keyExtractor={(_, index) => index.toString()}
            renderItem={renderIMEIItem}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
}
