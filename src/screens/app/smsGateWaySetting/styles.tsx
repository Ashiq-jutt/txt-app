import { StyleSheet } from 'react-native';
import { AppColors } from '~utils';
import { height ,width} from '~utils/dimensions';

const styles = StyleSheet.create({
  mainViewContainer: {
    height: height(100),
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
    width: width(100),
    height: height(47),
  },
  UnbindBtn: {
    height: height(7),
    width: width(100),
    backgroundColor: AppColors.white,
    bottom: height(14.5),
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    height: height(3),
    width: width(6),
  },
});
export default styles;
