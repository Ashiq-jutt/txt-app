import { StyleSheet, Platform } from "react-native";
import { AppColors } from "~utils";
import AppFonts from "~utils/app-fonts";
import { height, width } from "~utils/dimensions";

const styles = StyleSheet.create({
  mainCointainer: {
    overflow: "hidden",
    paddingBottom: height(0.5),
    backgroundColor: AppColors.white,
    flexDirection: "row",
    paddingHorizontal: width(5),
    borderBottomColor: AppColors.gray,
    borderBottomWidth: width(0.3),
  },
  actionCentreContainer: {
    width: width(30),
    // height: height(15),
    paddingVertical: height(1),
  },
  iconsContainer: {
    flexDirection: "row",
    width: width(15),
    marginLeft: -width(1.5),
    justifyContent: "space-between",
  },
  simTextView: {
    height: height(4.5),
    flexDirection: "row",
    marginTop: height(1),
  },
  simDescription: {
    color: AppColors.lightGray,
    fontFamily: AppFonts.SFProTextMedium,
  },
});
export default styles;
