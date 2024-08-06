import * as React from "react";
import Svg, { Path } from "react-native-svg";
const Archive = (props) => (
  <Svg
    width={20}
    height={22}
    viewBox="0 0 20 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M17.4999 7.33333V19.25H2.49992V7.33333M8.33325 11H11.6666M0.833252 2.75H19.1666V7.33333H0.833252V2.75Z"
      stroke="#303030"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default Archive;
