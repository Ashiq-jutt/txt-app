import React, { forwardRef, ForwardRefRenderFunction } from "react";
import { Controller } from "react-hook-form";
import { TextInput, View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { InputProps } from "./types";
import { AppColors } from "~utils";
import { SmallText } from "~components/text";

const Input: ForwardRefRenderFunction<TextInput, InputProps> = (
  {
    control,
    name,
    placeholder,
    keytype,
    onSubmit,
    keyboardType,
    maxLength,
    icon = () => null,
    containerStyles = {},
    textAlignVertical = "center",
    textInputStyle = {},
    multiline,
    editable = true,
    error = null,
    textFieldContainer,
    errorStyle,
    textFieldInnerContainer,
    secureTextEntry = false,
    autoCapitalize = "none",
    label,
    onLeftIconPress,
    ...restProps
  },
  ref
) => {
  return (
    <View style={[styles.mainContainer, containerStyles]}>
      <SmallText size={3.5} color={AppColors.primary}>
        {label}
      </SmallText>
      <View style={[styles.textFieldContainer, textFieldContainer]}>
        <View style={[styles.textFieldInnerContainer, textFieldInnerContainer]}>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <TextInput
                  placeholder={placeholder}
                  placeholderTextColor={AppColors.inputFieldPlaceHolderColor}
                  autoCapitalize={autoCapitalize}
                  blurOnSubmit={false}
                  ref={ref}
                  editable={editable}
                  value={value}
                  keyboardType={keyboardType}
                  onSubmitEditing={onSubmit}
                  maxLength={maxLength}
                  multiline={multiline}
                  style={[styles.textInput, textInputStyle]}
                  returnKeyType={keytype}
                  onChangeText={onChange}
                  textAlignVertical={textAlignVertical}
                  onBlur={onBlur}
                  secureTextEntry={secureTextEntry}
                  {...restProps}
                />
              </>
            )}
            name={name}
          />
          {onLeftIconPress && (
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
      <Text style={[styles.error, errorStyle]}>
        {error && `*${error?.message}`}
      </Text>
    </View>
  );
};

export const InputField = forwardRef(Input);
