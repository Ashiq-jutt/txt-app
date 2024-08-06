import { StyleSheet } from "react-native";
import { AppColors } from "~utils";
import { height, width } from "~utils/dimensions";

const styles = StyleSheet.create({
  mainViewContainer: {
    height: height(100),
    width: width(100),
    backgroundColor: AppColors.spaceColor,
  },
  line: {
    width: width(5),
    height: height(0.1),
    alignSelf: "flex-start",
    backgroundColor: AppColors.white,
  },
  addContactButton: {
    backgroundColor: AppColors.wihte5,
    marginVertical: height(5),
    marginHorizontal: height(17.5),
    justifyContent: "center",
    alignItems: "center",
    height: height(12.5),
    width: width(25),
    borderRadius: width(6),
  },
  btnTextStyle: {
    fontSize: width(5),
    fontWeight: "500",
  },
});
export default styles;
