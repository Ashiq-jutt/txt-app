import React, { FC } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { Icons } from "~assets";
import { SmallText } from "~components";
import { AppColors } from "~utils";
import styles from "./styles";

interface CardCompProps {
  title: string;
  image: any;
  enalbe: boolean;
}
const SimComp: FC<CardCompProps> = ({ image, enalbe, title }) => {
  console.log("this is enable ", enalbe);
  return (
    <View style={styles.mainViewContainer}>
      <View style={styles.simConfig}>
        <View style={styles.txtCon}>
          <Image source={image} style={styles.SimImg} />
          {!enalbe ? (
            <SmallText
              color={AppColors.inputFieldPlaceHolderColor}
              textStyles={styles.simText}
            >
              {title}
            </SmallText>
          ) : (
            <SmallText color={AppColors.black} textStyles={styles.simText}>
              {title}
            </SmallText>
          )}
        </View>
        <View style={styles.imgCon}>
          {enalbe ? (
            <>
              <SmallText color={AppColors.txtOrange}>{"Enabled"}</SmallText>
              <TouchableOpacity>
                <Image source={Icons.forwardArrow} style={styles.img} />
              </TouchableOpacity>
            </>
          ) : (
            <TouchableOpacity>
              <Image source={Icons.forwardArrow} style={styles.imgOnly} />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

export default SimComp;

