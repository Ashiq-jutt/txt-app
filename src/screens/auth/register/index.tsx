import React, { useRef, useState } from "react";
import { Image, TextInput, View } from "react-native";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { setIsLoggedIn } from "~redux/slices/user";
import { Icons } from "~assets";
import Feather from 'react-native-vector-icons/Feather';

import {
  AppHeader,
  Button,
  LargeText,
  ScreenWrapper,
  SmallText,
  Spacer,
  TxtHeader,
} from "~components";
import styles from "./styles";
import { AppColors } from "~utils";
import { height, width } from "~utils/dimensions";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputField } from "~components/input";
import AppFonts from "~utils/app-fonts";
import { useNavigation } from "@react-navigation/native";
import { SignUpFormValidation } from "../login/validation";
import ScreenNames from "~routes/routes";
import { EyeOpen } from "~assets/SVG";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

interface FormData {
  email: string;
  password: string;
}
type props = NativeStackScreenProps<any>;
export default function Register({ navigation, route }: props) {
  const dispatch = useDispatch();
  const emailRef = useRef<TextInput | null>(null);
  const phoneRef = useRef<TextInput | null>(null);
  const passwordRef = useRef<TextInput | null>(null);
  const confirmPasswordRef = useRef<TextInput | null>(null);

  const [secure, setSecure] = useState(true);
  const [secureOne, setSecureOne] = useState(true);

  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<FormData>({
    mode: "all",
    resolver: yupResolver(SignUpFormValidation),
  });

  const loginHandler = async () => {
    dispatch(setIsLoggedIn(true));
  };

  return (
    <ScreenWrapper
      statusBarColor={AppColors.white}
      barStyle="dark-content"
      backgroundColor={AppColors.white}
      scrollEnabled
      headerUnScrollable={() => (
        <AppHeader onPressIcon={() => navigation.goBack()} />
      )}
    >
      <View style={styles.mainViewContainer}>
        <View style={styles.mainText}>
          <LargeText
            textStyles={styles.helloText}
            fontFamily={AppFonts.SFProTextMedium}
            size={8}
          >
            Hello! Register to get started
          </LargeText>
        </View>
        <Spacer vertical={8} />
        <InputField
          control={control}
          name="fullName"
          onSubmit={() => emailRef?.current?.focus()}
          keytype="next"
          label=""
          placeholder="Full Name"
          error={errors.fullName}
        />
        <InputField
          ref={emailRef}
          onSubmit={() => phoneRef?.current?.focus()}
          label=""
          control={control}
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          error={errors.email}
        />
        <InputField
          ref={phoneRef}
          onSubmit={() => passwordRef?.current?.focus()}
          label=""
          maxLength={11}
          control={control}
          name="phone"
          keyboardType="numeric"
          placeholder="Number"
          error={errors.phone}
        />
        <InputField
          ref={passwordRef}
          onSubmit={() => confirmPasswordRef?.current?.focus()}
          label=""
          control={control}
          name="password"
          secureTextEntry={secure}
          placeholder="Password"
          error={errors.password}
          icon={secure ? <EyeOpen /> : <EyeOpen />}
          onLeftIconPress={() => {
            setSecure(!secure);
          }}
        />
        <InputField
          ref={confirmPasswordRef}
          label=""
          control={control}
          name="confirmPassword"
          secureTextEntry={secureOne}
          placeholder="Confirm Password"
          error={errors.confirmPassword}
          icon={secureOne ? <EyeOpen /> : <EyeOpen />}
          onLeftIconPress={() => {
            setSecureOne(!secureOne);
          }}
        />

        <Spacer vertical={height(4.25)} />
        <Button
          disabled={!isValid}
          withShadow
          onPress={() => {
            alert("Your account has been registred successfully!"),
              navigation.navigate(ScreenNames.OTPSCREEN, { forgot: false });
          }}
        >
          Register
        </Button>
        <View style={styles.bottomText}>
          <SmallText fontFamily={AppFonts.SFProTextRegular}>
            Already have an account?
          </SmallText>
          <SmallText
            fontFamily={AppFonts.SFProTextRegular}
            onPress={() => navigation.navigate(ScreenNames.LOGIN)}
            color={AppColors.txtOrange}
          >
            {" "}
            Login Now
          </SmallText>
        </View>
      </View>
    </ScreenWrapper>
  );
}
