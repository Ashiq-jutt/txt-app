import * as React from "react";
import Svg, { G, Rect, Circle, Defs, ClipPath } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SwitchOff = (props) => (
  <Svg
    width={44}
    height={24}
    viewBox="0 0 44 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#clip0_46_8007)">
      <Rect width={44} height={24} rx={12} fill="#F2F4F7" />
      <G filter="url(#filter0_dd_46_8007)">
        <Circle cx={12} cy={12} r={10} fill="white" />
      </G>
    </G>
    <Defs>
      <ClipPath id="clip0_46_8007">
        <Rect width={44} height={24} rx={12} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SwitchOff;
