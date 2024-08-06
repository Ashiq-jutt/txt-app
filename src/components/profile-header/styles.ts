import { StyleSheet } from 'react-native';
import { AppColors } from '~utils';
import { height ,width} from '~utils/dimensions';

const styles = StyleSheet.create({
  mainViewContainer: {
    height: height(100),
    width: width(100),
    backgroundColor: AppColors.spaceColor,
  },
  header: {
    backgroundColor: AppColors.white,
    paddingLeft: width(6),
    paddingRight: width(8.75),
    paddingVertical: height(3.12),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  addContactButton: {
    backgroundColor: "#E4DAFF",
    gap: width(2.5),
    height: height(6.62),
    width: width(13.25),
    borderRadius: width(4),
    flexDirection: "row",
  },
  nameStyle: {
    flexDirection: "row",
    gap: width(2),
    width: width(37.5),
  },
  nameText: {
    fontSize: width(3.5),
    fontWeight: "500",
    color: AppColors.black,
  },
  emailText: {
    paddingTop: width(3),
    fontSize: width(3),
    fontWeight: "500",
    color: AppColors.otpPlaceHolderColor,
  },
  img: {
    height: height(7),
    width: width(14),
  },
});
export default styles;
