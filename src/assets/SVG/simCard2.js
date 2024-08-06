import * as React from "react";
import { Text, View } from "react-native";
import Svg, { Path } from "react-native-svg";
import { AppColors } from "~utils";
import { width } from "~utils/dimensions";
const SimCard = ({ size = 19, value = 1 }) => (
  <Svg
    width={width(size)}
    height={width(size)}
    viewBox="0 0 47 37"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M3.9 34V19.5094V2L33.34 2L45.5 12.2642V34H3.9Z"
      stroke={AppColors.white}
      strokeWidth={2.5}
      strokeLinejoin="round"
    />
    {/* <Path
      d="M22.5544 25.3999V15.0073H22.5212L19.3503 17.29V15.7129L22.5378 13.4219H23.9988V25.3999H22.5544Z"
      fill="#141414"
    /> */}
    <View
      style={{
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          color: AppColors.white,
          fontSize: width(size / 2 - 1),
        }}
      >
        {value}
      </Text>
    </View>
  </Svg>
);
export default SimCard;
