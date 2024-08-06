import { StyleSheet } from 'react-native';
import { AppColors } from '~utils';
import { height, width } from '~utils/dimensions';

const styles = StyleSheet.create({
  mainViewContainer: {
    height: height(10),
    width: width(100),
    backgroundColor: AppColors.spaceColor,
  },
  simConfig: {
    height: height(10),
    width: width(100),
    backgroundColor: AppColors.white,
    flexDirection: "row",
  },
  txtCon: {
    width: width(50),
    paddingLeft: width(5),
    flexDirection: "row",
    alignItems: "center",
  },
  imgCon: {
    width: width(50),
    justifyContent: "center",
    alignItems: "center",
    paddingRight: width(3),
    flexDirection: "row",
    marginLeft: width(13.3),
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
    left: width(5),
  },
});

export default styles;
