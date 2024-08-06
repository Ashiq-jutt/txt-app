import React, { ReactNode, FC } from "react";
import {
  Image,
  StyleProp,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import Feather from "react-native-vector-icons/Feather";
import { Icons } from "~assets";
import { ChatIcon } from "~assets/SVG";
import { MediumText, SmallText } from "~components/text";
import { AppColors } from "~utils";
import AppFonts from "~utils/app-fonts";
import { width } from "~utils/dimensions";
import { styles } from "./styles";

interface HeaderProps {
  editIconPress?: () => void;
  chatIconPress?: () => void;
  title?: ReactNode;
  onPressIcon: () => void;
  icons?: ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
  onPressThreeDots?: () => void;
  showSaveText?: boolean;
}

const AppHeader: FC<HeaderProps> = ({
  title = "",
  containerStyle = {},
  editIconPress = () => {},
  chatIconPress,
  onPressIcon,
  icons,
  onPressThreeDots,
  showSaveText,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity onPress={onPressIcon} style={styles.iconCon}>
        <Image source={Icons.txtBackIcon} style={styles.icon} />
      </TouchableOpacity>

      <View style={styles.txtCon}>
        <SmallText
          fontFamily={AppFonts.SFProTextMedium}
          color={AppColors.black}
          textStyles={styles.save}
        >
          {title}
        </SmallText>
      </View>
      <View style={styles.rightCon}>
        {icons ? (
          <View style={styles.iconContainer}>
            <TouchableOpacity
              style={styles.chatIconStyle}
              onPress={chatIconPress!}
            >
              <ChatIcon />
            </TouchableOpacity>
            <TouchableOpacity onPress={editIconPress}>
              <Feather name={"edit"} size={width(5)} color={AppColors.black} />
            </TouchableOpacity>
          </View>
        ) : showSaveText ? (
          <MediumText textStyles={styles.save} color={AppColors.green}>
            Save
          </MediumText>
        ) : (
          <TouchableOpacity onPress={onPressThreeDots!}>
            <Entypo
              name={"dots-three-vertical"}
              size={width(5)}
              color={AppColors.black}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default AppHeader;
