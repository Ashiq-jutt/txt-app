import { height, width } from "~utils/dimensions";
import { StyleSheet, View, StyleProp, ViewStyle, Image, TouchableOpacity } from "react-native";
import { AppColors } from "~utils";

export const styles = StyleSheet.create({
  container: {
    width: width(100),
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingVertical: height(2),
    paddingHorizontal: width(5),
  },
  iconCon: {
    width: width(19),
    // backgroundColor:AppColors.white
  },
  inputView: {
    width: width(75),
    alignItems: "center",
    flexDirection: "row",
    borderRadius: width(100),
    marginLeft: width(4),
    paddingHorizontal: width(2),
    paddingVertical: width(1),
    justifyContent: "space-between",
    elevation: 3,
    backgroundColor: AppColors.white,
  },
  input: {
    width: width(60),
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
  extraSimCardView: {
    position: "absolute",
    height: height(12),
    width: width(18),
    backgroundColor: AppColors.white,
    bottom: 83,
    left: 17,
  },
});