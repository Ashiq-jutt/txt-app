import { StyleSheet } from 'react-native';
import { AppColors } from '~utils';
import { height, width } from "~utils/dimensions";

const styles = StyleSheet.create({
  mainViewContainer: {
    height: height(100),
    width: width(100),
    backgroundColor: AppColors.white,
    paddingLeft: width(5),
    paddingRight: width(5),
  },
  bottomText: {
    flexDirection: "row",
    alignSelf: "center",
    width: width(75),
  },
  mainText: {
    width: width(80),
  },
  descriptionText: {
    color: AppColors.inputFieldPlaceHolderColor,
    fontWeight: "400",
    fontSize: width(3.75),
    lineHeight: height(2.62),
    width: width(75),
    letterSpacing: 0.7,
  },
});
export default styles;
