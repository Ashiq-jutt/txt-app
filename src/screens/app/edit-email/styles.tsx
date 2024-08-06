import { StyleSheet } from "react-native";
import { AppColors } from "~utils";
import { height, width } from "~utils/dimensions";

const styles = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
    width: width(100),
    backgroundColor: AppColors.spaceColor,
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
  UnbindBtn: {
    position: "absolute",
    height: height(7),
    width: width(100),
    backgroundColor: AppColors.white,
    bottom: height(5),
    justifyContent: "center",
    alignItems: "center",
  },
  editIcon: { position: "absolute", right: width(4), top: width(4) },
  img: {
    height: height(3),
    width: width(6),
  },
  btnTextStyle: {
    fontSize: width(5),
    fontWeight: "500",
  },
  editContainer: {
    backgroundColor: "#E4DAFF",
    marginVertical: height(5),
    marginHorizontal: height(17.5),
    justifyContent: "center",
    alignItems: "center",
    height: height(12.5),
    width: width(25),
    borderRadius: width(10),
  },
  addContactButton: {
    position: "absolute",
    marginVertical: height(5),
    marginHorizontal: height(17.5),
    justifyContent: "center",
    alignItems: "center",
    height: height(12.5),
    width: width(25),
    borderRadius: width(10),
  },
  errorStyle: { marginLeft: width(7) },
  textFieldContainerStyle: { backgroundColor: AppColors.white },
});
export default styles;
