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
  footerContainer: {
    flexDirection: "row",
    backgroundColor: AppColors.white,
    borderTopWidth: height(0.1),
    borderTopColor: AppColors.otpPlaceHolderColor,
    height: height(8),
    alignItems: "center",
    justifyContent: "space-around",
  },
  footerIconstyles: { alignItems: "center" },
  actionButton: {
    bottom: height(11),
    right: width(4),
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
    bottom: height(17),
    right: width(6),
    backgroundColor: AppColors.transparent,
    padding: width(3),
  },
  hiddenIconView: {
    backgroundColor: AppColors.red,
    padding: width(2),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: width(4),
  },
  rowBack: {
    alignItems: "center",
    backgroundColor: AppColors.white,
    right: 0,
    top: height(0.8),
    flexDirection: "row",
    position: "absolute",
    paddingHorizontal: width(2),
    paddingVertical: height(1),
    alignSelf: "center",
  },
  iconStyle: {
    backgroundColor: AppColors.white,
    padding: width(1.7),
    elevation: 9,
    borderRadius: width(4),
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
    bottom: width(1),
  },
});

export default styles;
