import { StyleSheet } from "react-native";
import { AppColors } from "~utils";
import { height, width } from "~utils/dimensions";

const styles = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
    width: width(100),
    backgroundColor: AppColors.spaceColor,
  },
  errorStyle: { marginLeft: width(7) },
  textFieldContainerStyle: { backgroundColor: AppColors.white },

  btnTextStyle: {
    fontSize: width(5),
    fontWeight: "500",
  },
  noteStyle: {
    height: height(10.5),
  },
  line: {
    width: width(5),
    height: height(0.1),
    alignSelf: "flex-start",
    backgroundColor: AppColors.white,
  },
  addContactButton: {
    backgroundColor: AppColors.black,
    marginVertical: height(5),
    marginHorizontal: height(17.5),
    justifyContent: "center",
    alignItems: "center",
    height: height(12.5),
    width: width(25),
    borderRadius: width(10),
  },
});
export default styles;
