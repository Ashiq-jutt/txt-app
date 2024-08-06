import React from "react";
import { ClipPath, Defs, G, Path, Svg } from "react-native-svg";
import AppColors from "~utils/app-colors";
const ProfileTabIcon = ({
  color = AppColors.txtButtonColor,
  height = 25,
  width = 25,
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G clip-path="url(#clip0_72_1227)">
        <Path
          d="M17.5 21V19C17.5 17.9391 17.0786 16.9217 16.3284 16.1716C15.5783 15.4214 14.5609 15 13.5 15H5.5C4.43913 15 3.42172 15.4214 2.67157 16.1716C1.92143 16.9217 1.5 17.9391 1.5 19V21M23.5 21V19C23.4993 18.1137 23.2044 17.2528 22.6614 16.5523C22.1184 15.8519 21.3581 15.3516 20.5 15.13M16.5 3.13C17.3604 3.3503 18.123 3.8507 18.6676 4.55231C19.2122 5.25392 19.5078 6.11683 19.5078 7.005C19.5078 7.89317 19.2122 8.75608 18.6676 9.45769C18.123 10.1593 17.3604 10.6597 16.5 10.88M13.5 7C13.5 9.20914 11.7091 11 9.5 11C7.29086 11 5.5 9.20914 5.5 7C5.5 4.79086 7.29086 3 9.5 3C11.7091 3 13.5 4.79086 13.5 7Z"
          stroke={color}
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_72_1227">
          <React
            width="24"
            height="24"
            fill="white"
            transform="translate(0.5)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default ProfileTabIcon;
