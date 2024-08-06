import { Platform, StyleSheet } from "react-native";
import { AppColors } from "~utils";
import AppFonts from "~utils/app-fonts";
import { height, width } from "~utils/dimensions";

const styles = StyleSheet.create({
  mainContainer: {
    height: height(10),
    marginBottom: height(0.1),
  },
  textFieldContainer: {
    width: width(90),
    alignSelf: "center",
    backgroundColor: AppColors.inputFieldBackground,
    borderRadius: width(1),
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: width(5),
  },
  textFieldInnerContainer: {
    width: width(72),
    alignSelf: "flex-start",
    alignItems: "center",
    flexDirection: "row",
  },
  icon: {
    width: width(9),
    right: width(7),
    height: height(6.3),
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    width: width(80),
    height: Platform.OS === "ios" ? height(6) : height(6.5),
    color: AppColors.black,
    fontFamily: AppFonts.SFProTextRegular,
  },
  error: {
    color: AppColors.red,
    fontSize: width(3),
  },
});
export default styles;
