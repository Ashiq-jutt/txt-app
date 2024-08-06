import React from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { MediumText, SmallText } from "~components/text";
import { AppColors, CommonStyles } from "~utils";
import { width } from "~utils/dimensions";
import { styles } from "./styles";

interface ChatBubbleProps {
  containerStyle?: StyleProp<ViewStyle>;
  alignSelf?: "flex-start" | "flex-end" | "center";
  bubbleBGColor?: string;
  showProfile?: boolean;
  message?: string;
  textColor?: string;
  value?: number;
  time?: string;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({
  containerStyle = {},
  alignSelf = "flex-start",
  value = 0,
  bubbleBGColor = AppColors.bubbleLightGrey,
  showProfile = true,
  message = "",
  textColor = AppColors.black,
  time,
}) => {
  const getBorderRadius = () => ({
    borderTopLeftRadius: showProfile ? 0 : width(4),
    borderBottomRightRadius: showProfile ? width(4) : 0,
  });

  return (
    <View style={[styles.container, containerStyle, { alignSelf: alignSelf }]}>
      {showProfile && (
        <View style={styles.profileContainer}>
          <Feather name="user" size={width(6)} color={AppColors.white} />
        </View>
      )}
      <View
        style={[
          CommonStyles.rowAlignItemCenter,
          { flexDirection: showProfile ? "row" : "row-reverse" },
        ]}
      >
        <View
          style={[
            styles.bubble,
            { backgroundColor: bubbleBGColor },
            getBorderRadius(),
          ]}
        >
          <MediumText
            textStyles={[
              styles.text,
              { fontSize: value > 0 ? value : width(3.5) },
            ]}
            color={textColor}
          >
            {message}
          </MediumText>
        </View>
        <SmallText color={AppColors.inputFieldPlaceHolderColor}>
          {time}
        </SmallText>
      </View>
    </View>
  );
};

export default ChatBubble;
