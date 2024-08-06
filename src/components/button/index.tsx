import React, { useMemo, FC, ReactNode } from "react";
import {
  TouchableOpacity,
  TouchableOpacityProps,
  StyleProp,
  ViewStyle,
} from "react-native";
import { SmallText } from "~components";
import AppColors from "~utils/app-colors";
import styles from "./styles";
import AppFonts from "~utils/app-fonts";

interface ButtonProps {
  onPress?: () => void;
  children?: ReactNode;
  variant?: "primary" | "secondary";
  withShadow?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  touchableOpacityProps?: TouchableOpacityProps;
  textStyle?: StyleProp<ViewStyle>;
  textProps?: any;
  disabled?: boolean;
  buttonTextColor?: string;
}

const Button: FC<ButtonProps> = ({
  onPress,
  children=null, // Provide a default value here
  variant = "primary",
  withShadow = false,
  containerStyle = {},
  touchableOpacityProps,
  textStyle = {},
  textProps = {},
  disabled = false,
  buttonTextColor = AppColors.white,
}) => {
  const getStyles = useMemo(() => {
    return {
      container: {
        ...styles.container,
        ...(disabled
          ? styles.disableContainer
          : variant === "primary"
          ? styles.primaryContainer
          : styles.secondaryContainer),
        ...(withShadow && styles.shadow),
      },
    };
  }, [variant, withShadow, disabled]);

  return (
    <TouchableOpacity
      style={[getStyles.container, containerStyle]}
      onPress={onPress}
      activeOpacity={0.7}
      disabled={disabled}
      {...touchableOpacityProps}
    >
      <SmallText
        fontFamily={AppFonts.SFProTextRegular}
        color={disabled ? AppColors.white : buttonTextColor}
        textStyles={textStyle}
        textProps={textProps}
      >
        {children}
      </SmallText>
    </TouchableOpacity>
  );
};

export default Button;
