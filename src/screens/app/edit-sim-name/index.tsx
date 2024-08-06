import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useRef } from "react";
import { TextInput, TouchableOpacity } from "react-native";
import { SimCard2 } from "~assets/SVG";
import { AppHeader, Button, ScreenWrapper, Spacer } from "~components";
import SimpleInput from "~components/simple-input";
import { AppColors } from "~utils";
import { activeOpacity } from "~utils/constant";
import styles from "./styles";
type props = NativeStackScreenProps<any>;

export default function EditSimName({ navigation, route }: props) {
  const nameRef = useRef<TextInput | null>(null);
  return (
    <ScreenWrapper
      statusBarColor={AppColors.white}
      barStyle="dark-content"
      backgroundColor={AppColors.spaceColor}
      headerUnScrollable={() => (
        <AppHeader
          title="Edit SIM Name"
          onPressIcon={() => navigation.goBack()}
        />
      )}
    >
      <TouchableOpacity
        activeOpacity={activeOpacity}
        style={styles.addContactButton}
      >
        <SimCard2 value={1} size={15} />
      </TouchableOpacity>
      <SimpleInput
        ref={nameRef}
        placeholder="SIM1"
        onLeftIconPress={() => {
          console.log("Left icon pressed");
        }}
        error=""
      />

      <Spacer vertical={10} />
      <Button textStyle={styles.btnTextStyle}>Save Changes</Button>
    </ScreenWrapper>
  );
}
