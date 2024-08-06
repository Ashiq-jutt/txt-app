import React from "react";
import { Image, View, TouchableOpacity } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { Icons } from "~assets";
import { SmallText } from "~components/text";
import { AppColors } from "~utils";
import { width } from "~utils/dimensions";
import styles from "./styles";
interface ContactInfo {
  name: string;
  email: string;
  onPress?: () => void;
  editIconPress?: () => void;
}

const ProfileHeader: React.FC<ContactInfo> = ({
  name,
  email,
  onPress,
  editIconPress,
}) => {
  return (
    <View style={styles.header}>
      <View style={styles.addContactButton}>
        <Image source={Icons.profilePic} style={styles.img} />
        <View>
          <View style={styles.nameStyle}>
            <SmallText textStyles={styles.nameText}>{name}</SmallText>
            <TouchableOpacity onPress={editIconPress} activeOpacity={0.7}>
              <Feather name={"edit"} size={width(5)} color={AppColors.black} />
            </TouchableOpacity>
          </View>
          <SmallText textStyles={styles.emailText}>{email}</SmallText>
        </View>
      </View>
      <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
        <Feather
          name={"chevron-right"}
          size={width(5)}
          color={AppColors.otpPlaceHolderColor}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ProfileHeader;
