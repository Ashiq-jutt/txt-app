import React, { forwardRef } from "react";
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  TextInputProps,
} from "react-native";
import styles from "./styles";
import { AppColors } from "~utils";
import { SmallText } from "~components/text";

interface SimpleInputProps extends TextInputProps {
  placeholder: string;
  label?: string;
  icon?: React.ReactNode;
  onLeftIconPress?: () => void;
  error?: string | null;
}

const SimpleInput: React.ForwardRefRenderFunction<
  TextInput,
  SimpleInputProps
> = (
  { placeholder, label = "", icon, onLeftIconPress, error, ...restProps },
  ref
) => {
  return (
    <View style={styles.mainContainer}>
      {label && (
        <SmallText size={3.5} color={AppColors.primary}>
          {label}
        </SmallText>
      )}
      <View style={styles.textFieldContainer}>
        <View style={styles.textFieldInnerContainer}>
          <TextInput
            placeholder={placeholder}
            placeholderTextColor={AppColors.inputFieldPlaceHolderColor}
            ref={ref}
            style={styles.textInput}
            {...restProps}
          />
          {icon && (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={onLeftIconPress}
              style={styles.icon}
            >
              {icon}
            </TouchableOpacity>
          )}
        </View>
      </View>
      {error && <Text style={styles.error}>{`*${error}`}</Text>}
    </View>
  );
};

export default forwardRef(SimpleInput);
