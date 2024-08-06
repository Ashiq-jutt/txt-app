import SplashScreen from "react-native-splash-screen";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { Loader } from "~components";
import {
  AutoReply,
  BroadCast,
  Chat,
  ContactQuickSelect,
  EditContact,
  EditEmail,
  EditSimName,
  HomeScreen,
  MessageQuickSelect,
  MessagesHomeScreen,
  NewContact,
  ProfileViewEmail,
  SMSGateWay,
  SelectBroadcastNumber,
  TextSize,
  ViewContact,
} from "~screens/app";
import SettingsScreen from "~screens/app/settings";
import SimManagement from "~screens/app/simManagement";
import {
  ForgotPassword,
  Login,
  OTPScreen,
  Register,
  ResetPassword,
  Welcome,
} from "~screens/auth";
import BottomTab from "./bottom";
import ScreenNames from "./routes";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "~redux/slices/user";
const Stack = createNativeStackNavigator();

export default function Routes() {
  const isLogin = useSelector(selectIsLoggedIn);

  React.useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      <Loader />
      {!isLogin ? (
        <Stack.Navigator
          initialRouteName={ScreenNames.WELCOME}
          screenOptions={{ header: () => false, navigationBarHidden: true }}
        >
          <Stack.Screen name={ScreenNames.LOGIN} component={Login} />
          <Stack.Screen name={ScreenNames.WELCOME} component={Welcome} />
          <Stack.Screen name={ScreenNames.REGISTER} component={Register} />
          <Stack.Screen
            name={ScreenNames.FORGOTPASSWORD}
            component={ForgotPassword}
          />
          <Stack.Screen name={ScreenNames.OTPSCREEN} component={OTPScreen} />
          <Stack.Screen
            name={ScreenNames.RESETPASSWORD}
            component={ResetPassword}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator
          initialRouteName={ScreenNames.BOTTOMTAB}
          screenOptions={{ header: () => false, navigationBarHidden: true }}
        >
          <Stack.Screen name={ScreenNames.BOTTOMTAB} component={BottomTab} />
          <Stack.Screen name={ScreenNames.CHAT} component={Chat} />
          <Stack.Screen name={ScreenNames.TEXTSIZE} component={TextSize} />
          <Stack.Screen name={ScreenNames.HOME} component={HomeScreen} />
          <Stack.Screen name={ScreenNames.SMSGATEWAY} component={SMSGateWay} />
          <Stack.Screen
            name={ScreenNames.MESSAGESHOMESCREEN}
            component={MessagesHomeScreen}
          />
          <Stack.Screen
            name={ScreenNames.SETTINGS}
            component={SettingsScreen}
          />

          <Stack.Screen
            name={ScreenNames.SIMMANAGEMENT}
            component={SimManagement}
          />
          <Stack.Screen name={ScreenNames.NEWCONTACT} component={NewContact} />
          <Stack.Screen
            name={ScreenNames.EDITCONTACT}
            component={EditContact}
          />
          <Stack.Screen
            name={ScreenNames.VIEWCONTACT}
            component={ViewContact}
          />
          <Stack.Screen
            name={ScreenNames.PROFILEVIEWEMAIL}
            component={ProfileViewEmail}
          />
          <Stack.Screen name={ScreenNames.EDITEMAIL} component={EditEmail} />
          <Stack.Screen name={ScreenNames.AUTOREPLY} component={AutoReply} />
          <Stack.Screen
            name={ScreenNames.EDITSIMNAME}
            component={EditSimName}
          />
          <Stack.Screen
            name={ScreenNames.MESSAGEQUICKSELECT}
            component={MessageQuickSelect}
          />
          <Stack.Screen
            name={ScreenNames.SELECTBROADCASTNUMBER}
            component={SelectBroadcastNumber}
          />
          <Stack.Screen name={ScreenNames.BROADCAST} component={BroadCast} />
          <Stack.Screen
            name={ScreenNames.CONTACTQUICKSELECT}
            component={ContactQuickSelect}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
