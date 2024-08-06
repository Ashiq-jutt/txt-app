import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { FlatList, View } from "react-native";
import { AppHeader, IMEIComp, ScreenWrapper, Spacer } from "~components";
import ScreenNames from "~routes/routes";
import { AppColors } from "~utils";
import { height } from "~utils/dimensions";
import { EditSimInfoData } from "~utils/dummyData";
import styles from "./styles";
type props = NativeStackScreenProps<any>;

export default function SimManagement({ navigation, route }: props) {
  const [flag, setFlag] = useState(true);

  const renderIMEIItem = ({ item, index }: { item: any; index: number }) => (
    <>
      <IMEIComp
        key={index}
        title={item.name}
        discription={item.des}
        discription2={item.des2}
        onPress={
          item.des2
            ? () => navigation.navigate(ScreenNames.EDITSIMNAME)
            : undefined
        }
      />
      <View style={styles.line}></View>
    </>
  );
  return (
    <ScreenWrapper
      statusBarColor={AppColors.white}
      barStyle="dark-content"
      backgroundColor={AppColors.white}
      headerUnScrollable={() => (
        <AppHeader
          title="Sim Management"
          onPressIcon={() => navigation.goBack()}
        />
      )}
    >
      <View style={styles.mainViewContainer}>
        <Spacer vertical={height(3.37)} />
        <IMEIComp
          title={"Enable"}
          switchFlag
          onPress={() => setFlag(!flag)}
          enalbe={flag}
        />
        <Spacer vertical={height(1.3)} />

        <View style={styles.imei}>
          <FlatList
            data={EditSimInfoData}
            keyExtractor={(_, index) => index.toString()}
            renderItem={renderIMEIItem}
          />
        </View>
        <IMEIComp title={"Share SIM Card"} hight={8} />
      </View>
    </ScreenWrapper>
  );
}
