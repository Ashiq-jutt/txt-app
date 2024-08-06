import { yupResolver } from "@hookform/resolvers/yup";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Image,
  Keyboard,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { Icons } from "~assets";
import { Camera, DownArrow } from "~assets/SVG";
import {
  AppHeader,
  Button,
  ScreenWrapper,
  SmallText,
  Spacer,
} from "~components";
import { InputField } from "~components/input";
import { AppColors } from "~utils";
import AppFonts from "~utils/app-fonts";
import { activeOpacity } from "~utils/constant";
import { width } from "~utils/dimensions";
import styles from "./styles";
import { EditContactFormValidation } from "./validation";
type props = NativeStackScreenProps<any>;
interface FormData {
  email: string;
  password: string;
}

export default function NewContact({ navigation, route }: props) {
  const nameRef = useRef<TextInput | null>(null);
  const phoneRef = useRef<TextInput | null>(null);
  const saveRef = useRef<TextInput | null>(null);
  const noteRef = useRef<TextInput | null>(null);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);
  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<FormData>({
    mode: "all",
    resolver: yupResolver(EditContactFormValidation),
  });

  return (
    <>
      <ScreenWrapper
        statusBarColor={AppColors.white}
        barStyle="dark-content"
        scrollEnabled
        backgroundColor={AppColors.spaceColor}
        headerUnScrollable={() => (
          <AppHeader title="Edit" onPressIcon={() => navigation.goBack()} />
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
        <Button textStyle={styles.btnTextStyle}>Save Changes</Button>
        {!isKeyboardVisible && (
          <TouchableOpacity style={styles.UnbindBtn}>
            <SmallText
              fontFamily={AppFonts.SFProTextRegular}
              color={AppColors.red}
            >
              Delete Contact
            </SmallText>
          </TouchableOpacity>
        )}
      </ScreenWrapper>
    </>
  );
}
