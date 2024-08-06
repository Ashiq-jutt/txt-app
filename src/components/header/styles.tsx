import { StyleSheet } from "react-native";
import { AppColors } from "~utils";
import { height, width } from "~utils/dimensions";

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.primary,
    width: width(100),
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: height(3),
  },
});

export default styles;
