import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const ChatAvatar = (props) => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G id="user">
      <Path
        id="Icon"
        d="M16.6666 17.5V15.8333C16.6666 14.9493 16.3155 14.1014 15.6903 13.4763C15.0652 12.8512 14.2174 12.5 13.3333 12.5H6.66665C5.78259 12.5 4.93474 12.8512 4.30962 13.4763C3.6845 14.1014 3.33331 14.9493 3.33331 15.8333V17.5M13.3333 5.83333C13.3333 7.67428 11.8409 9.16667 9.99998 9.16667C8.15903 9.16667 6.66665 7.67428 6.66665 5.83333C6.66665 3.99238 8.15903 2.5 9.99998 2.5C11.8409 2.5 13.3333 3.99238 13.3333 5.83333Z"
        stroke="white"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default ChatAvatar;
