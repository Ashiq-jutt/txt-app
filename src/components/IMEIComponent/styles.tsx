import { StyleSheet } from 'react-native';
import { AppColors } from '~utils';
import { height, width } from '~utils/dimensions';

const styles = StyleSheet.create({
  mainViewContainer: {
    height: height(6),
    width: width(100),
    backgroundColor: AppColors.black,
  },
  simConfig: {
    height: height(6),
    width: width(100),
    backgroundColor: AppColors.white,
    flexDirection: "row",
  },
  whiteTickView: { position: "absolute", top: width(4), left: width(2) },
  txtCon: {
    width: width(50),
    flexDirection: "column",
    justifyContent: "center",
  },
  imgCon: {
    width: width(9),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    right: width(3),
  },
  ccon: {
    flexDirection: "row",
    width: width(50),
  },
  discriptionCon: {
    width: width(40),
    alignItems: "flex-end",
    justifyContent: "center",
  },
  img: {
    height: height(3),
    width: width(6),
  },
  imgOnly: {
    height: height(3),
    width: width(6),
    marginLeft: width(13.3),
  },
  SimImg: {
    height: height(7),
    width: width(11.5),
  },
  simText: {
    left: width(3),
    fontSize: width(4),
  },
  des2Text: {
    left: width(3),
    width: width(70),
    fontSize: width(3),
    lineHeight: height(2.62),
  },
  discriptionText: {
    fontSize: width(3.5),
    color: AppColors.inputFieldPlaceHolderColor,
    right: width(1.5),
  },
});

export default styles;
