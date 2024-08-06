import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import { SearchIcon, SimCard } from "~assets/SVG";
import { MediumText, SmallText } from "~components/text";
import { AppColors } from "~utils";
import AppFonts from "~utils/app-fonts";
import { height, width } from "~utils/dimensions";
import styles from "./styles";
import { activeOpacity } from "~utils/constant";

interface MessagesHeaderProps {
  isLeftIcon?: boolean;
  moreIconPress?: () => void;
  editIconPress?: () => void;
  searchIconPress?: () => void;
}

const MessagesHeader: React.FC<MessagesHeaderProps> = ({
  isLeftIcon = true,
  moreIconPress = () => {},
  editIconPress = () => {},
  searchIconPress = () => {},
}) => {
  const navigation = useNavigation();
  const [activeSimIndex, setActiveSimIndex] = useState<number>(1);

  const BackArrowHandler = () => {
    navigation.goBack();
  };

  const simsData: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <View style={styles.mainCointainer}>
      <View style={styles.actionCentreContainer}>
        <View style={styles.iconsContainer}>
          <TouchableOpacity onPress={moreIconPress} activeOpacity={0.7}>
            <Feather
              name={"more-vertical"}
              size={width(6)}
              color={AppColors.black}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={searchIconPress} activeOpacity={0.7}>
            {/* <Feather name={"search"} size={width(6)} color={AppColors.black} /> */}
            <SearchIcon color={AppColors.black} />
          </TouchableOpacity>
        </View>
        <View style={styles.simTextView}>
          <View style={{ justifyContent: "flex-end" }}>
            <MediumText
              size={4.5}
              color={AppColors.darkGray}
              fontFamily={AppFonts.SFProTextMedium}
            >{`SIM${activeSimIndex}`}</MediumText>
          </View>
          <TouchableOpacity
            activeOpacity={activeOpacity}
            onPress={editIconPress}
          >
            <Feather name={"edit"} size={width(5)} color={AppColors.black} />
          </TouchableOpacity>
        </View>
        <MediumText size={3.8} textStyles={styles.simDescription}>
          goip gateway
        </MediumText>
        <SmallText size={2.5} textStyles={styles.simDescription}>
          sim card port 3
        </SmallText>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          flex: 1,
        }}
      >
        {simsData.map((data, index) => (
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => setActiveSimIndex(data)}
            key={index.toString()}
            style={{
              marginLeft: data !== 1 && data !== 5 ? width(1) : width(0),
              marginTop: data > 4 ? height(1) : height(0),
            }}
          >
            <SimCard
              isActive={activeSimIndex === data ? true : false}
              size={14}
              value={data}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default MessagesHeader;
