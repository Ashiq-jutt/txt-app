import { yupResolver } from "@hookform/resolvers/yup";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Platform, View } from "react-native";
import { useDispatch } from "react-redux";
import {
  AppHeader,
  Button,
  LargeText,
  ScreenWrapper,
  SmallText,
  Spacer,
} from "~components";
import { setIsLoggedIn } from "~redux/slices/user";
import ScreenNames from "~routes/routes";
import { AppColors } from "~utils";
import AppFonts from "~utils/app-fonts";
import { height } from "~utils/dimensions";
import { SignUpFormValidation } from "../login/validation";
import styles from "./styles";

interface FormData {
  email: string;
  password: string;
}
type props = NativeStackScreenProps<any>;
export default function OTPScreen({ navigation, route }: props) {
  const forgot = route?.params?.forgot;
  const dispatch = useDispatch();

  const [diableds, setDisables] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<FormData>({
    mode: "all",
    resolver: yupResolver(SignUpFormValidation),
  });

  const buttonHandler = async () => {
    if (forgot) {
      navigation.navigate(ScreenNames.RESETPASSWORD);
    } else {
      dispatch(setIsLoggedIn(true));
    }
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
            Enter 4 Digits Code
          </LargeText>
        </View>
        <Spacer vertical={5} />
        <SmallText textStyles={styles.descriptionText}>
          Enter the 4 digits code that you received on your email.
        </SmallText>
        <Spacer vertical={height(2)} />

        <View style={styles.OTPCon}>
          <OTPInputView
            placeholderCharacter="0"
            placeholderTextColor={AppColors.otpPlaceHolderColor}
            autoFocusOnLoad={Platform.OS === "android" ? false : true}
            codeInputFieldStyle={styles.underlineStyleBase}
            pinCount={4}
            keyboardType="numeric"
            onCodeFilled={() => setDisables(true)}
            style={styles.otpInputStyle}
          />
        </View>

        <Spacer vertical={height(5)} />
        <Button withShadow onPress={buttonHandler}>
          {forgot ? "Continue" : "Verify"}
        </Button>

        <Spacer vertical={height(5)} />
        <View style={styles.bottomText}>
          <SmallText size={4}>If you don't receive a code!</SmallText>
          <SmallText
            size={4}
            onPress={() => {
              alert("The OTP has been sent successfully!");
            }}
            color={AppColors.red}
          >
            {" "}
            Resend
          </SmallText>
        </View>
      </View>
    </ScreenWrapper>
  );
}
