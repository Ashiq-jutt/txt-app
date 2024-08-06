import { StyleSheet } from "react-native";
import { AppColors } from "~utils";
import { height, width } from "~utils/dimensions";

const styles = StyleSheet.create({
  flatlist: {
    paddingTop: height(1),
    paddingBottom: height(10),
  },
  headerBottomLne: {
    borderWidth: 0.3,
    borderColor: AppColors.otpPlaceHolderColor,
  },
  searchHeaderStyle: {
    paddingLeft: width(3),
    backgroundColor: AppColors.white,
  },
  actionButton: {
    bottom: height(4),
    right: width(10),
    position: "absolute",
    height: height(8.1),
    width: height(8.1),
    backgroundColor: AppColors.darkGray,
    borderRadius: width(10),
    alignItems: "center",
    justifyContent: "center",
  },
  actionView: {
    position: "absolute",
    bottom: height(9.5),
    right: width(12),
    backgroundColor: AppColors.transparent,
    padding: width(3),
  },
  hiddenIconView: {
    backgroundColor: AppColors.red,
    height: height(3.75),
    width: width(7.5),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: width(2.5),
  },
  rowBack: {
    alignItems: "center",
    backgroundColor: AppColors.white,
    right: 0,
    flexDirection: "row",
    position: "absolute",
    paddingHorizontal: width(3),
    paddingVertical: height(2.7),
    alignSelf: "center",
  },
  iconStyle: {
    backgroundColor: AppColors.white,
    padding: width(1.7),
    elevation: 9,
    borderRadius: width(3.5),
    marginLeft: width(2.5),
  },
  textStyle: {
    fontWeight: "400",
    fontSize: width(4),
    color: AppColors.black,
  },
  textViewStyle: {
    backgroundColor: AppColors.white,
    paddingVertical: width(1.7),
    paddingRight: width(4.7),
    paddingLeft: width(1.7),
    elevation: 9,
  },
  iconAndTextContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: width(4),
  },
  iconTextStyle: {
    bottom: width(2),
  },
});

export default styles;