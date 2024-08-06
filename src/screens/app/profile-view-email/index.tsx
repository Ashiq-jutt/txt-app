import React, { useRef, useState } from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useForm } from "react-hook-form";
import { Image, TextInput, TouchableOpacity, View } from "react-native";
import { Icons } from "~assets";
import { EyeOpen } from "~assets/SVG";
import {
  AppHeader,
  Button,
  ScreenWrapper,
  SmallText,
  Spacer,
} from "~components";
import { InputField } from "~components/input";
import ScreenNames from "~routes/routes";
import { AppColors } from "~utils";
import AppFonts from "~utils/app-fonts";
import { activeOpacity } from "~utils/constant";
import { height } from "~utils/dimensions";
import styles from "./styles";
import { ResetFormValidation } from "./validation";
import { setIsLoggedIn } from "~redux/slices/user";
import { useDispatch } from "react-redux";
type props = NativeStackScreenProps<any>;

export default function ProfileViewEmail({ navigation, route }: props) {
  const dispatch = useDispatch();
  const item = route?.params?.item;
  const [secure, setSecure] = useState(true);
  const [secureOne, setSecureOne] = useState(true);
  const [secureTwo, setSecureTwo] = useState(true);
  const changePasswordRef = useRef<TextInput | null>(null);
  const passwordRef = useRef<TextInput | null>(null);
  const confirmPasswordRef = useRef<TextInput | null>(null);

  const hanleLogoutPress = () => {
    dispatch(setIsLoggedIn(false));
  };
  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<FormData>({
    mode: "all",
    resolver: yupResolver(ResetFormValidation),
  });

  return (
    <ScreenWrapper
      statusBarColor={AppColors.white}
      barStyle="dark-content"
      scrollEnabled
      backgroundColor={AppColors.white}
      headerUnScrollable={() => (
        <AppHeader
          title=""
          onPressIcon={() => navigation.goBack()}
          icons
          editIconPress={() => navigation.navigate(ScreenNames.EDITEMAIL)}
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
          <SmallText textStyles={styles.namestyles}>{item.name}</SmallText>
          <SmallText textStyles={styles.numberStyle}>{item.email}</SmallText>
        </View>
        <Spacer vertical={height(2)} />
        <InputField
          textFieldContainer={styles.textFieldContainerStyle}
          errorStyle={styles.errorStyle}
          ref={changePasswordRef}
          label=""
          control={control}
          name="changePassword"
          secureTextEntry={secure}
          placeholder="Current password"
          error={errors.changePassword}
          icon={secure ? <EyeOpen /> : <EyeOpen />}
          onLeftIconPress={() => {
            setSecure(!secure);
          }}
        />
        <InputField
          textFieldContainer={styles.textFieldContainerStyle}
          errorStyle={styles.errorStyle}
          ref={passwordRef}
          label=""
          control={control}
          name="password"
          secureTextEntry={secureOne}
          placeholder="New password"
          error={errors.password}
          icon={secureOne ? <EyeOpen /> : <EyeOpen />}
          onLeftIconPress={() => {
            setSecureOne(!secureOne);
          }}
        />
        <InputField
          textFieldContainer={styles.textFieldContainerStyle}
          errorStyle={styles.errorStyle}
          ref={confirmPasswordRef}
          label=""
          control={control}
          name="confirmPassword"
          secureTextEntry={secureTwo}
          placeholder="Confirm Password"
          error={errors.confirmPassword}
          icon={secureTwo ? <EyeOpen /> : <EyeOpen />}
          onLeftIconPress={() => {
            setSecureTwo(!secureTwo);
          }}
        />
        <Spacer vertical={15} />
        <Button textStyle={styles.btnTextStyle}>Change Password</Button>
        <TouchableOpacity onPress={hanleLogoutPress} style={styles.logoutBtn}>
          <SmallText
            fontFamily={AppFonts.SFProTextRegular}
            color={AppColors.red}
          >
            Log Out
          </SmallText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deletAccountBtn}>
          <SmallText
            fontFamily={AppFonts.SFProTextRegular}
            color={AppColors.red}
          >
            Delete Account
          </SmallText>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
}
