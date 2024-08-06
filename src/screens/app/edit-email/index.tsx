import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { Image, TextInput, TouchableOpacity, View } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { Icons } from "~assets";

import { yupResolver } from "@hookform/resolvers/yup";
import { Camera } from "~assets/SVG";
import { AppHeader, Button, ScreenWrapper, Spacer } from "~components";
import { InputField } from "~components/input";
import { AppColors } from "~utils";
import { activeOpacity } from "~utils/constant";
import { width } from "~utils/dimensions";
import { EditEmailFormValidation } from "../edit-contact/validation";
import styles from "./styles";
type props = NativeStackScreenProps<any>;
interface FormData {
  email: string;
  password: string;
}

export default function EditEmail({ navigation, route }: props) {
  const nameRef = useRef<TextInput | null>(null);
  const emailRef = useRef<TextInput | null>(null);
  const phoneRef = useRef<TextInput | null>(null);
  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<FormData>({
    mode: "all",
    resolver: yupResolver(EditEmailFormValidation),
  });

  return (
    <ScreenWrapper
      statusBarColor={AppColors.white}
      barStyle="dark-content"
      scrollEnabled
      backgroundColor={AppColors.spaceColor}
      headerUnScrollable={() => (
        <AppHeader
          title="Edit Profile"
          onPressIcon={() => navigation.goBack()}
        />
      )}
    >
      <View style={styles.editContainer}>
        <Image source={Icons.profilePic} />
        <TouchableOpacity
          activeOpacity={activeOpacity}
          style={styles.addContactButton}
        >
          <Camera />
          <View style={styles.editIcon}>
            <Feather name={"edit"} size={width(5)} color={AppColors.white} />
          </View>
        </TouchableOpacity>
      </View>

      <InputField
        textFieldContainer={styles.textFieldContainerStyle}
        errorStyle={styles.errorStyle}
        ref={nameRef}
        control={control}
        name="name"
        onSubmit={() => emailRef?.current?.focus()}
        keytype="next"
        label=""
        placeholder="Darlene Steward"
        error={errors.name}
      />
      <InputField
        textFieldContainer={styles.textFieldContainerStyle}
        errorStyle={styles.errorStyle}
        ref={emailRef}
        control={control}
        name="email"
        onSubmit={() => phoneRef?.current?.focus()}
        keyboardType="email-address"
        label=""
        placeholder="darlenesteward2322@gmail.com"
        error={errors.email}
      />
      <InputField
        textFieldContainer={styles.textFieldContainerStyle}
        errorStyle={styles.errorStyle}
        ref={phoneRef}
        control={control}
        name="phone"
        keytype="next"
        label=""
        placeholder="Number (Optional)"
        error={errors.phone}
      />

      <Spacer vertical={10} />
      <Button textStyle={styles.btnTextStyle}>Save Changes</Button>
    </ScreenWrapper>
  );
}
