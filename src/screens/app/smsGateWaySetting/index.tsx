import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { FlatList, Image, TouchableOpacity, View } from "react-native";
import { Icons } from "~assets";
import {
  AppHeader,
  IMEIComp,
  LargeText,
  ScreenWrapper,
  SimComp,
  SmallText,
  Spacer,
} from "~components";
import ScreenNames from "~routes/routes";
import { AppColors } from "~utils";
import AppFonts from "~utils/app-fonts";
import { height } from "~utils/dimensions";
import { simData } from "~utils/dummyData";
import styles from "./styles";
type props = NativeStackScreenProps<any>;
interface FormData {
  email: string;
  password: string;
}

export default function SMSGateWay({ navigation, route }: props) {
  const IMEIData = [
    { name: "Device Name", num: "C1-CN" },
    { name: "Device IMEI", num: "864055040596230" },
    { name: "Restart Device", num: "" },
    { name: "Firmware Update", num: "V1.1.001.005.201010" },
  ];

  const renderSimItem = ({ item, index }: { item: any; index: number }) => (
    <>
      <View style={styles.line}></View>
      <SimComp
        key={index}
        image={item.Image}
        enalbe={item.enable}
        title={item.text}
      />
    </>
  );

  const renderIMEIItem = ({ item, index }: { item: any; index: number }) => (
    <>
      <IMEIComp key={index} title={item.name} discription={item.num} />
      <View style={styles.line}></View>
    </>
  );
  return (
    <ScreenWrapper
      statusBarColor={AppColors.white}
      barStyle="dark-content"
      backgroundColor={AppColors.white}
      scrollEnabled
      headerUnScrollable={() => (
        <AppHeader
          title="SMS Gateway Settings"
          onPressIcon={() => navigation.goBack()}
        />
      )}
    >
      <View style={styles.mainViewContainer}>
        <Spacer vertical={height(0.5)} />
        <View style={styles.simConfig}>
          <View style={styles.txtCon}>
            <LargeText>SIM Configuration</LargeText>
            <Spacer vertical={height(2)} />
            <SmallText color={AppColors.inputFieldPlaceHolderColor} size={3.7}>
              Maximum 2 SIM cards online simultaneously
            </SmallText>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate(ScreenNames.SIMMANAGEMENT)}
            style={styles.imgCon}
          >
            <Image source={Icons.forwardArrow} style={styles.img} />
          </TouchableOpacity>
        </View>
        <Spacer vertical={height(1.3)} />

        <FlatList
          scrollEnabled={false}
          data={simData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderSimItem}
        />
        <View style={styles.imei}>
          <FlatList
            scrollEnabled={false}
            data={IMEIData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderIMEIItem}
          />
          <TouchableOpacity activeOpacity={0.6} style={styles.UnbindBtn}>
            <SmallText
              fontFamily={AppFonts.SFProTextRegular}
              color={AppColors.red}
            >
              Unbind Device
            </SmallText>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  );
}
