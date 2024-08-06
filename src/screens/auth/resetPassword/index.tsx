import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { TextInput, View } from "react-native";
import { useDispatch } from "react-redux";

import { yupResolver } from "@hookform/resolvers/yup";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { EyeOpen } from "~assets/SVG";
import {
  AppHeader,
  Button,
  LargeText,
  ScreenWrapper,
  SmallText,
  Spacer,
} from "~components";
import { InputField } from "~components/input";
import ScreenNames from "~routes/routes";
import { AppColors } from "~utils";
import AppFonts from "~utils/app-fonts";
import { height } from "~utils/dimensions";
import { ResetFormValidation } from "../login/validation";
import styles from "./styles";

interface FormData {
  email: string;
  password: string;
}
type props = NativeStackScreenProps<any>;
export default function ResetPassword({ navigation, route }: props) {
  const dispatch = useDispatch();
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
    resolver: yupResolver(ResetFormValidation),
  });

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
            Reset Passowrd
          </LargeText>
        </View>
        <SmallText textStyles={styles.descriptionText}>
          Set the new password for your account so you can login and access all
          the features.
        </SmallText>
        <Spacer vertical={height(2)} />

        <InputField
          ref={passwordRef}
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

        <Spacer vertical={height(5)} />
        <Button
          disabled={!isValid}
          withShadow
          onPress={() => {
            navigation.navigate(ScreenNames.LOGIN),
              alert("Your password has been reset successfully!");
          }}
        >
          Reset Password
        </Button>
      </View>
    </ScreenWrapper>
  );
}
