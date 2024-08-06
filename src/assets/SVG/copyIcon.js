import * as React from "react";
import Svg, { Path } from "react-native-svg";
const CopyIcon = (props) => (
  <Svg
    width={22}
    height={24}
    viewBox="0 0 22 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M4 15.3H3C2.46957 15.3 1.96086 15.0682 1.58579 14.6556C1.21071 14.2431 1 13.6835 1 13.1V3.2C1 2.61652 1.21071 2.05695 1.58579 1.64436C1.96086 1.23178 2.46957 1 3 1H12C12.5304 1 13.0391 1.23178 13.4142 1.64436C13.7893 2.05695 14 2.61652 14 3.2V4.3M10 8.7H19C20.1046 8.7 21 9.68497 21 10.9V20.8C21 22.015 20.1046 23 19 23H10C8.89543 23 8 22.015 8 20.8V10.9C8 9.68497 8.89543 8.7 10 8.7Z"
      stroke="#303030"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default CopyIcon;
