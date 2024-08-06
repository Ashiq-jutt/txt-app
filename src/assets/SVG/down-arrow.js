import React from "react";
import { Path, Svg } from "react-native-svg";
import AppColors from "~utils/app-colors";
const DownArrow = ({
  color = AppColors.inputFieldPlaceHolderColor,
  height = 30,
  width = 31,
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 31 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M22.5361 11.25L15.0361 18.75L7.53613 11.25"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
export default DownArrow;
