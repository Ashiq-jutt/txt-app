import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const VerticalSimCard = (props) => (
  <Svg
    width={29}
    height={36}
    viewBox="0 0 29 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M2.02365 34.6721L13.3714 34.629L27.0832 34.5769L26.9956 11.5222L18.9215 2.03007L1.8999 2.09473L2.02365 34.6721Z"
      stroke="#494949"
      strokeWidth={2.5}
      strokeLinejoin="round"
    />
    <Path
      d="M14.7812 25.5342V15.1416H14.748L11.5771 17.4243V15.8472L14.7646 13.5562H16.2256V25.5342H14.7812Z"
      fill="#494949"
    />
  </Svg>
);
export default VerticalSimCard;
