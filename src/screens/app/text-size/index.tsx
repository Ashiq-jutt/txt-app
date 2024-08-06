import { Slider } from "@miblanchard/react-native-slider";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { FlatList, View } from "react-native";
import { AppHeader, ChatBubble, MediumText, ScreenWrapper } from "~components";
import { AppColors } from "~utils";
import { textSizeData } from "~utils/dummyData";
import styles from "./styles";

type Props = NativeStackScreenProps<any>;

const TextSize = ({ navigation, route }: Props) => {
  const [value, setValue] = useState(0);

  const handleSliderChange = (sliderValue: number) => {
    let incrementValue = Math.floor(sliderValue / 20) * 4;

    setValue(incrementValue);
  };
  const renderChatBubble = ({ item, index }: { item: any; index: number }) => (
    <ChatBubble
      value={value}
      key={index}
      message={item?.message}
      showProfile={false}
      alignSelf={item?.id === 1 ? "flex-start" : "flex-end"}
      bubbleBGColor={
        item?.id === 1 ? AppColors.bubbleLightGrey : AppColors.bubbleDarkGrey
      }
      textColor={item?.id === 1 ? AppColors.black : AppColors.white}
    />
  );
  return (
    <ScreenWrapper
      scrollEnabled={false}
      footerUnScrollable={() => (
        <View style={styles.footerMainContainer}>
          <View style={styles.sliderContainer}>
            <MediumText textStyles={[styles.smallTextStyle]}>A</MediumText>
            <MediumText textStyles={[styles.largeTextStyle]}>A</MediumText>
          </View>
          <Slider
            renderTrackMarkComponent={() => <View style={styles.trackMarks} />}
            containerStyle={styles.slider}
            step={20}
            thumbStyle={styles.thumbStyle}
            minimumValue={0}
            trackMarks={[0, 20, 40, 60, 80, 100]}
            maximumValue={100}
            minimumTrackStyle={styles.minimumTrack}
            onValueChange={(sliderValue) => handleSliderChange(sliderValue)}
          />
        </View>
      )}
      headerUnScrollable={() => (
        <AppHeader
          onPressIcon={() => navigation.goBack()}
          showSaveText
          containerStyle={styles.header}
          title="Text Size"
        />
      )}
    >
      <FlatList
        data={textSizeData}
        renderItem={renderChatBubble}
        keyExtractor={(item, index) => index.toString()}
      />
    </ScreenWrapper>
  );
};

export default TextSize;

// import { Slider } from "@miblanchard/react-native-slider";
// import { NativeStackScreenProps } from "@react-navigation/native-stack";
// import React from "react";
// import { FlatList, View } from "react-native";
// import { AppHeader, ChatBubble, MediumText, ScreenWrapper } from "~components";
// import { AppColors } from "~utils";
// import { textSizeData } from "~utils/dummyData";
// import styles from "./styles";
// type props = NativeStackScreenProps<any>;
// const TextSize = ({ navigation, route }: props) => {
//   return (
//     <ScreenWrapper
//       scrollEnabled={false}
//       footerUnScrollable={() => (
//         <View style={styles.footerMainContainer}>
//           <View style={styles.sliderContainer}>
//             <MediumText textStyles={[styles.smallTextStyle]}>A</MediumText>
//             <MediumText textStyles={[styles.largeTextStyle]}>A</MediumText>
//           </View>
//           <Slider
//             renderTrackMarkComponent={() => <View style={styles.trackMarks} />}
//             containerStyle={styles.slider}
//             step={20}
//             thumbStyle={styles.thumbStyle}
//             minimumValue={0}
//             trackMarks={[0, 20, 40, 60, 80, 100]}
//             maximumValue={100}
//             minimumTrackStyle={styles.minimumTrack}
//           />
//         </View>
//       )}
//       headerUnScrollable={() => (
//         <AppHeader
//           onPressIcon={() => navigation.goBack()}
//           showSaveText
//           containerStyle={styles.header}
//           title="Text Size"
//         />
//       )}
//     >
//       <View style={styles.mainContainer}>
//         <FlatList
//           data={textSizeData}
//           renderItem={({ item, index }) => (
//             <ChatBubble
//               key={index}
//               message={item?.message}
//               showProfile={false}
//               alignSelf={item?.id === 1 ? "flex-start" : "flex-end"}
//               bubbleBGColor={
//                 item?.id === 1
//                   ? AppColors.bubbleLightGrey
//                   : AppColors.bubbleDarkGrey
//               }
//               textColor={item?.id === 1 ? AppColors.black : AppColors.white}
//             />
//           )}
//         />
//       </View>
//     </ScreenWrapper>
//   );
// };

// export default TextSize;
