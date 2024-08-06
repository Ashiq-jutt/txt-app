import { StyleSheet } from "react-native";
import { AppColors } from "~utils";
import { height, width } from "~utils/dimensions";

const styles = StyleSheet.create({
  container: {
    borderRadius: width(1),
    paddingVertical: height(1.5),
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    // paddingHorizontal: width(20)
    width:width(90)
  },
  primaryContainer: {
    backgroundColor: AppColors.txtButtonColor,
  },
  secondaryContainer: {
    backgroundColor: AppColors.primary,
  },
  disableContainer: {
    backgroundColor: '#d9d3d2',
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

export default styles;
