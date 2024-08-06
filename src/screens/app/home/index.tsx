import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useRef, useState } from "react";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  FilePickerModal,
  Header,
  ScreenWrapper,
  SettingModal,
  SmallText,
  Spacer,
} from "~components";
import Avatar from "~components/avatar";
import { FilePickerModalRef } from "~components/file-picker-modal";
import { SettingModalRef } from "~components/setting-modal";
import { selectUserMeta } from "~redux/slices/user";
import ScreenNames from "~routes/routes";
import { AppColors, CommonStyles } from "~utils";
import styles from "./styles";
type props = NativeStackScreenProps<any>;
export default function Home({ navigation, route }: props) {
  const showSettingModalRef = useRef<SettingModalRef | null>(null);
  const showImagePickerRef = useRef<FilePickerModalRef | null>(null);

  const dispatch = useDispatch();
  const userInfo = useSelector(selectUserMeta);

  const [profilePicture, setProfilePicture] = useState<string | null>(null);

  const pictureSelection = (value: any) => {
    if (value) {
      setProfilePicture(value.path);
    }
  };

  return (
    <ScreenWrapper statusBarColor={AppColors.primary} barStyle="light-content">
      <Header>DEVELO IT SOLUTION</Header>
      <View style={styles.mainViewContainer}>
        <Avatar
          source={profilePicture ? { uri: profilePicture } : undefined}
          showEdit
          onPress={() => showImagePickerRef.current?.show()}
        />
        <View style={CommonStyles.marginTop_4}>
          <SmallText>{userInfo?.name}</SmallText>
          <SmallText>{userInfo?.email}</SmallText>
        </View>
        <Button
          variant="secondary"
          buttonTextColor={AppColors.white}
          onPress={() => {
            navigation.navigate(ScreenNames.CONTACTS);
          }}
        >
          Settings
        </Button>
        <Spacer vertical={10} />

        <Button
          variant="secondary"
          buttonTextColor={AppColors.white}
          onPress={() => navigation.navigate(ScreenNames.SMSGATEWAY)}
        >
          SMS
        </Button>
        <Spacer vertical={10} />
        <Button
          variant="secondary"
          buttonTextColor={AppColors.white}
          onPress={() => {
            navigation.navigate(ScreenNames.MESSAGESHOMESCREEN);
          }}
        >
          Messages
        </Button>
      </View>

      <SettingModal ref={showSettingModalRef} />
      <FilePickerModal
        ref={showImagePickerRef}
        onFilesSelected={pictureSelection}
      />
    </ScreenWrapper>
  );
}
