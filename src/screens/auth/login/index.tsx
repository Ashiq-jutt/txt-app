import { yupResolver } from "@hookform/resolvers/yup";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useRef, useState } from "react";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { TextInput, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import { EyeOpen } from "~assets/SVG";
import {
  AppHeader,
  Button,
  LargeText,
  ScreenWrapper,
  SmallText,
  Spacer,
} from "~components";
import { InputField } from "~components/input";
import { setIsLoggedIn } from "~redux/slices/user";
import ScreenNames from "~routes/routes";
import { AppColors } from "~utils";
import AppFonts from "~utils/app-fonts";
import { height } from "~utils/dimensions";
import styles from "./styles";
import { LoginFormValidation } from "./validation";

type FormData = {
  email: string;
  password: string;
};

type Props = NativeStackScreenProps<any>;

const Login: React.FC<Props> = ({ navigation }: Props) => {
  const dispatch = useDispatch();
  const passwordRef = useRef<TextInput | null>(null);
  const [secure, setSecure] = useState(true);

  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<FormData>({
    mode: "all",
    resolver: yupResolver(LoginFormValidation),
  });

  const loginHandler: SubmitHandler<FormData> = async (data: FormData) => {
    dispatch(setIsLoggedIn(true));
  };

  const onError: SubmitErrorHandler<FormData> = (errors) => {
    console.log(errors);
  };

  return (
    <ScreenWrapper
      statusBarColor={AppColors.white}
      barStyle="dark-content"
      backgroundColor={AppColors.white}
      scrollEnabled
      headerUnScrollable={() => (
        <AppHeader onPressIcon={() => navigation.goBack()} />
      )}
    >
      <View style={styles.mainViewContainer}>
        <View style={styles.mainText}>
          <LargeText fontFamily={AppFonts.SFProTextMedium} size={7}>
            Welcome back! Glad to see you, Again!
          </LargeText>
        </View>
        <Spacer vertical={height(2)} />
        <InputField
          control={control}
          name="email"
          keyboardType="email-address"
          onSubmit={() => passwordRef?.current?.focus()}
          keytype="next"
          label=""
          placeholder="Enter your email or number"
          error={errors.email}
        />
        <InputField
          ref={passwordRef}
          label=""
          control={control}
          name="password"
          secureTextEntry={secure}
          placeholder="Enter your Password"
          error={errors.password}
          icon={secure ? <EyeOpen /> : <EyeOpen />}
          onLeftIconPress={() => {
            setSecure(!secure);
          }}
        />
        <Spacer vertical={height(2)} />
        <TouchableOpacity
          onPress={() => navigation.navigate(ScreenNames.FORGOTPASSWORD)}
        >
          <SmallText
            fontFamily={AppFonts.SFProTextRegular}
            color={AppColors.inputFieldPlaceHolderColor}
            size={3}
            textAlign="right"
          >
            Forgot Password?
          </SmallText>
        </TouchableOpacity>

        <Spacer vertical={height(5)} />
        <Button
          disabled={!isValid}
          withShadow
          onPress={handleSubmit(loginHandler, onError)}
        >
          Login
        </Button>
      </View>
      <View style={styles.bottomText}>
        <SmallText fontFamily={AppFonts.SFProTextRegular}>
          Don't have an account?
        </SmallText>
        <SmallText
          fontFamily={AppFonts.SFProTextRegular}
          onPress={() => navigation.navigate(ScreenNames.REGISTER)}
          color={AppColors.txtOrange}
        >
          {" "}
          Register Now
        </SmallText>
      </View>
    </ScreenWrapper>
  );
};

export default Login;
