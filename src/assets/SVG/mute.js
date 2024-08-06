import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { AppColors } from "~utils";
const MuteIcon = ({ color = AppColors.white }) => (
  <Svg
    width={19}
    height={19}
    viewBox="0 0 19 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M10.8368 16.4545C10.701 16.6887 10.506 16.8831 10.2714 17.0183C10.0367 17.1534 9.77075 17.2245 9.5 17.2245C9.22925 17.2245 8.96326 17.1534 8.72864 17.0183C8.49403 16.8831 8.29904 16.6887 8.16318 16.4545M14.6232 10.2727C14.2794 9.01427 14.1155 7.71349 14.1364 6.40909C14.1376 5.56919 13.9107 4.74472 13.4798 4.02375C13.0489 3.30279 12.4303 2.71241 11.69 2.31568C10.9497 1.91894 10.1155 1.73076 9.2766 1.77123C8.43767 1.8117 7.62549 2.07931 6.92682 2.54545M5.06455 5.06455C4.9303 5.50006 4.86256 5.95335 4.86364 6.40909C4.86364 11.8182 2.54545 13.3636 2.54545 13.3636H13.3636M1 1L18 18"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default MuteIcon;
