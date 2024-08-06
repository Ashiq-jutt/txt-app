import { StyleSheet } from "react-native";
import { AppColors } from "~utils";
import { height, width } from "~utils/dimensions";

const styles = StyleSheet.create({
  mainCointainer: {
    overflow: "hidden",
    paddingBottom: height(0.5),
    backgroundColor: AppColors.white,
    flexDirection: "row",
    paddingHorizontal: width(5),
    borderBottomWidth: width(0.3),
    marginLeft: -width(1.5),
    justifyContent: "space-between",
    paddingVertical: height(1),
  },
  allSelectView:{ 
    flexDirection: "row", 
    alignItems: "center", 
    gap: width(2) },
  unselectedView:{
    height:height(2),
    width:width(4),
    borderWidth:width(.1),
    borderRadius:width(3),
  },
  itemSelectText:{
    fontWeight:'bold'
  }
});
export default styles;
