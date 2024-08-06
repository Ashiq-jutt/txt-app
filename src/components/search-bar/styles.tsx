import { StyleSheet } from "react-native";
import { AppColors } from "~utils";
import { width } from "~utils/dimensions";
const styles = StyleSheet.create({
  searchContaiiner: {
    flexDirection: "row",
    alignItems: "center",
    gap: width(1.5),
    backgroundColor: AppColors.white,
    borderRadius: width(3),
    paddingLeft: width(2.2),
    paddingRight: width(6),
  },
  search: { flexDirection: "row", alignItems: "center", flex: 1 },
  inputStyle: {
    flex: 1,
    color: AppColors.wihte5,
  },
  iconStyle: {
    width: "auto",
  },
});
export default styles;
