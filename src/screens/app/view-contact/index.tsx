import React, { useState } from "react";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Image, TouchableOpacity, View } from "react-native";
import { Icons } from "~assets";
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
import { activeOpacity } from "~utils/constant";
import { height } from "~utils/dimensions";
import styles from "./styles";
type props = NativeStackScreenProps<any>;


export default function NewContact({ navigation, route }: props) {
  const item = route?.params?.item;
  const [block, setBlock] = useState(true);
  const [notification, SetNotification] = useState(false);

  return (
    <ScreenWrapper
      statusBarColor={AppColors.white}
      barStyle="dark-content"
      backgroundColor={AppColors.white}
      headerUnScrollable={() => (
        <AppHeader
          title=""
          onPressIcon={() => navigation.goBack()}
          icons
          editIconPress={() => navigation.navigate(ScreenNames.EDITCONTACT)}
          chatIconPress={() => navigation.navigate(ScreenNames.CHAT)}
        />
      )}
    >
      <View style={styles.mainViewContainer}>
        <View style={styles.profileContainer}>
          <TouchableOpacity
            activeOpacity={activeOpacity}
            style={styles.addContactButton}
          >
            <Image source={Icons.profilePic} />
          </TouchableOpacity>
          <SmallText textStyles={styles.namestyles}>
            {item?.name ?? "Darlene Steward"}
          </SmallText>
          <SmallText textStyles={styles.numberStyle}>
            {item?.number ?? "(907) 555-0101"}
          </SmallText>
        </View>
        <Spacer vertical={height(3.75)} />
        <IMEIComp title={"Change number where save"} hight={height(1)} />
        <Spacer vertical={height(3.75)} />

        <IMEIComp
          title={"Mute notifications"}
          discription2={
            "Call and texts will not show up in your phone’s notifications."
          }
          hight={8}
          switchFlag={true}
          enalbe={notification}
          onPress={() => SetNotification(!notification)}
        />
        <Spacer vertical={height(3.75)} />
        <IMEIComp
          title={"Block Contact"}
          switchFlag={true}
          hight={7}
          enalbe={block}
          onPress={() => setBlock(!block)}
        />
        <Spacer vertical={height(3.75)} />
        <IMEIComp
          title={"Notes"}
          discription2={
            "Lorem ipsum dolor sit amet consectetur. Condimentum non malesuada elit nunc in erat nec ultrices dolor."
          }
          hight={9}
          left={false}
        />

        <TouchableOpacity activeOpacity={0.7} style={styles.UnbindBtn}>
          <SmallText
            fontFamily={AppFonts.SFProTextRegular}
            color={AppColors.red}
          >
            Delete Contact
          </SmallText>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
}
