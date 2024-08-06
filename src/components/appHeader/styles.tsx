import { height, width } from "~utils/dimensions";
import { StyleSheet, View, StyleProp, ViewStyle, Image, TouchableOpacity } from "react-native";
import { AppColors } from "~utils";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.white,
    width: width(100),
    alignItems: "center",
    justifyContent: "center",
    height: height(7),
    flexDirection: "row",
  },
  iconCon: {
    width: width(19),
  },
  txtCon: {
    width: width(60),
    alignItems: "center",
  },
  rightCon: {
    width: width(19),
    alignItems: "flex-end",
    paddingRight: width(4),
  },
  icon: {
    height: height(4),
    width: width(8),
  },
  chatIconStyle: {
    height: height(3),
    width: width(6),
    backgroundColor: "#5AF575",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: width(1.5),
  },
  iconContainer: { flexDirection: "row", gap: width(1.25) },
  save: {
    fontWeight: "bold",
    fontSize: width(4),
  },
});