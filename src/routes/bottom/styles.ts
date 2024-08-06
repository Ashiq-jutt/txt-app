import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { height, width } from "~utils/dimensions";

const styles = StyleSheet.create({
    mainViewContainer: {
        backgroundColor: "#B0BBA3",
          paddingBottom: height(0.5),
          paddingVertical: height(1),
          paddingHorizontal: width(1),
          height: height(8),
      },
      
});

export default styles;
// import { StyleSheet } from 'react-native';
// import { AppColors } from "~utils";
// import { height, width } from '~utils/dimensions';

// const styles = StyleSheet.create({
//   container:{ flex: 1 },
//   inActiveStyle: {
//     flexDirection: "row",
//     justifyContent: "space-evenly",
//     alignItems: "center",
//     backgroundColor: AppColors.primary,
//     height: height(85 / 8),
//   },
//   activeStyle: {
//     height: height(85 / 8),
//     justifyContent: "flex-start",
//     alignItems: "center",
//     borderTopColor: AppColors.primary,
//   },
//   iconWrapper:{
//     paddingBottom:height(.5)
//   },
//   bottomLabel:{
//     fontSize:width(12/4),fontWeight:'400',justifyContent:'center'
//   },
//   activeHeader:{
//     height: height(.6),
//     width: width(90/5),
//     marginBottom: width(14 / 4),
//     borderBottomEndRadius: width(1.5),
//     borderBottomStartRadius: width(1.5),
    
//   }
// });
// export default styles;