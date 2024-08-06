import { StyleSheet } from "react-native";
import { AppColors } from "~utils";
import { height } from "~utils/dimensions";

const styles = StyleSheet.create({
  mainContainer: {
    flex:1,
  },
  footerContainer: {
    marginBottom: height(2)
  },
  header: {
    shadowColor: AppColors.darkGray,
          shadowOffset: {width: 0, height: 0},
          shadowOpacity: 0.1,
          shadowRadius: 5,
          elevation: 4,
  },
  text: {
    marginVertical: height(2),
    alignSelf: 'center'
  }
});

export default styles;