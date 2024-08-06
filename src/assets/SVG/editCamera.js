import React from "react";
import { Defs, G, Path, Svg } from "react-native-svg";
import AppColors from "~utils/app-colors";
const EditCamera = ({ color = AppColors.white, height = 42, width = 50 }) => {
  return (
    <Svg
      width="57"
      height="60"
      viewBox="0 0 57 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M47.9166 49.5833C47.9166 50.6884 47.4776 51.7482 46.6962 52.5296C45.9148 53.311 44.855 53.75 43.7499 53.75H6.24992C5.14485 53.75 4.08504 53.311 3.30364 52.5296C2.52224 51.7482 2.08325 50.6884 2.08325 49.5833V26.6667C2.08325 25.5616 2.52224 24.5018 3.30364 23.7204C4.08504 22.939 5.14485 22.5 6.24992 22.5H14.5833L18.7499 16.25H31.2499L35.4166 22.5H43.7499C44.855 22.5 45.9148 22.939 46.6962 23.7204C47.4776 24.5018 47.9166 25.5616 47.9166 26.6667V49.5833Z"
        stroke="white"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M24.9999 45.4167C29.6023 45.4167 33.3333 41.6857 33.3333 37.0833C33.3333 32.481 29.6023 28.75 24.9999 28.75C20.3975 28.75 16.6666 32.481 16.6666 37.0833C16.6666 41.6857 20.3975 45.4167 24.9999 45.4167Z"
        stroke="white"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <G clip-path="url(#clip0_46_7526)">
        <Path
          d="M44 3.99998H37C36.4696 3.99998 35.9609 4.2107 35.5858 4.58577C35.2107 4.96084 35 5.46955 35 5.99998V20C35 20.5304 35.2107 21.0391 35.5858 21.4142C35.9609 21.7893 36.4696 22 37 22H51C51.5304 22 52.0391 21.7893 52.4142 21.4142C52.7893 21.0391 53 20.5304 53 20V13M51.5 2.49998C51.8978 2.10216 52.4374 1.87866 53 1.87866C53.5626 1.87866 54.1022 2.10216 54.5 2.49998C54.8978 2.89781 55.1213 3.43737 55.1213 3.99998C55.1213 4.56259 54.8978 5.10216 54.5 5.49998L45 15L41 16L42 12L51.5 2.49998Z"
          stroke="white"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_46_7526">
          <React
            width="24"
            height="24"
            fill="white"
            transform="translate(33)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default EditCamera;
