import { StyleSheet } from 'react-native';
import { AppColors } from '~utils';
import { height ,width} from '~utils/dimensions';

const styles = StyleSheet.create({
  mainViewContainer: {
    height: height(100),
    width: width(100),
    backgroundColor: AppColors.white,
    paddingLeft: width(5),
    paddingRight: width(5),
  },
  OTPCon: {
    width: width(90),
    alignItems: "center",
  },
  underlineStyleBase: {
    fontSize: width(10),
    borderRadius: width(3),
    width: width(16),
    height: height(9),
    borderWidth: width(0.5),
    color: AppColors.black,
  },
  bottomText: {
    flexDirection: "row",

    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    width: width(75),
  },
  mainText: {
    width: width(70),
  },
  descriptionText: {
    color: AppColors.inputFieldPlaceHolderColor,
    fontWeight: "400",
    fontSize: width(3.75),
    lineHeight: height(2.62),
    letterSpacing: 0.7,
    width: width(70),
  },
  otpInputStyle: { width: width(75), height: height(15) },
});
export default styles;
