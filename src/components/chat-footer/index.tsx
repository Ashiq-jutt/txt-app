import React from "react";
import {
  StyleProp,
  TextInput,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { SimCardNitification, VerticalSimCard } from "~assets/SVG";
import { AppColors } from "~utils";
import { width } from "~utils/dimensions";
import { styles } from "./styles";

interface ChatFooterProps {
  onPressIcon?: any;
  showAllSim?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
}

const ChatFooter: React.FC<ChatFooterProps> = ({
  containerStyle = {},
  onPressIcon,
  showAllSim = false,
}) => {
  return (
    <>
      <View style={[styles.container, containerStyle]}>
        <TouchableOpacity onPress={onPressIcon}>
          <VerticalSimCard />
        </TouchableOpacity>
        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            placeholder="Type a Message"
            placeholderTextColor={AppColors.darkGray}
          />
          <Feather name="send" size={width(8)} color={AppColors.black} />
        </View>
      </View>
      {showAllSim && (
        <View style={styles.extraSimCardView}>
          <TouchableOpacity onPress={onPressIcon}>
            <SimCardNitification />
          </TouchableOpacity>
          <TouchableOpacity onPress={onPressIcon}>
            <SimCardNitification />
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

export default ChatFooter;
