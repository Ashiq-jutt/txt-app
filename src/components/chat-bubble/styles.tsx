import { StyleSheet } from "react-native";
import { AppColors } from "~utils";
import { height, width } from "~utils/dimensions";

export const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "row",
    paddingVertical: height(2),
    paddingHorizontal: width(3),
  },
  profileContainer: {
    backgroundColor: AppColors.inputFieldPlaceHolderColor,
    padding: height(0.8),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: width(3),
  },
  bubble: {
    backgroundColor: AppColors.bubbleLightGrey,
    maxWidth: width(60),
    borderRadius: width(4),
    padding: height(2),
    marginHorizontal: width(3),
  },
  text: {
    fontSize: width(3),
    lineHeight: height(2.5),
  },
});
