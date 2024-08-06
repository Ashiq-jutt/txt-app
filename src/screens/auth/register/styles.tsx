import { StyleSheet } from 'react-native';
import { AppColors } from '~utils';
import { height ,width} from '~utils/dimensions';

const styles = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
    width: width(100),
    backgroundColor: AppColors.white,
    paddingLeft: width(5),
    paddingRight: width(5),
  },
  bottomText: {
    flexDirection: "row",
    paddingLeft: width(17),
    marginTop: height(16),
  },
  mainText: {
    width: width(85),
  },
  helloText: {},
  title: {
    color: AppColors.black,
    fontWeight: "bold",
    fontSize: width(4),
    marginBottom: height(2),
  },
});
export default styles;
