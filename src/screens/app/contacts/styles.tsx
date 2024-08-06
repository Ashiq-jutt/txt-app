import { StyleSheet } from "react-native";
import { AppColors } from "~utils";
import { height, width } from "~utils/dimensions";

const styles = StyleSheet.create({
  mainViewContainer: {
    height: height(100),
    width: width(100),
    backgroundColor: AppColors.spaceColor,
  },
  messageAndCharacterStyle: { flexDirection: "row" },
  headerBottomLne: {
    borderWidth: 0.3,
    borderColor: AppColors.otpPlaceHolderColor,
  },
  line: {
    width: width(88),
    height: height(0.1),
    marginLeft: width(5),
    backgroundColor: AppColors.otpPlaceHolderColor,
  },
  alphaBetStyle: {
    fontSize: width(3),
    color: AppColors.otpPlaceHolderColor,
    fontWeight: "700",
  },
  characterStyle: {
    width: width(100),
    paddingLeft: width(5),
    height: height(4),
    alignItems: "center",
    fontWeight: "700",
    fontSize: width(3.8),
  },
  characterListStyle: {
    marginRight: width(2),
    marginBottom: width(0.5),
    marginLeft: width(1),
  },
  IMEIline: {
    width: width(5),
    height: height(0.25),
    alignSelf: "flex-start",
    backgroundColor: AppColors.white,
  },
  simConfig: {
    height: height(10),
    width: width(100),
    backgroundColor: AppColors.white,
    flexDirection: "row",
  },
  txtCon: {
    width: width(90),
    paddingLeft: width(5),
    flexDirection: "column",
  },
  imgCon: {
    width: width(10),
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: width(3),
  },
  searchHeaderStyle: {
    paddingLeft: width(3),
    backgroundColor: AppColors.white,
  },

  imei: {
    width: width(100),
    height: height(47),
  },
  UnbindBtn: {
    height: height(7),
    width: width(100),
    backgroundColor: AppColors.white,
    bottom: height(14.5),
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    height: height(3),
    width: width(6),
  },
  addContactButton: {
    backgroundColor: AppColors.black,
    position: "absolute",
    bottom: height(3.3),
    right: width(3.75),
    height: height(9),
    width: width(18),
    borderRadius: width(10),
    justifyContent: "center",
    alignItems: "center",
  },
  actionButton: {
    position: "absolute",
    bottom: height(4),
    right: width(10),
    backgroundColor: AppColors.darkGray,
    borderRadius: width(10),
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
});
export default styles;
