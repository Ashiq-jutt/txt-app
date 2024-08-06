import React from "react";
import { Path, Svg } from "react-native-svg";
import AppColors from "~utils/app-colors";
const Camera = ({ color = AppColors.white, height = 42, width = 50 }) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 50 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M47.9166 35.5833C47.9166 36.6884 47.4776 37.7482 46.6962 38.5296C45.9148 39.311 44.855 39.75 43.7499 39.75H6.24992C5.14485 39.75 4.08504 39.311 3.30364 38.5296C2.52224 37.7482 2.08325 36.6884 2.08325 35.5833V12.6667C2.08325 11.5616 2.52224 10.5018 3.30364 9.72039C4.08504 8.93899 5.14485 8.5 6.24992 8.5H14.5833L18.7499 2.25H31.2499L35.4166 8.5H43.7499C44.855 8.5 45.9148 8.93899 46.6962 9.72039C47.4776 10.5018 47.9166 11.5616 47.9166 12.6667V35.5833Z"
        stroke={color}
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M24.9999 31.4167C29.6023 31.4167 33.3333 27.6857 33.3333 23.0833C33.3333 18.481 29.6023 14.75 24.9999 14.75C20.3975 14.75 16.6666 18.481 16.6666 23.0833C16.6666 27.6857 20.3975 31.4167 24.9999 31.4167Z"
        stroke={color}
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
export default Camera;
