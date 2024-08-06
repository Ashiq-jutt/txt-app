import { StyleSheet } from "react-native";
import { AppColors } from "~utils";
import { height, width } from "~utils/dimensions";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  footerContainer: {
    marginBottom: height(2),
  },
  header: {
    shadowColor: AppColors.darkGray,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4,
  },
  text: {
    marginVertical: height(2),
    alignSelf: "center",
  },
  slider: {
    width: width(70),
    alignSelf: "center",
  },
  sliderContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "space-between",
    width: width(75),
  },
  trackMarks: {
    width: width(0.5),
    height: height(1.5),
    backgroundColor: AppColors.inputFieldPlaceHolderColor,
  },

  smallTextStyle: {
    color: AppColors.inputFieldPlaceHolderColor,
    fontWeight: "bold",
    fontSize: width(4),
  },
  largeTextStyle: {
    color: AppColors.inputFieldPlaceHolderColor,
    fontWeight: "bold",
    fontSize: width(6),
  },
  footerMainContainer: {
    paddingVertical: height(1.5),
    marginBottom: height(2),
    borderTopWidth: width(0.2),
    borderColor: AppColors.inputFieldPlaceHolderColor,
  },
  thumbStyle: {
    backgroundColor: AppColors.white,
    width: width(6),
    height: width(6),
    elevation: 5,
    borderRadius: width(100),
  },
  minimumTrack: {
    backgroundColor: AppColors.transparent,
  },
});

export default styles;