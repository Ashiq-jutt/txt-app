import { StyleSheet } from "react-native";
import { AppColors } from "~utils";
import { height, width } from "~utils/dimensions";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: width(60),
    paddingVertical: width(2.4),
    backgroundColor: AppColors.white,
    borderRadius: height(1.5),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,

    elevation: 21,
    top: 15,
  },

  iconTextContainer: {
    flexDirection: "row",
    backgroundColor: AppColors.white,
    paddingHorizontal: width(4.2),
    justifyContent: "space-between",
  },
  line: {
    borderWidth: 0.3,
    // borderWidth: StyleSheet.hairlineWidth,
    borderColor: AppColors.otpPlaceHolderColor,
    marginVertical: width(3),
  },
  text: {
    textAlign: "center",
    fontSize: width(4.5),
    color: AppColors.black,
  },
});

export default styles;
