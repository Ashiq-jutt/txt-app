import React from "react";
import { TouchableOpacity, View } from "react-native";
import { ChatAvatar, WhiteTick } from "~assets/SVG";
import { MediumText, SmallText } from "~components/text";
import { AppColors } from "~utils";
import { componentsWidth } from "~utils/constant";
import { height, width } from "~utils/dimensions";
import styles from "./styles";

interface SelectItedCardProps {
  onPress?: () => void;
  onPressItem?: () => void;
  onLongPress?: () => void;
  withDate?: boolean;
  item?: any;
  title: string;
  description: string;
  date?: string;
  Width?: number;
  withShadow?: boolean;
  containerStyle?: object;
}

const SelectItedCard: React.FC<SelectItedCardProps> = ({
  onPress = () => {},
  onPressItem = () => {},
  onLongPress = () => {},
  withDate = false,
  title = "",
  description = "",
  date = "",
  Width = componentsWidth,
  withShadow = false,
  containerStyle = {},
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
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
      <TouchableOpacity style={styles.selectItemBtn} onPress={onPressItem}>
        {false ? (
          <WhiteTick height={16} width={16} />
        ) : (
          <View style={styles.unselectedView}></View>
        )}
      </TouchableOpacity>

      <View style={styles.avatarView}>
        <ChatAvatar />
      </View>

      <View style={styles.titleView}>
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
      </View>
      {withDate && (
        <View style={styles.dateView}>
          <SmallText size={3} color={AppColors.lightGray}>
            {date}
          </SmallText>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default SelectItedCard;
