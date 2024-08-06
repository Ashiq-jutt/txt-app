import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { TextInput, TouchableOpacity } from "react-native";
import { Camera, DownArrow } from "~assets/SVG";
import { AppHeader, Button, ScreenWrapper, Spacer } from "~components";
import SimpleInput from "~components/simple-input";
import { AppColors } from "~utils";
import { activeOpacity } from "~utils/constant";
import styles from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputField } from "~components/input";
import { EditContactFormValidation } from "../edit-contact/validation";
type props = NativeStackScreenProps<any>;

export default function NewContact({ navigation, route }: props) {
  const nameRef = useRef<TextInput | null>(null);
  const phoneRef = useRef<TextInput | null>(null);
  const saveRef = useRef<TextInput | null>(null);
  const noteRef = useRef<TextInput | null>(null);
  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<FormData>({
    mode: "all",
    resolver: yupResolver(EditContactFormValidation),
  });
  return (
    <ScreenWrapper
      statusBarColor={AppColors.white}
      barStyle="dark-content"
      scrollEnabled
      backgroundColor={AppColors.spaceColor}
      headerUnScrollable={() => (
        <AppHeader
          title="New Contact"
          onPressIcon={() => navigation.goBack()}
        />
      )}
    >
      <TouchableOpacity
        activeOpacity={activeOpacity}
        style={styles.addContactButton}
      >
        <Camera />
      </TouchableOpacity>
      <InputField
        textFieldContainer={styles.textFieldContainerStyle}
        errorStyle={styles.errorStyle}
        ref={nameRef}
        control={control}
        name="name"
        onSubmit={() => phoneRef?.current?.focus()}
        keytype="next"
        label=""
        placeholder="Name"
        error={errors.name}
      />
      <InputField
        textFieldContainer={styles.textFieldContainerStyle}
        errorStyle={styles.errorStyle}
        ref={phoneRef}
        control={control}
        name="phone"
        onSubmit={() => saveRef?.current?.focus()}
        keytype="next"
        keyboardType="numeric"
        label=""
        placeholder="Phone Number"
        error={errors.phone}
      />
      <InputField
        onLeftIconPress={() => {}}
        textFieldContainer={styles.textFieldContainerStyle}
        errorStyle={styles.errorStyle}
        ref={saveRef}
        control={control}
        name="numberPlace"
        onSubmit={() => noteRef?.current?.focus()}
        keytype="next"
        label=""
        placeholder="Select Number where to save"
        error={errors.numberPlace}
        icon={<DownArrow />}
      />
      <InputField
        textFieldContainer={[styles.textFieldContainerStyle, {}]}
        textInputStyle={styles.noteStyle}
        multiline
        errorStyle={styles.errorStyle}
        ref={noteRef}
        control={control}
        name="notes"
        keytype="next"
        label=""
        placeholder="Notes"
        error={errors.notes}
      />

      <Spacer vertical={37} />
      <Button textStyle={styles.btnTextStyle}>Save</Button>
    </ScreenWrapper>
  );
}
