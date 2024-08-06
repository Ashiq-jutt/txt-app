import React from "react";
import { Path, Svg } from "react-native-svg";
import AppColors from "~utils/app-colors";
const ChatIcon = ({ color = AppColors.white, height = 14, width = 16 }) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M7.99993 13C12.2604 13 15.7142 10.1218 15.7142 6.57139C15.7142 3.02099 12.2604 0.142822 7.99993 0.142822C3.73945 0.142822 0.285645 3.02099 0.285645 6.57139C0.285645 8.82181 1.67326 10.8022 3.77439 11.9507C3.70405 12.5223 3.49262 13.2851 2.85707 13.8571C4.05889 13.6408 5.01805 13.2061 5.73456 12.7183C6.45088 12.9014 7.2116 13 7.99993 13Z"
        fill={color}
      />
    </Svg>
  );
};
export default ChatIcon;
