import React, { ReactNode } from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import { SmallText } from "~components/text";
import { AppColors } from "~utils";
import styles from "./styles";

interface HeaderProps {
  children?: ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
}

const Header: React.FC<HeaderProps> = ({ children = "", containerStyle }) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <SmallText color={AppColors.white}>{children}</SmallText>
    </View>
  );
};

export default Header;

