import { StyleSheet } from "react-native";
import { AppColors } from "~utils";
import AppFonts from "~utils/app-fonts";
import { mainContainerPadding } from "~utils/constant";
import { height, width } from "~utils/dimensions";

const styles = StyleSheet.create({
  container: {
    borderBottomWidth:width(.1),
    borderTopWidth:width(.1),
    borderColor:AppColors.otpPlaceHolderColor,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: width(4),
    paddingVertical: height(1),
    backgroundColor: AppColors.white,
  },
  imageStyle: {
    width: height(9),
    height: height(9),
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
  titleView: {
    height: height(7),
    width: width(65),
    marginLeft: width(4),
  },
  title: {
    fontFamily: AppFonts.SFProTextMedium,
    fontSize: width(3.5),
  },
  avatarView: {
    backgroundColor: AppColors.lightGray,
    padding: width(2),
    borderRadius: width(3.3),
  },
  selectItemBtn:{
    marginRight:width(1)
  },
  unselectedView:{
    height:height(2),
    width:width(4),
    borderWidth:width(.1),
    borderRadius:width(3),
  },
  textStyle:{ marginTop: height(1) },
  dateView:{ flex: 1, alignSelf: "flex-start" },

  countView: {
    position: "absolute",
    right: -width(2),
    bottom: -height(1),
    backgroundColor: AppColors.darkGray,
    paddingHorizontal: width(2),
    paddingVertical: height(0.4),
    borderRadius: width(4),
  },
  countViewRight: {
    backgroundColor: AppColors.darkGray,
    paddingHorizontal: width(2),
    paddingVertical: height(0.4),
    alignItems: 'center',
    alignSelf:'flex-start',
    borderRadius: width(4),
    marginTop:height(1),
    marginLeft:width(1)
  },
});
export default styles;
