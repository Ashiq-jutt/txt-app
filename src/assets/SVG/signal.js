import * as React from "react";
import { Text } from "react-native";
import Svg, { Path, Rect } from "react-native-svg";
import { AppColors } from "~utils";
import { width } from "~utils/dimensions";
const Signal = ({ number }) => (
  <Svg
    width={22}
    height={15}
    viewBox="0 0 22 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M0.892856 14.2858C0.357143 14.2858 0 13.9287 0 13.393V9.82157C0 9.28585 0.357143 8.92871 0.892856 8.92871C1.42857 8.92871 1.78571 9.28585 1.78571 9.82157V13.393C1.78571 13.9287 1.42857 14.2858 0.892856 14.2858Z"
      fill={number < 3 ? AppColors.black : AppColors.otpPlaceHolderColor}
    />
    <Path
      d="M4.46433 14.2859C3.92861 14.2859 3.57147 13.9288 3.57147 13.3931V8.03592C3.57147 7.50021 3.92861 7.14307 4.46433 7.14307C5.00004 7.14307 5.35718 7.50021 5.35718 8.03592V13.3931C5.35718 13.9288 5.00004 14.2859 4.46433 14.2859Z"
      fill={number < 3 ? AppColors.black : AppColors.otpPlaceHolderColor}
    />
    <Path
      d="M8.03574 14.2855C7.50003 14.2855 7.14288 13.9284 7.14288 13.3926V6.24979C7.14288 5.71408 7.50003 5.35693 8.03574 5.35693C8.57145 5.35693 8.9286 5.71408 8.9286 6.24979V13.3926C8.9286 13.9284 8.57145 14.2855 8.03574 14.2855Z"
      fill={number < 3 ? AppColors.black : AppColors.otpPlaceHolderColor}
    />
    <Path
      d="M11.6071 14.2856C11.0714 14.2856 10.7143 13.9284 10.7143 13.3927V4.46415C10.7143 3.92843 11.0714 3.57129 11.6071 3.57129C12.1429 3.57129 12.5 3.92843 12.5 4.46415V13.3927C12.5 13.9284 12.1429 14.2856 11.6071 14.2856Z"
      fill={number < 3 ? AppColors.black : AppColors.otpPlaceHolderColor}
    />
    <Path
      d="M15.1786 14.2856C14.6429 14.2856 14.2858 13.9285 14.2858 13.3928V2.6785C14.2858 2.14279 14.6429 1.78564 15.1786 1.78564C15.7143 1.78564 16.0715 2.14279 16.0715 2.6785V13.3928C16.0715 13.9285 15.7143 14.2856 15.1786 14.2856Z"
      fill={number < 3 ? AppColors.black : AppColors.otpPlaceHolderColor}
    />
    <Path
      d="M18.75 8.5C18.2143 8.5 17.8571 8.2875 17.8571 7.96875V0.53125C17.8571 0.2125 18.2143 0 18.75 0C19.2857 0 19.6428 0.2125 19.6428 0.53125V7.96875C19.6428 8.2875 19.2857 8.5 18.75 8.5Z"
      fill={number < 3 ? AppColors.black : AppColors.otpPlaceHolderColor}
    />
    {number > 2 && (
      <Path
        d="M3.58228 1.06055L6.79656 4.27483"
        stroke={"#ABABAB"}
        strokeLinecap="round"
      />
    )}
    {number > 2 && (
      <Path
        d="M3.58228 4.2749L6.79656 1.06062"
        stroke="#ABABAB"
        strokeLinecap="round"
      />
    )}
    <Rect x={14} y={9.3335} width={6} height={5} fill="white" />

    <Text
      style={{
        fontSize: width(2),
        position: "absolute",
        right: 1,
        color: number < 3 ? AppColors.black : AppColors.otpPlaceHolderColor,
        top: 7,
        fontWeight: "bold",
      }}
    >
      {number}
    </Text>
  </Svg>
);
export default Signal;
