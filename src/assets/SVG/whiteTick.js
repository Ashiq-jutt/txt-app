import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";
const WhiteTick = ({ height = 10, width = 10 }) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Rect x={0.5} y={0.5} width={15} height={15} rx={7.5} fill="#141414" />
    <Path
      d="M11.3334 5.5L6.75002 10.0833L4.66669 8"
      stroke="white"
      strokeWidth={1.66667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Rect x={0.5} y={0.5} width={15} height={15} rx={7.5} stroke="#141414" />
  </Svg>
);
export default WhiteTick;
