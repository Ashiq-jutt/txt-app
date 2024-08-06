import React, { FC, ReactNode } from "react";
import { Pressable, StyleSheet, Text, TextStyle } from "react-native";
import { AppColors } from "~utils";
import { width } from "~utils/dimensions";

interface TextProps {
  children: ReactNode;
  size?: number;
  fontFamily?: string;
  textAlign?: "auto" | "left" | "right" | "center" | "justify";
  color?: string;
  textStyles?: any;
  textProps?: any;
  onPress?: (() => void) | undefined;
  textDecorationLine?:
    | "none"
    | "underline"
    | "line-through"
    | "underline line-through";
  lineHeight?: number;
  numberOfLines?: number;
  justify?: boolean;
  uppercase?: boolean; // Add uppercase prop
}

const CustomText: FC<TextProps> = ({
  children,
  size = 4.5,
  textAlign = "auto",
  color = AppColors.black,
  textStyles,
  textProps,
  onPress,
  textDecorationLine = "none",
  fontFamily,
  lineHeight,
  numberOfLines,
  justify,
  uppercase,
}) => {
  const styles = StyleSheet.create({
    text: {
      fontSize: width(size),
      fontFamily: fontFamily,
      color: color,
      textAlign: textAlign,
      textDecorationLine: textDecorationLine,
      lineHeight: lineHeight ? width(lineHeight) : undefined,
      textTransform: uppercase ? "uppercase" : "none", // Use textTransform for uppercase
    },
  });

  return (
    <Pressable disabled={!onPress} onPress={onPress}>
      {justify ? (
        <Text
          style={[styles.text, textStyles]}
          numberOfLines={numberOfLines}
          {...textProps}
        >
          {children}
        </Text>
      ) : (
        <Text
          style={[styles.text, textStyles]}
          numberOfLines={numberOfLines}
          {...textProps}
        >
          {children}
        </Text>
      )}
    </Pressable>
  );
};

export const LargeText: FC<TextProps> = (props) => <CustomText {...props} />;
export const MediumText: FC<TextProps> = (props) => (
  <CustomText {...props} size={3.5} />
);
export const SmallText: FC<TextProps> = (props) => (
  <CustomText {...props} size={3} />
);
export const UnderLineText: FC<TextProps> = (props) => (
  <CustomText {...props} size={4.5} textDecorationLine="underline" />
);
// export const LargeText: FC<TextProps> = (props) => (
//   <CustomText {...props} />
// );
// export const MediumText: FC<TextProps> = (props) => (
//   <CustomText {...props} />
// );
// export const SmallText: FC<TextProps> = (props) => (
//   <CustomText {...props} />
// );
// export const UnderLineText: FC<TextProps> = (props) => (
//   <CustomText {...props} textDecorationLine="underline" />
// );

export default CustomText;
