import * as React from "react";
import Svg, { G, Rect, Circle, Defs, ClipPath } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SwitchOn = (props) => (
  <Svg
    width={44}
    height={24}
    viewBox="0 0 44 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#clip0_199_4533)">
      <Rect width={44} height={24} rx={12} fill="#039855" />
      <G filter="url(#filter0_dd_199_4533)">
        <Circle cx={32} cy={12} r={10} fill="white" />
      </G>
    </G>
    <Defs>
      <ClipPath id="clip0_199_4533">
        <Rect width={44} height={24} rx={12} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SwitchOn;
