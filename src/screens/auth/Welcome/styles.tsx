import { StyleSheet } from 'react-native';
import { AppColors } from '~utils';
import { height, width } from "~utils/dimensions";

const styles = StyleSheet.create({
  mainViewContainer: {
    height: height(100),
    width: width(100),
    backgroundColor: AppColors.white,
    alignItems: "center",
    paddingTop: height(7),
  },
  logo: {
    height: height(37),
    width: width(75),
  },
});
export default styles;
