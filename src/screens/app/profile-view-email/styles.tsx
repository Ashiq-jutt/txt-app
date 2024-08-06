import { StyleSheet } from "react-native";
import { AppColors } from "~utils";
import { height, width } from "~utils/dimensions";

const styles = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
    width: width(100),
    backgroundColor: AppColors.spaceColor,
  },
  namestyles: {
    fontSize: width(4.5),
    fontWeight: "500",
    color: AppColors.black,
  },
  numberStyle: {
    fontSize: width(4),
    fontWeight: "500",
    color: AppColors.otpPlaceHolderColor,
  },
  profileContainer: {
    height: height(27.12),
    backgroundColor: AppColors.white,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: height(0.25),
  },
  addContactButton: {
    backgroundColor: "#E4DAFF",
    marginHorizontal: height(17.5),
    marginBottom: height(1),
    alignItems: "center",
    height: height(12.5),
    width: width(25),
    borderRadius: width(8),
  },
  line: {
    width: width(5),
    height: height(0.1),
    alignSelf: "flex-start",
    backgroundColor: AppColors.white,
  },
  IMEIline: {
    width: width(5),
    height: height(0.1),
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
  imei: {
    marginVertical: height(3.7),
    width: width(100),
  },
  deletAccountBtn: {
    height: height(7),
    width: width(100),
    backgroundColor: AppColors.white,
    justifyContent: "center",
    alignItems: "center",
  },
  logoutBtn: {
    height: height(7),
    marginTop: height(5),
    width: width(100),
    backgroundColor: AppColors.white,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: height(0.9),
  },
  img: {
    height: height(3),
    width: width(6),
  },
  btnTextStyle: {
    fontSize: width(5),
    fontWeight: "500",
  },
  errorStyle: { marginLeft: width(7) },
  textFieldContainerStyle: { backgroundColor: AppColors.white },
});
export default styles;
