import React from "react";
import { TouchableOpacity, View } from "react-native";
import { height, width } from "~utils/dimensions";
import { AppColors } from "~utils";
import styles from "./styles";
import { MediumText, SmallText } from "~components/text";
import { activeOpacity, componentsWidth } from "~utils/constant";
import { ChatAvatar } from "~assets/SVG";

interface ChatCardProps {
  onPress?: () => void;
  onLongPress?: () => void;
  withCount?: boolean;
  withDate?: boolean;
  item?: any;
  title: string;
  description: string;
  count?: number;
  date?: string;
  Width?: number;
  withShadow?: boolean;
  containerStyle?: object;
  isRightCount?: boolean;
}

const ChatCard: React.FC<ChatCardProps> = ({
  onPress = () => {},
  onLongPress = () => {},
  withCount = false,
  withDate = false,
  title = "",
  description = "",
  count = 0,
  date = "",
  Width = componentsWidth,
  withShadow = false,
  isRightCount = false,
  containerStyle = {},
}) => {
  return (
    <TouchableOpacity
      onLongPress={onLongPress}
      activeOpacity={0.7}
      style={[
        styles.container,
        withShadow && styles.shadow,
        containerStyle,
        {
          width: width(Width),
        },
      ]}
    >
      <View style={styles.avatarView}>
        <ChatAvatar />
        {withCount && count !== 0 && (
          <View style={styles.countView}>
            <SmallText color={AppColors.white}>{count}</SmallText>
          </View>
        )}
      </View>

      <TouchableOpacity onPress={onPress} style={styles.titleView}>
        <MediumText color={AppColors.darkGray} textStyles={styles.title}>
          {title}
        </MediumText>
        <SmallText
          textStyles={styles.textStyle}
          color={AppColors.lightGray}
          numberOfLines={1}
        >
          {description}
        </SmallText>
      </TouchableOpacity>
      {withDate && (
        <View style={styles.dateView}>
          <SmallText size={3} color={AppColors.lightGray}>
            {date}
          </SmallText>
          {withCount && count !== 0 && isRightCount && (
            <View style={styles.countViewRight}>
              <SmallText color={AppColors.white}>{count}</SmallText>
            </View>
          )}
        </View>
      )}
    </TouchableOpacity>
  );
};

export default ChatCard;
