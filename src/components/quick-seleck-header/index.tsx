import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { SearchIcon } from "~assets/SVG";
import { AppColors } from "~utils";
import { width } from "~utils/dimensions";
import styles from "./styles";
import { LargeText, SmallText } from "~components/text";

interface QuickSelectHederProps {
  isLeftIcon?: boolean;
  moreIconPress?: () => void;
  editIconPress?: () => void;
  searchIconPress?: () => void;
}

const QuickSelectHeder: React.FC<QuickSelectHederProps> = ({
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
      <View>
        <View style={styles.allSelectView}>
          <TouchableOpacity activeOpacity={0.7}>
            <View style={styles.unselectedView}></View>
          </TouchableOpacity>
          <LargeText textStyles={styles.itemSelectText}>
            2 Item Selected
          </LargeText>
        </View>
        <SmallText color={AppColors.otpPlaceHolderColor}>All</SmallText>
      </View>
      <View style={styles.allSelectView}>
        <TouchableOpacity onPress={searchIconPress} activeOpacity={0.7}>
          <SearchIcon color={AppColors.black} />
        </TouchableOpacity>
        <TouchableOpacity onPress={moreIconPress} activeOpacity={0.7}>
          <Feather
            name={"more-vertical"}
            size={width(6)}
            color={AppColors.black}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default QuickSelectHeder;
