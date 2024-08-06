import { yupResolver } from "@hookform/resolvers/yup";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { TextInput, View } from "react-native";
import { useDispatch } from "react-redux";
import {
  AppHeader,
  Button,
  LargeText,
  ScreenWrapper,
  SmallText,
  Spacer,
} from "~components";
import { InputField } from "~components/input";
import { setIsLoggedIn } from "~redux/slices/user";
import ScreenNames from "~routes/routes";
import { AppColors } from "~utils";
import AppFonts from "~utils/app-fonts";
import { height } from "~utils/dimensions";
import { ForgotFormValidation } from "../login/validation";
import styles from "./styles";

interface FormData {
  email: string;
  password: string;
}
type props = NativeStackScreenProps<any>;
export default function ForgotPassword({ navigation, route }: props) {
  const dispatch = useDispatch();
  const passwordRef = useRef<TextInput | null>(null);

  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<FormData>({
    mode: "all",
    resolver: yupResolver(ForgotFormValidation),
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
          <LargeText fontFamily={AppFonts.SFProTextMedium} size={7}>
            Forgot Password?
          </LargeText>
        </View>
        <Spacer vertical={3} />
        <SmallText textStyles={styles.descriptionText}>
          Enter your email/number for the verification proccess, we will send 4
          digits code to your email/number.
        </SmallText>
        <Spacer vertical={height(2)} />
        <InputField
          control={control}
          name="email"
          keyboardType="email-address"
          onSubmit={() => passwordRef?.current?.focus()}
          keytype="next"
          label=""
          placeholder="Enter your email or number"
          error={errors.email}
        />

        <Spacer vertical={height(5)} />
        <Button
          disabled={!isValid}
          withShadow
          onPress={() =>
            navigation.navigate(ScreenNames.OTPSCREEN, { forgot: true })
          }
        >
          Continue
        </Button>
      </View>
    </ScreenWrapper>
  );
}
