import React from "react";
import { Path, Svg } from "react-native-svg";
import AppColors from "~utils/app-colors";
const AddContact = ({ color = AppColors.white, height = 26, width = 30 }) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 30 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M20 24.25V21.75C20 20.4239 19.4732 19.1521 18.5355 18.2145C17.5979 17.2768 16.3261 16.75 15 16.75H6.25C4.92392 16.75 3.65215 17.2768 2.71447 18.2145C1.77678 19.1521 1.25 20.4239 1.25 21.75V24.25M25 8V15.5M28.75 11.75H21.25M15.625 6.75C15.625 9.51142 13.3864 11.75 10.625 11.75C7.86358 11.75 5.625 9.51142 5.625 6.75C5.625 3.98858 7.86358 1.75 10.625 1.75C13.3864 1.75 15.625 3.98858 15.625 6.75Z"
        stroke={color}
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
export default AddContact;
