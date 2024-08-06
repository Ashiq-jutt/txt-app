import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import Feather from "react-native-vector-icons/EvilIcons";
import { CrossIcon } from "~assets/SVG";
import { AppColors } from "~utils";
import styles from "./styles";

interface SearchBarProps {
  left?: boolean;
  right?: boolean;
  onRightIconPress: () => void;
  onChhangeText: (text: string) => void;
  placeholder?: string;
  disable?: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({
  left = true,
  right = true,
  onChhangeText,
  onRightIconPress = () => {},
  placeholder = "Search",
}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.searchContaiiner}>
      {left && (
        <View style={styles.iconStyle}>
          <Feather name="search" size={20} color={AppColors.black} />
        </View>
      )}
      <View style={styles.search}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={AppColors.wihte5}
          style={styles.inputStyle}
          onChangeText={(text) => onChhangeText(text)}
        />
      </View>
      {right && (
        <View style={styles.iconStyle}>
          <TouchableOpacity onPress={onRightIconPress}>
            <CrossIcon color={AppColors.black} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default SearchBar;
