import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Image, View } from "react-native";
import { Icons } from "~assets";
import { Button, ScreenWrapper, Spacer } from "~components";
import ScreenNames from "~routes/routes";
import { AppColors } from "~utils";
import { height } from "~utils/dimensions";
import styles from "./styles";
type props = NativeStackScreenProps<any>;

export default function Welcome({ navigation, route }: props) {
  return (
    <ScreenWrapper
      statusBarColor={AppColors.white}
      barStyle="dark-content"
      backgroundColor={AppColors.white}
      scrollEnabled
    >
      <View style={styles.mainViewContainer}>
        <Image
          source={Icons.txtMainLogo}
          style={styles.logo}
          resizeMode="contain"
        />
        <Spacer vertical={height(35)} />
        <Button
          onPress={() => navigation.navigate(ScreenNames.LOGIN)}
          children="Login"
        />
        <Spacer vertical={height(2)} />
        <Button
          onPress={() => navigation.navigate(ScreenNames.REGISTER)}
          children="SignUp"
        />
      </View>
    </ScreenWrapper>
  );
}
