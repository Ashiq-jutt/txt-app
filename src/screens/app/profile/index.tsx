import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { Archive, BlackList, Setting, Signal, SimCard } from "~assets/SVG";
import {
  LargeText,
  ProfileHeader,
  ScreenWrapper,
  SmallText,
  Spacer,
} from "~components";
import ScreenNames from "~routes/routes";
import { AppColors } from "~utils";
import { activeOpacity } from "~utils/constant";
import { height, width } from "~utils/dimensions";
import { signalData } from "~utils/dummyData";
import styles from "./styles";
type props = NativeStackScreenProps<any>;


export default function Profile({ navigation, route }: props) {
  const item = { name: "Darlene Steward", email: "dar*********@gmail.com" };

  const renderSignalItem = ({ item }: { item: any }) => (
    <Signal number={item.num} />
  );
  const renderSimCard = ({ item }: { item: any }) => (
    <SimCard
      value={item.num}
      size={10}
      isActive={item.num < 3 ? true : false}
    />
  );
  return (
    <ScreenWrapper
      statusBarColor={AppColors.white}
      barStyle="dark-content"
      backgroundColor={AppColors.spaceColor}
      scrollEnabled
      headerUnScrollable={() => (
        <ProfileHeader
          name={"Darlene Steward"}
          email={"dar*********@gmail.com"}
          editIconPress={() => navigation.navigate(ScreenNames.EDITEMAIL)}
          onPress={() =>
            navigation.navigate(ScreenNames.PROFILEVIEWEMAIL, { item: item })
          }
        />
      )}
    >
      <View style={styles.mainViewContainer}>
        <View style={styles.archiveCOntainer}>
          <TouchableOpacity
            activeOpacity={activeOpacity}
            style={styles.archive}
          >
            <Archive />
            <SmallText textStyles={styles.achiveText}>Archive</SmallText>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={activeOpacity}
            style={styles.archive}
          >
            <BlackList />
            <SmallText textStyles={styles.achiveText}>Blacklist</SmallText>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate(ScreenNames.SETTINGS)}
            activeOpacity={activeOpacity}
            style={styles.archive}
          >
            <Setting />
            <SmallText textStyles={styles.achiveText}>Settings</SmallText>
          </TouchableOpacity>
        </View>
        <Spacer vertical={height(3.37)} />
        <LargeText textStyles={styles.deviceText}>My Device</LargeText>
        <Spacer vertical={height(1)} />
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate(ScreenNames.SMSGATEWAY)}
          style={styles.signalCOntainer}
        >
          <FlatList
            horizontal
            contentContainerStyle={styles.signalGap}
            data={signalData}
            keyExtractor={(_, index) => index.toString()}
            renderItem={renderSignalItem}
          />

          <View style={styles.simGatewayStyle}>
            <LargeText textStyles={styles.gatwayText}>SIM Getway</LargeText>
            <View style={styles.rightStyle}>
              <View style={styles.onlineStyle}>
                <View style={styles.dotStyle} />
                <LargeText textStyles={styles.onlineText}>Online</LargeText>
              </View>
              <Feather
                name={"chevron-right"}
                size={width(5)}
                color={AppColors.otpPlaceHolderColor}
              />
            </View>
          </View>
        </TouchableOpacity>
        <Spacer vertical={height(3.3)} />
        <LargeText textStyles={styles.deviceText}>SIM Cards</LargeText>
        <Spacer vertical={height(1)} />
        <View style={styles.simCardContainer}>
          <FlatList
            numColumns={4}
            scrollEnabled={false}
            columnWrapperStyle={styles.simColumnGap}
            contentContainerStyle={styles.simGap}
            data={signalData}
            keyExtractor={(_, index) => index.toString()}
            renderItem={renderSimCard}
          />
          <View style={styles.absoluteLine} />
        </View>
      </View>
    </ScreenWrapper>
  );
}
