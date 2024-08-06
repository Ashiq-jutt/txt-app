import { StyleSheet } from 'react-native';
import { AppColors } from '~utils';
import { height ,width} from '~utils/dimensions';

const styles = StyleSheet.create({
  mainViewContainer: { paddingHorizontal: width(5) },
  archiveCOntainer: {
    paddingHorizontal: width(3),
    paddingVertical: height(2.5),
    backgroundColor: AppColors.white,
    borderRadius: width(2),
    flexDirection: "row",
    justifyContent: "space-around",
  },
  signalCOntainer: {
    paddingHorizontal: width(3),
    paddingVertical: height(2.5),
    borderRadius: width(2),
    backgroundColor: AppColors.white,
    justifyContent: "space-around",
  },
  signalGap: { gap: width(1.25) },
  simGap: { gap: width(6.25) },
  header: {
    backgroundColor: AppColors.white,
    paddingLeft: width(6),
    paddingRight: width(8.75),
    paddingVertical: height(6.25),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  addContactButton: {
    backgroundColor: "#E4DAFF",
    gap: width(2.5),
    height: height(6.6),
    width: width(13.25),
    borderRadius: width(4),
    flexDirection: "row",
  },
  archive: {
    gap: width(0.5),
    flex: 1,
    alignItems: "center",
  },
  achiveText: {
    fontSize: width(3.5),
    fontWeight: "500",
    color: AppColors.black,
  },
  deviceText: {
    fontSize: width(4.5),
    fontWeight: "700",
    color: AppColors.black,
  },
  gatwayText: {
    fontSize: width(4),
    fontWeight: "400",
    color: AppColors.black,
  },
  simGatewayStyle: {
    paddingTop: height(4),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rightStyle: {
    flexDirection: "row",
    gap: width(3.75),
    alignItems: "center",
  },
  onlineStyle: {
    flexDirection: "row",
    gap: width(1.75),
    alignItems: "center",
  },
  dotStyle: {
    backgroundColor: AppColors.green,
    height: height(1.37),
    width: width(2.75),
    borderRadius: width(2.75),
  },
  emailText: {
    paddingTop: width(3),
    fontSize: width(3),
    fontWeight: "500",
    color: AppColors.otpPlaceHolderColor,
  },
  onlineText: {
    fontSize: width(3.5),
    fontWeight: "400",
    color: AppColors.green,
  },
  img: {
    height: height(7),
    width: width(14),
  },
  simCardContainer: {
    paddingHorizontal: width(7.5),
    paddingVertical: height(2.5),
    borderRadius: width(2),
    backgroundColor: AppColors.white,
    justifyContent: "space-around",
  },
  simColumnGap: { gap: 40 },
  absoluteLine: {
    position: "absolute",
    height: height(11.5),
    right: width(45.25),
    width: width(0.1),
    backgroundColor: AppColors.otpPlaceHolderColor,
    top: 29,
  },
});
export default styles;
