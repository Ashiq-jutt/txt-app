import * as React from "react";
import Svg, { Path } from "react-native-svg";
const CrossIcon = (props) => (
  <Svg
    width={30}
    height={27}
    viewBox="0 0 30 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M2 2L27.0148 25"
      stroke="white"
      strokeWidth={4}
      strokeLinecap="round"
    />
    <Path
      d="M27.0151 2L2.00034 25"
      stroke="white"
      strokeWidth={4}
      strokeLinecap="round"
    />
  </Svg>
);
export default CrossIcon;
