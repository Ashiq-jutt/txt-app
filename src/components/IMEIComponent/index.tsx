import React, { FC } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { Icons } from "~assets";
import { SmallText } from "~components";
import { AppColors } from "~utils";
import styles from "./styles";
import { height, width } from "~utils/dimensions";
import { SwitchOff, SwitchOn, WhiteTick } from "~assets/SVG";

interface CardCompProps {
  title: string;
  discription?: string;
  discription2?: string;
  hight?: number;
  enalbe?: boolean;
  right?: boolean;
  left?: boolean;
  switchFlag?: any;
  onPress?: () => void;
}

const IMEIComp: FC<CardCompProps> = ({
  onPress = () => {},
  enalbe = false,
  right,
  left = true,
  title,
  switchFlag,
  hight = 6,
  discription = "",
  discription2,
}) => {
  return (
    <View style={styles.mainViewContainer}>
      <View
        style={[
          styles.simConfig,
          { height: hight ? height(hight) : height(hight) },
        ]}
      >
        {right && (
          <View style={styles.whiteTickView}>
            <WhiteTick />
          </View>
        )}
        <View style={[styles.txtCon, { marginLeft: right ? width(4) : 0 }]}>
          <SmallText color={AppColors.black} textStyles={styles.simText}>
            {title}
          </SmallText>
          {discription2 && (
            <SmallText
              color={AppColors.otpPlaceHolderColor}
              textStyles={styles.des2Text}
            >
              {discription2}
            </SmallText>
          )}
        </View>
        <View style={styles.ccon}>
          <View style={styles.discriptionCon}>
            <SmallText textStyles={styles.discriptionText}>
              {discription}
            </SmallText>
          </View>
          {left && (
            <TouchableOpacity
              style={[styles.imgCon, { right: right ? width(5) : width(2) }]}
              onPress={onPress}
            >
              {switchFlag ? (
                <>{enalbe ? <SwitchOn /> : <SwitchOff />}</>
              ) : (
                <Image source={Icons.forwardArrow} style={styles.img} />
              )}
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

export default IMEIComp;

