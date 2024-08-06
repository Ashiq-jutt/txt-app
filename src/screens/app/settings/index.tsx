import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { FlatList, View, TouchableOpacity } from "react-native";
import {
  AppHeader,
  IMEIComp,
  ScreenWrapper,
  SmallText,
  Spacer,
} from "~components";
import ScreenNames from "~routes/routes";
import { AppColors } from "~utils";
import AppFonts from "~utils/app-fonts";
import { height } from "~utils/dimensions";
import { SettingData } from "~utils/dummyData";
import styles from "./styles";
import { setIsLoggedIn } from "~redux/slices/user";
import { useDispatch } from "react-redux";
type props = NativeStackScreenProps<any>;

export default function SettingsScreen({ navigation, route }: props) {
  const dispatch = useDispatch();

  const hanleLogoutPress = () => {
    dispatch(setIsLoggedIn(false));
  };
  const renderIMEIItem = ({ item, index }: { item: any; index: number }) => (
    <>
      <IMEIComp
        key={index}
        title={item.name}
        discription={item.num}
        onPress={
          item.navigateTo
            ? () => navigation.navigate(ScreenNames.AUTOREPLY)
            : undefined
        }
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
        <AppHeader title="Settings" onPressIcon={() => navigation.goBack()} />
      )}
    >
      <View style={styles.mainViewContainer}>
        <Spacer vertical={height(3.37)} />
        <IMEIComp title={"Account Info"} />
        <Spacer vertical={height(0.25)} />
        <IMEIComp title={"App Security"} />
        <Spacer vertical={height(1.3)} />

        <View style={styles.imei}>
          <FlatList
            data={SettingData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderIMEIItem}
          />
        </View>
        <IMEIComp
          title={"Adjust Text Size"}
          hight={8}
          onPress={() => navigation.navigate(ScreenNames.TEXTSIZE)}
        />

        <TouchableOpacity style={styles.logoutBtn} onPress={hanleLogoutPress}>
          <SmallText
            fontFamily={AppFonts.SFProTextRegular}
            color={AppColors.red}
          >
            Log Out
          </SmallText>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
}
